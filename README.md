# NOVA Transfer Planner

A React application that helps Northern Virginia Community College students
compare verified transfer pathways, build semester plans, and track completed
courses.

## Current capabilities

- Select an NVCC program and catalog year
- Choose a supported transfer university and major
- Generate a semester-by-semester plan
- Review GAA requirements and source documents
- Track completed courses and credits
- Save a draft in the current browser

## Local development

Requirements:

- Node.js
- npm

Install dependencies and start the app:

```bash
npm install
npm start
```

The app opens at `http://localhost:3000`.

Run the automated tests:

```bash
npm run test:ci
```

Create a production build:

```bash
npm run build
```

## Environment configuration

Copy `.env.example` to `.env.local` when local values need to be overridden:

```bash
cp .env.example .env.local
```

Variables exposed to Create React App must begin with `REACT_APP_`.

| Variable | Purpose | Local default |
| --- | --- | --- |
| `REACT_APP_API_BASE_URL` | Future API Gateway or local API URL | `http://localhost:3001` |
| `REACT_APP_ENVIRONMENT` | Environment label used by the frontend | `local` |

Do not place passwords, AWS credentials, or other secrets in frontend
environment variables. Browser users can inspect every value bundled into the
React application.

## Project structure

```text
backend/          Future Lambda handlers and backend tests
docs/             Architecture decisions and API contracts
infrastructure/   Future AWS CDK application
public/           Static frontend files
src/
  components/     Reusable React components
  config/         Runtime configuration
  data/           Verified pathway records and selectors
  pages/          Route-level React components
  services/       Frontend API boundary
```

## AWS direction

The planned production architecture uses:

- S3 and CloudFront for the React frontend
- API Gateway and Lambda for the API
- Cognito for user authentication
- DynamoDB for saved user plans
- AWS CDK for infrastructure as code
- CloudWatch for logs, metrics, and alarms
- GitHub Actions with OIDC for CI/CD

See [docs/architecture.md](docs/architecture.md) for delivery stages and
[docs/api-contract.md](docs/api-contract.md) for the planned frontend/backend
interface.
