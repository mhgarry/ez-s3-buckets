require('dotenv').config();
const AWS = require('aws-sdk');

// Set AWS credentials from environment variables if provided
const awsConfig = { region: 'us-east-1' };
if (process.env.AWS_ACCESS_KEY && process.env.AWS_SECRET_KEY) {
  awsConfig.accessKeyId = process.env.AWS_ACCESS_KEY;
  awsConfig.secretAccessKey = process.env.AWS_SECRET_KEY;
}
AWS.config.update(awsConfig);

// Create a new S3 service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

// Define the name for your bucket
const bucketName = 'my-unique-bucket-name'; // Ensure this is unique

// Set the parameters for the bucket creation
const bucketParams = {
  Bucket: bucketName,
  // Additional parameters can be added here
};

// Async function to create a new bucket
const createBucket = async () => {
  try {
    // Attempt to get the bucket to check if it exists
    await s3.headBucket({ Bucket: bucketName }).promise();
    console.log(`Bucket ${bucketName} already exists.`);
  } catch (err) {
    if (err.statusCode === 404) {
      // Bucket does not exist, so create it
      await s3.createBucket(bucketParams).promise();
      console.log(`Bucket ${bucketName} created successfully.`);
    } else {
      // An error occurred (e.g., network error, invalid credentials)
      throw err;
    }
  }
};

// Call the function to create the bucket
createBucket().catch((err) => {
  console.error(`Error creating bucket: ${err.message}`);
});
