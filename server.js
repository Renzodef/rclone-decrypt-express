import dotenv from 'dotenv';
import express from "express";
import { fileTypeFromStream } from "file-type";
import from2 from "from2";
import { Rclone } from "rclone";
import chunker from "stream-chunker";

const app = express();
const port = 3000;
dotenv.config();

app.get('*', async (req, res) => {
    if (!!process.env.RCLONE_PASSWORD.trim() && !!process.env.RCLONE_SALT.trim()) {
        const fileUrl = req.query.fileUrl;
        if (isValidUrl(fileUrl)) {
            const rcloneInstance = await Rclone({
                password: process.env.RCLONE_PASSWORD,
                salt: process.env.RCLONE_SALT
            });
            // First stream will be used to determine the mime type
            const decryptedStream1 = await rcloneInstance.File.createReadStream(
                fetchStreamFactory(fileUrl)
            );
            // Second stream (same of the first) will be visualized in the browser or downloaded
            const decryptedStream2 = await rcloneInstance.File.createReadStream(
                fetchStreamFactory(fileUrl)
            );
            fileTypeFromStream(decryptedStream1).then((fileType) => {
                const fileName = 'Download.' + fileType.ext;
                res.setHeader('Content-Type', fileType.mime);
                res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
                decryptedStream2.pipe(res);
            });
        } else if (fileUrl == undefined) {
            // Do Nothing
        } else {
            res.status(400).send("Invalid URL");
        }
    } else {
        res.status(400).send("The password or/and salt of your Rclone instance are not set or empty");
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (err) {
        return false;
    }
}

function fetchStreamFactory(url) {
    return (opts) => {
        const readerPromise = fetch(url, {
            headers: {
                Range: "bytes=" + opts.start + (opts.end ? "-" + opts.end : "-")
            }
        }).then((response) => response.body.getReader());
        return from2((_, next) => {
            readerPromise.then((reader) => {
                async function process() {
                    return reader.read().then(({ value, done }) => {
                        if (done) {
                            return next(null, null);
                        }
                        next(null, value);
                    });
                }
                return process();
            });
        }).pipe(chunker(opts.chunkSize, { flush: true }));
    };
}
