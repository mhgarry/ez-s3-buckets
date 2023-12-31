# Easy S3 Buckets

## Table of Contents

- [Easy S3 Buckets](#easy-s3-buckets)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Licensing](#licensing)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Packages](#packages)
  - [How to Contribute](#how-to-contribute)
  - [Contact](#contact)

## Introduction

Easy S3 Buckets simplifies the process of creating and managing Amazon S3 buckets. Designed for efficiency, it's particularly useful for handling large data files, such as music, in a data-intensive environment.

## Licensing

Licensed under the MIT License. For more information, visit [MIT License](https://opensource.org/licenses/MIT).
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- Direct file and directory uploads to Amazon S3 buckets.
- Creation of new S3 buckets.
- Streamlined user interface bypassing AWS S3 UI for bulk uploads.

## Installation

To install, clone the repository and run `yarn` in the root directory. For detailed instructions on cloning a repository, visit [GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

## Usage

Ensure Node.js and Yarn are installed. Fill out the `.example.env` file with AWS credentials and the desired bucket name. If you have AWS CLI configured, you won't need to include keys in the script. Adjust class variables to match your desired upload directories.

## Packages

- `aws-sdk`: Required for communication with AWS, enabling the application to upload files to S3 buckets.
- `fs`: Enables Node.js to read and write files, accessing the filesystem for file uploads.
- `path`: Essential for handling the filesystem within the repository, guiding the application to locate files for upload.

## How to Contribute

Contributors can fork and clone this repository, then submit a pull request. Please open issues for any bugs or feature suggestions.

## Contact

For further questions, reach me at mhgarry92@gmail.com. Visit my [GitHub](https://github.com/mhgarry92) for more projects.
