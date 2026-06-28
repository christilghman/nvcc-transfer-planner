const { randomUUID } = require("crypto");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type,Authorization",
  "Access-Control-Allow-Methods": "GET,POST,PATCH,OPTIONS"
};

let dynamoClient;

function getDynamoClient() {
  if (!dynamoClient) {
    const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
    dynamoClient = new DynamoDBClient({});
  }

  return dynamoClient;
}

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
}

function parseJsonBody(event) {
  if (!event.body) {
    return {};
  }

  try {
    return JSON.parse(event.body);
  } catch {
    return null;
  }
}

function validatePlanPayload(payload) {
  const selection = payload?.selection;

  if (!selection) {
    return "Plan payload must include a selection.";
  }

  const requiredSelectionFields = [
    "nvccProgram",
    "catalogYear",
    "transferSchool",
    "transferMajor"
  ];

  const missingField = requiredSelectionFields.find((field) => !selection[field]);

  if (missingField) {
    return `Plan selection is missing ${missingField}.`;
  }

  if (
    payload.completedCourses !== undefined &&
    !Array.isArray(payload.completedCourses)
  ) {
    return "completedCourses must be an array.";
  }

  return null;
}

function toDynamoItem(plan) {
  return {
    planId: { S: plan.planId },
    createdAt: { S: plan.createdAt },
    updatedAt: { S: plan.updatedAt },
    selection: { S: JSON.stringify(plan.selection) },
    completedCourses: { S: JSON.stringify(plan.completedCourses) }
  };
}

function fromDynamoItem(item) {
  return {
    planId: item.planId.S,
    createdAt: item.createdAt.S,
    updatedAt: item.updatedAt.S,
    selection: JSON.parse(item.selection.S),
    completedCourses: JSON.parse(item.completedCourses.S)
  };
}

async function listPlans() {
  const { ScanCommand } = require("@aws-sdk/client-dynamodb");
  const response = await getDynamoClient().send(
    new ScanCommand({
      TableName: process.env.PLANS_TABLE_NAME
    })
  );

  return (response.Items || []).map(fromDynamoItem);
}

async function createPlan(payload) {
  const { PutItemCommand } = require("@aws-sdk/client-dynamodb");
  const now = new Date().toISOString();
  const plan = {
    planId: randomUUID(),
    createdAt: now,
    updatedAt: now,
    selection: payload.selection,
    completedCourses: payload.completedCourses || []
  };

  await getDynamoClient().send(
    new PutItemCommand({
      TableName: process.env.PLANS_TABLE_NAME,
      Item: toDynamoItem(plan),
      ConditionExpression: "attribute_not_exists(planId)"
    })
  );

  return plan;
}

async function updatePlan(planId, payload) {
  const { UpdateItemCommand } = require("@aws-sdk/client-dynamodb");
  const now = new Date().toISOString();

  const response = await getDynamoClient().send(
    new UpdateItemCommand({
      TableName: process.env.PLANS_TABLE_NAME,
      Key: {
        planId: { S: planId }
      },
      UpdateExpression:
        "SET #selection = :selection, completedCourses = :completedCourses, updatedAt = :updatedAt",
      ConditionExpression: "attribute_exists(planId)",
      ExpressionAttributeNames: {
        "#selection": "selection"
      },
      ExpressionAttributeValues: {
        ":selection": { S: JSON.stringify(payload.selection) },
        ":completedCourses": { S: JSON.stringify(payload.completedCourses || []) },
        ":updatedAt": { S: now }
      },
      ReturnValues: "ALL_NEW"
    })
  );

  return fromDynamoItem(response.Attributes);
}

exports.handler = async (event) => {
  try {
    if (event.httpMethod === "OPTIONS") {
      return {
        statusCode: 204,
        headers: corsHeaders,
        body: ""
      };
    }

    if (event.httpMethod === "GET") {
      const plans = await listPlans();
      return jsonResponse(200, { plans });
    }

    if (event.httpMethod === "POST") {
      const payload = parseJsonBody(event);

      if (!payload) {
        return jsonResponse(400, {
          message: "Request body must be valid JSON.",
          code: "INVALID_JSON"
        });
      }

      const validationError = validatePlanPayload(payload);

      if (validationError) {
        return jsonResponse(400, {
          message: validationError,
          code: "INVALID_PLAN"
        });
      }

      const plan = await createPlan(payload);
      return jsonResponse(201, plan);
    }

    if (event.httpMethod === "PATCH") {
      const planId = event.pathParameters?.planId;

      if (!planId) {
        return jsonResponse(400, {
          message: "Plan ID is required.",
          code: "MISSING_PLAN_ID"
        });
      }

      const payload = parseJsonBody(event);

      if (!payload) {
        return jsonResponse(400, {
          message: "Request body must be valid JSON.",
          code: "INVALID_JSON"
        });
      }

      const validationError = validatePlanPayload(payload);

      if (validationError) {
        return jsonResponse(400, {
          message: validationError,
          code: "INVALID_PLAN"
        });
      }

      const plan = await updatePlan(planId, payload);
      return jsonResponse(200, plan);
    }

    return jsonResponse(405, {
      message: "Method not allowed.",
      code: "METHOD_NOT_ALLOWED"
    });
  } catch (error) {
    console.error(error);

    return jsonResponse(500, {
      message: "The plans request could not be completed.",
      code: "PLANS_REQUEST_FAILED"
    });
  }
};
