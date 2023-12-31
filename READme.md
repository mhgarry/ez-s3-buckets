# Easy S3 Buckets

## Table of Contents

- [Easy S3 Buckets](#easy-s3-buckets)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Licensing](#licensing)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
    - [For createBucket.js](#for-createbucketjs)
    - [for uploadToBucket.js](#for-uploadtobucketjs)
  - [Packages](#packages)
  - [How to Contribute](#how-to-contribute)
  - [Contact](#contact)

## Introduction

Easy S3 Buckets is designed to simplify the process of creating and managing Amazon S3 buckets, making it particularly useful for handling large data files, such as music, in data-intensive environments. This tool offers a streamlined approach for direct file and directory uploads to S3 buckets, bypassing the need for navigating through the AWS S3 UI.

## Licensing

This project is licensed under the MIT License. For more information, see the [MIT License](https://opensource.org/licenses/MIT).

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Features

- Efficient creation of new S3 buckets.
- Direct uploading of files and directories to Amazon S3 buckets.
- User-friendly interface for bulk uploads, avoiding the complexity of AWS S3 UI.

## Installation

Clone the repository and run `yarn` or `npm install` in the root directory to install dependencies. For more information on how to clone a repository, visit [GitHub Docs on Cloning a Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

## Usage

Ensure Node.js and Yarn/npm are installed on your machine. Configure your AWS credentials as described below:

### For createBucket.js

1. **AWS CLI Configured**: The script will automatically use the AWS CLI settings if configured on your machine. No further setup is required.

2. **Without AWS CLI**: If AWS CLI is not configured, create a `.env` file from the `.example.env` template and fill in your AWS credentials.

   ```plaintext
   AWS_ACCESS_KEY=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
   ```

   After setting up your .env file, the script will connect to your AWS account using these credentials. If using AWS CLI, this step is not necessary.

3. **Run the script** by typing node createBucket.js into your command line while in the root directory of this application

### for uploadToBucket.js

1. **Ensure your .env file is set up correctly** following the same principles as above.
2. **Place the root directory that contains the files you'd like to upload into the root directory of this application.**
3. **Run the script** by typing node uploadToBucket.js in the command line while in the root directory of this application.

## Packages

- `aws-sdk`: For communication with AWS services, enabling file uploads to S3 buckets.
- `fs`: For reading and writing files, accessing the filesystem.
- `path`: For handling filesystem paths within the repository, locating files for upload.
- `dotenv`: For creating secure environment variables.

## How to Contribute

Fork and clone this repository to contribute. Submit pull requests for proposed changes and open issues for any bugs or feature suggestions.

## Contact

For questions or more information, reach out at <mhgarry92@gmail.com> or visit my [Github Profile](https://github.com/mhgarry)
