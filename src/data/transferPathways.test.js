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

  test("returns one Virginia Tech finance pathway for NVCC Business Administration", () => {
    expect(getAvailableTransferMajors("businessAdministration", "2026-2027", "vt")).toEqual(
      expect.arrayContaining(["finance"])
    );
  });

  test("returns the consolidated VT finance pathway", () => {
    const pathway = getTransferPathway({
      catalogYear: "2026-2027",
      nvccProgram: "businessAdministration",
      transferMajor: "finance",
      transferSchool: "vt"
    });

    expect(pathway).toMatchObject({
      id: "nvcc-business-administration-to-vt-finance-2026-2027",
      transferDegree: "BS Finance",
      transferCollege: "Pamplin College of Business",
      totalCredits: 60
    });
    expect(pathway.semesters).toHaveLength(4);
    expect(pathway.gaa.gpaMinimum).toBe(3.4);
    expect(pathway.transferRoadmap.recommended).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ vtCourse: "Financial Accounting option" }),
        expect.objectContaining({ vtCourse: "Corporate Financial Management option" })
      ])
    );
  });

  test("returns the consolidated VT accounting pathway", () => {
    const pathway = getTransferPathway({
      catalogYear: "2026-2027",
      nvccProgram: "businessAdministration",
      transferMajor: "accounting",
      transferSchool: "vt"
    });

    expect(pathway).toMatchObject({
      id: "nvcc-business-administration-to-vt-accounting-2026-2027",
      transferDegree: "BS Accounting",
      transferCollege: "Pamplin College of Business",
      totalCredits: 60
    });
    expect(pathway.semesters).toHaveLength(4);
    expect(pathway.transferRoadmap.recommended).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ vtCourse: "Accounting and Information Systems" }),
        expect.objectContaining({ vtCourse: "Accounting & Business Analysis" })
      ])
    );
  });

  test("returns the VT management pathway", () => {
    const pathway = getTransferPathway({
      catalogYear: "2026-2027",
      nvccProgram: "businessAdministration",
      transferMajor: "management",
      transferSchool: "vt"
    });

    expect(pathway).toMatchObject({
      id: "nvcc-business-administration-to-vt-management-2026-2027",
      transferDegree: "BS Management",
      transferCollege: "Pamplin College of Business",
      totalCredits: 60
    });
    expect(pathway.transferRoadmap.recommended).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ vtCourse: "MGT 2064" }),
        expect.objectContaining({ vtCourse: "MGT electives" })
      ])
    );
  });

  test("returns the consolidated VT business information technology pathway", () => {
    const pathway = getTransferPathway({
      catalogYear: "2026-2027",
      nvccProgram: "businessAdministration",
      transferMajor: "businessInformationTechnology",
      transferSchool: "vt"
    });

    expect(pathway).toMatchObject({
      id: "nvcc-business-administration-to-vt-business-information-technology-2026-2027",
      transferDegree: "BS Business Information Technology",
      transferCollege: "Pamplin College of Business",
      totalCredits: 60
    });
    expect(pathway.transferRoadmap.recommended).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ vtCourse: "Operations and Supply Chain Management option" }),
        expect.objectContaining({ vtCourse: "Computer Based Decision Support Systems option" })
      ])
    );
  });

  test("returns separate VT aerospace and ocean engineering pathways", () => {
    expect(getAvailableTransferMajors("engineering", "2026-2027", "vt")).toEqual(
      expect.arrayContaining([
        "aerospaceEngineering",
        "biologicalSystemsEngineering",
        "biomedicalEngineering",
        "chemicalEngineering",
        "civilEngineering",
        "oceanEngineering"
      ])
    );
  });

  test("returns the VT biological systems engineering pathway", () => {
    const pathway = getTransferPathway({
      catalogYear: "2026-2027",
      nvccProgram: "engineering",
      transferMajor: "biologicalSystemsEngineering",
      transferSchool: "vt"
    });

    expect(pathway).toMatchObject({
      id: "nvcc-engineering-to-vt-biological-systems-engineering-2026-2027",
      transferDegree: "BS Biological Systems Engineering",
      transferCollege: "College of Engineering",
      totalCredits: 68
    });
    expect(pathway.semesters.flatMap((semester) => semester.courses).map((course) => course.code)).toEqual(
      expect.arrayContaining(["CHM 112", "BIO 101", "EGR 240", "EGR 206"])
    );
    expect(pathway.transferRoadmap.stronglyRecommended).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ vtCourse: "BSE 2504" }),
        expect.objectContaining({ vtCourse: "BSE 3144" })
      ])
    );
  });

  test("returns the VT biomedical engineering pathway", () => {
    const pathway = getTransferPathway({
      catalogYear: "2026-2027",
      nvccProgram: "engineering",
      transferMajor: "biomedicalEngineering",
      transferSchool: "vt"
    });

    expect(pathway).toMatchObject({
      id: "nvcc-engineering-to-vt-biomedical-engineering-2026-2027",
      transferDegree: "BS Biomedical Engineering",
      transferCollege: "College of Engineering",
      totalCredits: 71
    });
    const courseCodes = pathway.semesters.flatMap((semester) => semester.courses).map((course) => course.code);
    expect(courseCodes).toEqual(expect.arrayContaining(["BIO 101", "EGR 240", "EGR 245", "Technical Elective"]));
    expect(courseCodes).not.toContain("EGR 271");
    expect(courseCodes).not.toContain("CSC 221");
    expect(pathway.transferRoadmap.stronglyRecommended).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ vtCourse: "BMES 2014" }),
        expect.objectContaining({ vtCourse: "BMES 2104" }),
        expect.objectContaining({ vtCourse: "MSE 2034" })
      ])
    );
  });

  test("returns the VT chemical engineering pathway", () => {
    const pathway = getTransferPathway({
      catalogYear: "2026-2027",
      nvccProgram: "engineering",
      transferMajor: "chemicalEngineering",
      transferSchool: "vt"
    });

    expect(pathway).toMatchObject({
      id: "nvcc-engineering-to-vt-chemical-engineering-2026-2027",
      transferDegree: "BS Chemical Engineering",
      transferCollege: "College of Engineering",
      totalCredits: 71
    });
    const courseCodes = pathway.semesters.flatMap((semester) => semester.courses).map((course) => course.code);
    expect(courseCodes).toEqual(
      expect.arrayContaining(["CHM 112", "CHM 241", "CHM 245", "CHM 242", "CHM 246", "MTH 265", "MTH 266", "PHY 242", "Technical Elective"])
    );
    expect(courseCodes).not.toContain("CSC 221");
    expect(pathway.transferRoadmap.stronglyRecommended).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ vtCourse: "CHE 2114", nvccCourse: "EGR 231" }),
        expect.objectContaining({ vtCourse: "CHE 2164", nvccCourse: "EGR 232" }),
        expect.objectContaining({ vtCourse: "CHE 3134" })
      ])
    );
    expect(pathway.transferRoadmap.recommended).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ nvccCourse: "EGR 231 and EGR 232" })
      ])
    );
  });

  test("returns the VT civil engineering pathway", () => {
    const pathway = getTransferPathway({
      catalogYear: "2026-2027",
      nvccProgram: "engineering",
      transferMajor: "civilEngineering",
      transferSchool: "vt"
    });

    expect(pathway).toMatchObject({
      id: "nvcc-engineering-to-vt-civil-engineering-2026-2027",
      transferDegree: "BS Civil Engineering",
      transferCollege: "College of Engineering",
      totalCredits: 69
    });
    const courseCodes = pathway.semesters.flatMap((semester) => semester.courses).map((course) => course.code);
    expect(courseCodes).toEqual(
      expect.arrayContaining(["EGR 240", "EGR 246", "EGR 206", "Technical Elective"])
    );
    expect(courseCodes).not.toContain("GOL 105");
    expect(courseCodes).not.toContain("CSC 221");
    expect(courseCodes).not.toContain("CIV 280 or EGR 280");
    expect(pathway.transferRoadmap.required).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ vtCourse: "ESM 2104" }),
        expect.objectContaining({ vtCourse: "ESM 2204" }),
        expect.objectContaining({ vtCourse: "ISE 2014" })
      ])
    );
  });

  test("uses different technical electives for VT aerospace and ocean engineering", () => {
    const aerospace = getTransferPathway({
      catalogYear: "2026-2027",
      nvccProgram: "engineering",
      transferMajor: "aerospaceEngineering",
      transferSchool: "vt"
    });
    const ocean = getTransferPathway({
      catalogYear: "2026-2027",
      nvccProgram: "engineering",
      transferMajor: "oceanEngineering",
      transferSchool: "vt"
    });

    expect(aerospace).toMatchObject({
      id: "nvcc-engineering-to-vt-aerospace-engineering-2026-2027",
      transferCollege: "College of Engineering"
    });
    expect(ocean).toMatchObject({
      id: "nvcc-engineering-to-vt-ocean-engineering-2026-2027",
      transferCollege: "College of Engineering"
    });
    expect(aerospace.semesters[1].courses.map((course) => course.code)).toContain("CSC 221");
    expect(aerospace.semesters.flatMap((semester) => semester.courses).map((course) => course.code)).not.toContain("EGR 240");
    expect(aerospace.semesters[3].courses.map((course) => course.code)).toContain("Technical Elective");
    expect(aerospace.semesters.flatMap((semester) => semester.courses).map((course) => course.code)).not.toContain("EGR 271");
    expect(aerospace.semesters.flatMap((semester) => semester.courses).map((course) => course.code)).not.toContain("EGR 248");
    expect(ocean.semesters[3].courses.map((course) => course.code)).toContain("Technical Elective");
    expect(ocean.semesters.flatMap((semester) => semester.courses).map((course) => course.code)).not.toContain("CIV 240");
    expect(ocean.semesters.flatMap((semester) => semester.courses).map((course) => course.code)).not.toContain("EGR 282");
  });
});
