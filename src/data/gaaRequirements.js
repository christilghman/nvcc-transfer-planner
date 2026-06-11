import { getTransferPathway } from "./transferPathways";

export function getGAARequirements(selection) {
  return getTransferPathway(selection)?.gaa || null;
}
