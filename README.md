# Rclone Decrypt Express

This application is a simple [Express](https://expressjs.com/) server that uses the [Rclone](https://rclone.org/) JavaScript library [rclone-js](https://www.npmjs.com/package/rclone) to create a read stream for a file at a specified URL, determine the file type of the stream, and then set up the response headers to allow the file to be downloaded by the client. It uses [dotenv](https://www.npmjs.com/package/dotenv) for environment variable management, [file-type](https://www.npmjs.com/package/file-type) to determine the file type from the stream, [from2](https://www.npmjs.com/package/from2) to create a readable stream, and [stream-chunker](https://www.npmjs.com/package/stream-chunker) to chunk the stream data.


## Requirements

- [Node.js](https://nodejs.org/)
- [Npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Rclone](https://rclone.org/)


## Installation

1. Clone this repository: `git clone https://github.com/Renzodef/rclone-decrypt-express.git`
2. Install the dependencies: `npm install` or `yarn install`
3. Copy the `.env.example` to `.env` and set your `RCLONE_PASSWORD` and `RCLONE_SALT`.

## Usage

This application uses [PM2](https://pm2.keymetrics.io/) as a process manager to keep the server running. PM2 provides features like automatic restarts if the application crashes and easy application management.

1. To start the server with PM2, run: `npm start` or `yarn start`
2. To stop the server, run: `npm run stop` or `yarn stop`
3. To restart the server, run: `npm run restart` or `yarn restart`

Once the server is running, to use the application, you need to pass the URL of the encrypted file you want to decrypt as a query parameter to the server's root endpoint (`/`). The file must be accessible through Rclone.

For example, if you have an encrypted file at `https://cloud-storage.com/encrypted-file`, you would open your web browser and navigate to `http://localhost:3000/?fileUrl=https://cloud-storage.com/encrypted-file`.

The server will then decrypt the file and set up the response headers to allow you to download the decrypted file directly from your browser. 

Please note that this application assumes that the `RCLONE_PASSWORD` and `RCLONE_SALT` environment variables are correctly set to allow decryption of the files.

## Contributing

We appreciate your contributions! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.
