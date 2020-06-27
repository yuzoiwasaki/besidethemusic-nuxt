#!/bin/sh

S3_BUCKET_NAME=besidethemusic-production
CLOUDFRONT_DISTRIBUTION_ID=E2GLAMASJDSYOI

# Upload files to S3
aws s3 sync --acl public-read ./dist/ s3://$S3_BUCKET_NAME

# Delete CloudFront cache
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths '/*'
