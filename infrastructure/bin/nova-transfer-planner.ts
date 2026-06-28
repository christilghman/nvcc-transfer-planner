#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { ApiStack } from "../lib/api-stack";
import { FrontendStack } from "../lib/frontend-stack";

const app = new cdk.App();

const stackEnv =
  process.env.CDK_DEFAULT_ACCOUNT && process.env.CDK_DEFAULT_REGION
    ? {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION
      }
    : undefined;

new FrontendStack(app, "NovaTransferPlannerFrontendStack", {
  env: stackEnv,
  projectName: "nova-transfer-planner",
  environmentName: "dev"
});

new ApiStack(app, "NovaTransferPlannerApiStack", {
  env: stackEnv,
  projectName: "nova-transfer-planner",
  environmentName: "dev"
});
