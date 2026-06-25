# Infrastructure

This folder contains the AWS CDK app for the NOVA Transfer Planner.

The first stack deploys the React frontend with:

- A private S3 bucket for the production build files
- A CloudFront distribution in front of the bucket
- CloudFront Origin Access Control so the bucket is not public
- HTTPS redirects
- Security response headers
- Single-page app routing for React Router
- CloudFormation outputs for the bucket name and CloudFront URL

## How this fits together

```txt
User
  ↓
CloudFront public URL
  ↓
Private S3 bucket
  ↓
React app files
```

The S3 bucket stores the static build files. CloudFront is the public entry
point. Users do not access the S3 bucket directly.

## Local commands

Install infrastructure dependencies:

```bash
npm install
```

Compile the TypeScript infrastructure code:

```bash
npm run build
```

Generate the CloudFormation template locally:

```bash
npm run synth
```

Compare local infrastructure code to what is deployed in AWS:

```bash
npm run diff
```

Deploy to AWS:

```bash
npm run deploy
```

Destroy the deployed stack:

```bash
npm run destroy
```

## Deployment order

From the project root:

```bash
npm run build
cd infrastructure
npm run synth
```

Before the first real deployment, the AWS account/region must be bootstrapped
for CDK:

```bash
cdk bootstrap
```

Then deploy:

```bash
npm run deploy
```

## Important notes

This first stack is intentionally a development stack. The S3 bucket uses
`removalPolicy: DESTROY` and `autoDeleteObjects: true`, which makes cleanup
easy while learning.

For a production version, change those settings so user-facing infrastructure
is retained instead of automatically deleted.

API Gateway, Lambda, DynamoDB, Cognito, and monitoring will be added in later
stacks.
