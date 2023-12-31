/*
 script to populate existing bucket with your data
 */
require('dotenv').config();
const AWS = require('aws-sdk');
const fs = require('fs').promises;
const path = require('path');

// Configure AWS with the region and the profile from environment variables
AWS.config.update({ region: 'us-east-1', profile: process.env.AWS_PROFILE });

// Create an S3 service object, use whatever api version you require
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

/**
 * Asynchronously uploads a file to an S3 bucket.
 *
 * @param {string} filePath - The path of the file to be uploaded.
 * @param {string} bucketName - The name of the S3 bucket to upload to.
 * @param {string} bucketPath - The S3 bucket path (key) where the file will be stored.
 */
// handles the upload of a file to the S3 bucket
const uploadFileToS3 = async (filePath, bucketName, bucketPath) => {
  try {
    const fileContent = await fs.readFile(filePath);
    const uploadParams = {
      Bucket: bucketName,
      Key: bucketPath,
      Body: fileContent,
      // Additional parameters can be added here
    };
    const data = await s3.upload(uploadParams).promise();
    console.log(`File uploaded to S3: ${data.Location}`);
  } catch (err) {
    console.error('Error occurred while uploading file to S3:', err);
  }
};

/**
 * Asynchronously uploads all files in a directory to an S3 bucket.
 *
 * @param {Directories} directoryInstance - An instance of the Directories class.
 * @param {string} bucketName - The name of the S3 bucket to upload to.
 */

// handles the upload of all files in specified directories to the S3 bucket
const uploadDirectoryToS3 = async (directoryInstance, bucketName) => {
  try {
    // itterates through all subdirectories and uploads them to the S3 bucket
    for (let directoryPath of directoryInstance.SubDirectoryPaths) {
      const filesToUpload = await fs.readdir(directoryPath);
      for (let uploadFile of filesToUpload) {
        const filePath = path.join(directoryPath, uploadFile);
        const bucketPath = path.join(
          directoryPath.split('/').pop(),
          uploadFile
        );
        // uploads all files to the S3 bucket
        await uploadFileToS3(filePath, bucketName, bucketPath);
      }
    }
  } catch (err) {
    console.error('Error occurred while uploading directory to S3:', err);
  }
};

/**
 * Class representing a collection of directories for uploading.
 */
class Directories {
  /**
   * Create a Directories instance.
   *
   * @param {string} mainDirectory - The main directory path.
   * @param {string[]} subDirectories - An array of subdirectory paths.
   */
  constructor(mainDirectory, subDirectories) {
    this.mainDirectory = path.join(__dirname, mainDirectory);
    this.SubDirectoryPaths = subDirectories.map((subDir) =>
      path.join(this.mainDirectory, subDir)
    );
  }
}

// Create an instance of Directories for your root directory and its subdirectories
const yourDirectories = new Directories('root-directory-here', [
  'sub-directory-here',
  // ... other subdirectories
]);
// the bucket name that you want to upload to
const bucketName = process.env.BUCKET_NAME;

// Run the script to upload the directories to the S3 bucket
uploadDirectoryToS3(yourDirectories, bucketName);
