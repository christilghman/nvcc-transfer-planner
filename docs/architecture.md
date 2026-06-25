# Architecture

## Current state

The application is a client-side React app. Transfer pathway records are bundled
with the frontend, and a user's draft is stored in browser `localStorage`.

## Target state

```text
Browser
  |
  v
CloudFront ----> private S3 bucket (React build)
  |
  v
API Gateway ----> Lambda ----> DynamoDB
     |
     +----------> Cognito authorizer

CloudWatch monitors the API and Lambda functions.
AWS CDK defines and deploys every AWS resource.
GitHub Actions runs tests and deployments.
```

## Delivery stages

1. Deploy the existing React app with S3, CloudFront, and AWS CDK.
2. Add API Gateway and Lambda with health and pathway endpoints.
3. Add Cognito authentication.
4. Store authenticated users' plans in DynamoDB.
5. Add CI/CD, dashboards, alarms, and a custom domain.

## Design decisions

- Keep the current React structure until moving it provides a concrete benefit.
- Keep pathway data in source-controlled records during the first cloud stages.
- Use DynamoDB first for user-owned plans, where persistence creates immediate
  product value.
- Preserve local drafts until cloud saving is working, so infrastructure work
  does not break the existing user experience.
- Define infrastructure with CDK instead of relying on undocumented console
  configuration.
