import { apiRequest } from "./apiClient";

// These functions define the frontend/backend boundary for saved transfer plans.
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
