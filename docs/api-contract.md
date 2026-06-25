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

## Initial public endpoints

### `GET /health`

Response:

```json
{
  "status": "ok"
}
```

### `GET /pathways`

Returns pathway summaries that can be filtered by program, catalog year, school,
and major.

### `GET /pathways/{pathwayId}`

Returns one complete pathway, including semesters, courses, transfer priorities,
GAA requirements, and source documents.

## Future authenticated plan endpoints

### `GET /plans`

Returns every plan owned by the authenticated user.

### `POST /plans`

Request:

```json
{
  "catalogYear": "2026-2027",
  "completedCourses": ["ENG 111", "MTH 263"],
  "nvccProgram": "computerScience",
  "pathwayId": "nvcc-computer-science-to-vt-computer-science-2026-2027",
  "transferMajor": "computerScience",
  "transferSchool": "vt"
}
```

### `PATCH /plans/{planId}`

Updates mutable plan fields such as `completedCourses`.

### `DELETE /plans/{planId}`

Deletes a plan owned by the authenticated user.
