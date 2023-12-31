/*
	script to create a bucket if you don't already
	have an existing bucket to populate with your data.
 */
const AWS = require('aws-sdk');

require('dotenv').config;

//set your region, I'm using us-east-1, but you can use any region you prefer

/* if you are using the aws-cli you don't need to specify anything, region is there as a default, if you aren't using the aws-cli you need to specify region, default key, and secret key */
AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretKey: process.env.AWS_SECRET_KEY,
});

// create a new S3 service object with specified parameters
const s3 = new AWS.S3({
  /*api version etc.. here */
});

// create a name for your bucket. Refer to https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html for naming rules.
const bucketName = 'my-bucket';

// set the parameters for the bucket you are creating
const bucketParams = {
  Bucket: bucketName,
  /* other parameters check refer to https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html */
};

// function to create a new bucket
const createBucket = async (bucketName, bucketParams) => {
  try {
    // create a variable to store a promise that will be resolved when the uploadData is successfully in the bucket
    const uploadData = await s3.createBucket(bucketParams).promise();
  } catch (err) {
    console.error(`Error creating bucket: ${err.message}`);
  }
};

// call the function to create the bucket
createBucket(bucketName, bucketParams);
