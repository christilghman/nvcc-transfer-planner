# Planner API contract

This document defines the boundary between the React frontend and the future
AWS Lambda backend. It may evolve, but changes should remain deliberate and
documented.

## Common behavior

- Base path: `/`
- Request and response content type: `application/json`
- Authenticated routes accept a Cognito access token in the
  `Authorization: Bearer <token>` header.
- Errors use this shape:

```json
{
  "message": "Human-readable description",
  "code": "MACHINE_READABLE_CODE"
}
```

## Implemented public endpoints

### `GET /health`

Response:

```json
{
  "status": "ok",
  "service": "nova-transfer-planner-api"
}
```

This endpoint is served by API Gateway and Lambda.

### `GET /plans`

Returns saved transfer plans.

Response:

```json
{
  "plans": [
    {
      "planId": "generated-uuid",
      "createdAt": "2026-06-26T12:00:00.000Z",
      "updatedAt": "2026-06-26T12:00:00.000Z",
      "selection": {
        "nvccProgram": "computerScience",
        "catalogYear": "2026-2027",
        "transferSchool": "vt",
        "transferMajor": "computerScience"
      },
      "completedCourses": ["ENG 111"]
    }
  ]
}
```

At this stage, this endpoint returns shared demo data. Cognito will later make
plans private to each authenticated user.

### `POST /plans`

Creates a saved transfer plan.

Request:

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

Response: `201 Created`

```json
{
  "planId": "generated-uuid",
  "createdAt": "2026-06-26T12:00:00.000Z",
  "updatedAt": "2026-06-26T12:00:00.000Z",
  "selection": {
    "nvccProgram": "computerScience",
    "catalogYear": "2026-2027",
    "transferSchool": "vt",
    "transferMajor": "computerScience"
  },
  "completedCourses": ["ENG 111", "MTH 263"]
}
```

## Planned public endpoints

### `GET /pathways`

Returns pathway summaries that can be filtered by program, catalog year, school,
and major.

### `GET /pathways/{pathwayId}`

Returns one complete pathway, including semesters, courses, transfer priorities,
GAA requirements, and source documents.

## Future authenticated plan endpoints

### `PATCH /plans/{planId}`

Updates mutable plan fields such as `completedCourses`.

Implemented as an unauthenticated demo endpoint for now. Cognito will later
restrict updates to the plan owner.

Request:

```json
{
  "selection": {
    "nvccProgram": "computerScience",
    "catalogYear": "2026-2027",
    "transferSchool": "vt",
    "transferMajor": "computerScience"
  },
  "completedCourses": ["ENG 111", "MTH 263", "CSC 221"]
}
```

### `DELETE /plans/{planId}`

Deletes a plan owned by the authenticated user.
