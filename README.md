
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>rclone-decrypt-express
</h1>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Express-000000.svg?style&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/PM2-2B037A.svg?style&logo=PM2&logoColor=white" alt="PM2" />
</p>
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [🚀 Getting Started](#-getting-started)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---


## 📍 Overview

The rclone-decrypt-express project is a simple [Express](https://expressjs.com/) server that uses the [Rclone](https://rclone.org/) JavaScript library [rclone-js](https://www.npmjs.com/package/rclone) to create a read stream for a Rclone crypted remote file at a specified URL, determine the file type of the stream, and then set up the response headers to allow the file to be downloaded by the client. It uses [dotenv](https://www.npmjs.com/package/dotenv) for environment variable management, [file-type](https://www.npmjs.com/package/file-type) to determine the file type from the stream, [from2](https://www.npmjs.com/package/from2) to create a readable stream, and [stream-chunker](https://www.npmjs.com/package/stream-chunker) to chunk the stream data.

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
- [Node.js](https://nodejs.org/)
- [Npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Rclone](https://rclone.org/)

### 📦 Installation

1. Clone the rclone-decrypt-express repository:
```sh
git clone https://github.com/Renzodef/rclone-decrypt-express
```

2. Change to the project directory:
```sh
cd rclone-decrypt-express
```

3. Install the dependencies:
```sh
npm install
```
or
```sh
yarn install
```

4. Copy the `.env.example` to `.env` and set your `RCLONE_PASSWORD` and `RCLONE_SALT`.

### 🎮 Using rclone-decrypt-express

This application uses [PM2](https://pm2.keymetrics.io/) as a process manager to keep the server running. PM2 provides features like automatic restarts if the application crashes and easy application management.

1. To start the server with PM2, run: `npm start` or `yarn start`
2. To stop the server, run: `npm run stop` or `yarn stop`
3. To restart the server, run: `npm run restart` or `yarn restart`

Once the server is running, to use the application, you need to pass the URL of the encrypted file you want to decrypt as a query parameter to the server's root endpoint (`/`). The file must be accessible through Rclone.

For example, if you have an encrypted file at `https://cloud-storage.com/encrypted-file`, you would open your web browser and navigate to `http://localhost:3000/?fileUrl=https://cloud-storage.com/encrypted-file`.

The server will then decrypt the file and set up the response headers to allow you to download the decrypted file directly from your browser. 

---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Renzodef/rclone-decrypt-express/blob/main/LICENSE) file for additional info.
