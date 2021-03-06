# react-s3

![rxhl-cra](https://github.com/rxhl/react-s3/workflows/react-s3/badge.svg)

Deploy a react app to S3/CloudFront for static hosting using GitHub actions.

## Setup

Go to the settings tab and set the following two secrets that would be used by GitHub actions.

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY

## Appendix

### AWS config

This is not a part of the CI/CD process but for general testing.

```
# 1. Make sure you have an active AWS account

# 2. Install the AWS CLI [1]

# 3. Configure the AWS CLI [2]
$ aws configure
AWS Access Key ID [None]: YOUR_KEY_ID
AWS Secret Access Key [None]: YOUR_ACCESS_KEY
Default region name [None]: us-east-1
Default output format [None]: json

# 4. Verify that it's working
$ aws s3 ls
```

### CloudFront

Rather than hosting directly from S3, you can also put a CloudFront distribution in front of the bucket. The steps are as follows.

1.  Go to [CloudFront](https://console.aws.amazon.com/cloudfront/home?region=us-east-1) and create a new distribution
2.  Select the appropriate bucket
3.  Launch the new distribution

### Reference

[1] https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html

[2] https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html
