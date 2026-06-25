import {
  getAvailableCatalogYears,
  getAvailableSchools,
  getAvailableTransferMajors,
  getTransferPathway
} from "./transferPathways";

describe("transfer pathway selectors", () => {
  test("returns the available catalog year for an NVCC program", () => {
    expect(getAvailableCatalogYears("computerScience")).toEqual(
      expect.arrayContaining(["2024-2025", "2026-2027"])
    );
  });

  test("only returns schools with a matching program and catalog year", () => {
    expect(getAvailableSchools("computerScience", "2026-2027")).toEqual(
      expect.arrayContaining(["vt", "uva"])
    );
  });

  test("returns majors for a selected pathway", () => {
    expect(
      getAvailableTransferMajors("computerScience", "2026-2027", "vt")
    ).toContain("computerScience");
  });

  test("returns the complete pathway for an exact selection", () => {
    const pathway = getTransferPathway({
      catalogYear: "2026-2027",
      nvccProgram: "computerScience",
      transferMajor: "computerScience",
      transferSchool: "vt"
    });

    expect(pathway).toMatchObject({
      id: "nvcc-computer-science-to-vt-computer-science-2026-2027",
      totalCredits: 62
    });
    expect(pathway.semesters).toHaveLength(4);
  });

  test("returns null when a pathway does not exist", () => {
    expect(
      getTransferPathway({
        catalogYear: "2026-2027",
        nvccProgram: "computerScience",
        transferMajor: "computerScience",
        transferSchool: "jmu"
      })
    ).toBeNull();
  });
});
