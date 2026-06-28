import * as path from "path";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as lambda from "aws-cdk-lib/aws-lambda";

interface ApiStackProps extends cdk.StackProps {
  projectName: string;
  environmentName: string;
}

export class ApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);

    const plansTable = new dynamodb.Table(this, "PlansTable", {
      partitionKey: {
        name: "planId",
        type: dynamodb.AttributeType.STRING
      },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    const healthFunction = new lambda.Function(this, "HealthFunction", {
      runtime: lambda.Runtime.NODEJS_22_X,
      handler: "index.handler",
      code: lambda.Code.fromAsset(path.join(__dirname, "../../backend/functions/health")),
      description: "Returns a basic health check response for the NOVA Transfer Planner API."
    });

    const plansFunction = new lambda.Function(this, "PlansFunction", {
      runtime: lambda.Runtime.NODEJS_22_X,
      handler: "index.handler",
      code: lambda.Code.fromAsset(path.join(__dirname, "../../backend/functions/plans")),
      description: "Creates and lists saved transfer plans.",
      environment: {
        PLANS_TABLE_NAME: plansTable.tableName
      }
    });

    plansTable.grantReadWriteData(plansFunction);

    const api = new apigateway.RestApi(this, "PlannerApi", {
      restApiName: `${props.projectName}-${props.environmentName}-api`,
      description: "Backend API for the NOVA Transfer Planner.",
      deployOptions: {
        stageName: props.environmentName,
        throttlingRateLimit: 25,
        throttlingBurstLimit: 50
      },
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: apigateway.Cors.ALL_METHODS,
        allowHeaders: ["Content-Type", "Authorization"]
      }
    });

    const health = api.root.addResource("health");
    health.addMethod("GET", new apigateway.LambdaIntegration(healthFunction));

    const plans = api.root.addResource("plans");
    plans.addMethod("GET", new apigateway.LambdaIntegration(plansFunction));
    plans.addMethod("POST", new apigateway.LambdaIntegration(plansFunction));
    const planById = plans.addResource("{planId}");
    planById.addMethod("PATCH", new apigateway.LambdaIntegration(plansFunction));

    cdk.Tags.of(this).add("Project", props.projectName);
    cdk.Tags.of(this).add("Environment", props.environmentName);

    new cdk.CfnOutput(this, "PlansTableName", {
      value: plansTable.tableName
    });

    new cdk.CfnOutput(this, "ApiBaseUrl", {
      value: api.url
    });

    new cdk.CfnOutput(this, "HealthEndpointUrl", {
      value: `${api.url}health`
    });

    new cdk.CfnOutput(this, "PlansEndpointUrl", {
      value: `${api.url}plans`
    });
  }
}
