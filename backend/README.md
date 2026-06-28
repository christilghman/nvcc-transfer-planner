# Backend

This directory contains the Node.js Lambda handlers that power the planner API.

## Current handlers

```txt
functions/
  health/
    index.js
  plans/
    index.js
```

### `GET /health`

Returns a small JSON response that proves API Gateway and Lambda are working.

Example response:

```json
{
  "status": "ok",
  "service": "nova-transfer-planner-api"
}
```

### `GET /plans`

Returns saved transfer plans from DynamoDB.

At this stage, plans are unauthenticated demo records. Cognito will later add
per-user ownership.

### `POST /plans`

Creates a saved transfer plan in DynamoDB.

Expected request shape:

```json
{
  "selection": {
    "nvccProgram": "computerScience",
    "catalogYear": "2026-2027",
    "transferSchool": "vt",
    "transferMajor": "computerScience"
  },
  "completedCourses": ["ENG 111", "MTH 263"]
}
```

### `PATCH /plans/{planId}`

Updates an existing saved transfer plan in DynamoDB. The frontend uses this
after the first save so repeated clicks update the same plan instead of creating
duplicates.

## Planned handlers

- `GET /pathways`
- `GET /pathways/{pathwayId}`
- `DELETE /plans/{planId}`

Authenticated plan endpoints will follow after Cognito is configured.
