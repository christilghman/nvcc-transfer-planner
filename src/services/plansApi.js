import { apiRequest } from "./apiClient";

// These functions define the frontend/backend boundary. They are intentionally
// not connected to the UI until the first Lambda endpoints exist.
export const plansApi = {
  create(plan) {
    return apiRequest("/plans", {
      body: JSON.stringify(plan),
      method: "POST"
    });
  },

  getAll() {
    return apiRequest("/plans");
  },

  update(planId, updates) {
    return apiRequest(`/plans/${planId}`, {
      body: JSON.stringify(updates),
      method: "PATCH"
    });
  },

  remove(planId) {
    return apiRequest(`/plans/${planId}`, {
      method: "DELETE"
    });
  }
};
