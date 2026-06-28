import { gmuComputerScience2024 } from "./pathwayRecords/gmuComputerScience2024";
import { jmuBusinessAdministration2026 } from "./pathwayRecords/jmuBusinessAdministration2026";
import { uvaComputerScience2026 } from "./pathwayRecords/uvaComputerScience2026";
import { vtAccounting2026 } from "./pathwayRecords/vtAccounting2026";
import {
  vtAerospaceEngineering2026,
  vtOceanEngineering2026
} from "./pathwayRecords/vtAerospaceOceanEngineering2026";
import { vtBiomedicalEngineering2026 } from "./pathwayRecords/vtBiomedicalEngineering2026";
import { vtBusinessInformationTechnology2026 } from "./pathwayRecords/vtBusinessInformationTechnology2026";
import { vtBiologicalSystemsEngineering2026 } from "./pathwayRecords/vtBiologicalSystemsEngineering2026";
import { vtChemicalEngineering2026 } from "./pathwayRecords/vtChemicalEngineering2026";
import { vtCivilEngineering2026 } from "./pathwayRecords/vtCivilEngineering2026";
import { vtComputerScience2026 } from "./pathwayRecords/vtComputerScience2026";
import { vtFinance2026 } from "./pathwayRecords/vtFinance2026";
import { vtManagement2026 } from "./pathwayRecords/vtManagement2026";

export const transferPathways = [
  gmuComputerScience2024,
  jmuBusinessAdministration2026,
  vtComputerScience2026,
  vtFinance2026,
  vtAccounting2026,
  vtManagement2026,
  vtBusinessInformationTechnology2026,
  vtBiologicalSystemsEngineering2026,
  vtBiomedicalEngineering2026,
  vtChemicalEngineering2026,
  vtCivilEngineering2026,
  vtAerospaceEngineering2026,
  vtOceanEngineering2026,
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
