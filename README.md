
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>rclone-decrypt-express
</h1>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Express-000000.svg?style&logo=Express&logoColor=white" alt="Express" />
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

The rclone-decrypt-express project is a simple [Express](https://expressjs.com/) server to decrypt a Rclone crypted remote file at a specified URL. The server creates a read stream for the file, determine the file type of the stream using the [file-type](https://github.com/sindresorhus/file-type) library, and then dowloads it to your local machine. The decryption is performed using the [rclone-js](https://github.com/FWeinb/rclone-js) library.

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- The URL of a [Rclone](https://rclone.org/) crypted remote file

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
yarn install
```

4. Copy the `.env.example` to `.env` and set your `RCLONE_PASSWORD` and `RCLONE_SALT` (you can find these in your `rclone.conf` file respectively as "password" and "password2").

### 🎮 Using rclone-decrypt-express

The server uses [forever-monitor](https://github.com/foreversd/forever-monitor) as a process manager. This allows the server to automatically restart in the event of a crash or unexpected termination.

To start the server, run the following command:

```sh
yarn start
```

Once the server is running, to use the application, you need to pass the URL of the encrypted file you want to decrypt as a query parameter to the server's root endpoint (`/`). The file must be accessible through Rclone.

For example, if you have an encrypted file at `https://cloud-storage.com/encrypted-file` and you are running the server on `localhost:3000`, you would open your web browser and navigate to [http://localhost:3000/?fileUrl=https://cloud-storage.com/encrypted-file](http://localhost:3000/?fileUrl=https://cloud-storage.com/encrypted-file).

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
