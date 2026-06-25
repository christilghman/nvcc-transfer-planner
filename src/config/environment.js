const trimTrailingSlash = (value) => value.replace(/\/+$/, "");

export const environment = {
  apiBaseUrl: trimTrailingSlash(
    process.env.REACT_APP_API_BASE_URL || "http://localhost:3001"
  ),
  name: process.env.REACT_APP_ENVIRONMENT || "local"
};
