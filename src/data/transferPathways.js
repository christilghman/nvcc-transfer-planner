import { gmuComputerScience2024 } from "./pathwayRecords/gmuComputerScience2024";
import { uvaComputerScience2026 } from "./pathwayRecords/uvaComputerScience2026";
import { vtComputerScience2026 } from "./pathwayRecords/vtComputerScience2026";

export const transferPathways = [
  gmuComputerScience2024,
  vtComputerScience2026,
  uvaComputerScience2026
];

export function getAvailablePrograms() {
  return uniqueBy(transferPathways, "nvccProgram");
}

export function getAvailableCatalogYears(nvccProgram) {
  return uniqueBy(
    transferPathways.filter((pathway) => pathway.nvccProgram === nvccProgram),
    "catalogYear"
  );
}

export function getAvailableSchools(nvccProgram, catalogYear) {
  return uniqueBy(
    transferPathways.filter(
      (pathway) =>
        pathway.nvccProgram === nvccProgram && pathway.catalogYear === catalogYear
    ),
    "transferSchool"
  );
}

export function getAvailableTransferMajors(nvccProgram, catalogYear, transferSchool) {
  return uniqueBy(
    transferPathways.filter(
      (pathway) =>
        pathway.nvccProgram === nvccProgram &&
        pathway.catalogYear === catalogYear &&
        pathway.transferSchool === transferSchool
    ),
    "transferMajor"
  );
}

export function getTransferPathway({ nvccProgram, catalogYear, transferSchool, transferMajor }) {
  return (
    transferPathways.find(
      (pathway) =>
        pathway.nvccProgram === nvccProgram &&
        pathway.catalogYear === catalogYear &&
        pathway.transferSchool === transferSchool &&
        pathway.transferMajor === transferMajor
    ) || null
  );
}

function uniqueBy(items, key) {
  return [...new Set(items.map((item) => item[key]))];
}
