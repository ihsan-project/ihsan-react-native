'use strict'

const AWS = require('aws-sdk')
const fs = require('fs')
const { exit } = require('process')
const util = require('util')
const writeFile = util.promisify(fs.writeFile)

const ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID
const SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY
const BUCKET_NAME = process.env.AWS_CERT_BUCKET

console.log("test", BUCKET_NAME);

if (!BUCKET_NAME) {
    console.error('No environment keys!!');
    exit(0);
}

var s3 = new AWS.S3({
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY
})

s3.getObject({
    Key: 'google-services.json',
    Bucket: BUCKET_NAME
}).promise().then((data) => {
    writeFile('android/app/google-services.json', data.Body)
    console.log('Downloaded google-services.json successfully')
}).catch((err) => {
    throw err
});

s3.getObject({
    Key: 'GoogleService-Info.plist',
    Bucket: BUCKET_NAME
}).promise().then((data) => {
    writeFile('ios/IhsanReactNative/GoogleService-Info.plist', data.Body)
    console.log('Downloaded GoogleService-Info.plist successfully')
}).catch((err) => {
    throw err
});

s3.getObject({
    Key: '.env.js',
    Bucket: BUCKET_NAME
}).promise().then((data) => {
    writeFile('.env.js', data.Body)
    console.log('Downloaded .env.js successfully')
}).catch((err) => {
    throw err
});

s3.getObject({
    Key: 'Config-staging.xcconfig',
    Bucket: BUCKET_NAME
}).promise().then((data) => {
    writeFile('ios/Config-staging.xcconfig', data.Body)
    console.log('Downloaded Config-staging.xcconfig successfully')
}).catch((err) => {
    throw err
});