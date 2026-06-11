export const transferPathways = [
  {
    id: "nvcc-computer-science-to-gmu-computer-science-2024-2025",
    nvccProgram: "computerScience",
    transferSchool: "gmu",
    transferMajor: "computerScience",
    transferMajorName: "Computer Science",
    transferDegree: "BS Computer Science",
    catalogYear: "2024-2025",
    nvccProgramName: "AS Computer Science",
    totalCredits: 61,
    title: "NVCC AS Computer Science to GMU BS Computer Science",
    gaa: {
      gpaMinimum: 3.2,
      minimumCredits: 60,
      noGradeBelow: "C",
      requiredCourses: [
        "ENG 111",
        "ENG 112",
        "CSC 110",
        "CSC 201",
        "CSC 202",
        "MTH 161",
        "MTH 162",
        "MTH 263",
        "MTH 264",
        "PHY 201",
        "PHY 202",
        "SDV 100"
      ],
      generalEducationAreas: {
        Humanities: 1,
        "Social Sciences": 2,
        "Lab Sciences": 2
      },
      notes: [
        "Complete the Associate of Science degree before transfer.",
        "Submit the Mason GAA letter of intent by the published deadline.",
        "Meet with an NVCC transfer advisor before finalizing each semester."
      ]
    },
    semesters: [
      {
        id: "semester-1",
        label: "Semester 1",
        focus: "Foundation courses",
        courses: [
          { code: "CSC 110", title: "Introduction to Computer Science", credits: 3, type: "Required" },
          { code: "ENG 111", title: "College Composition I", credits: 3, type: "Required" },
          { code: "MTH 161", title: "Precalculus I", credits: 3, type: "Required" },
          { code: "SDV 100", title: "College Success Skills", credits: 1, type: "Required" },
          { code: "PHI 220", title: "Ethics", credits: 3, type: "Recommended" }
        ]
      },
      {
        id: "semester-2",
        label: "Semester 2",
        focus: "Programming sequence and writing",
        courses: [
          { code: "CSC 201", title: "Computer Science I", credits: 4, type: "Required" },
          { code: "MTH 162", title: "Precalculus II", credits: 3, type: "Required" },
          { code: "ENG 112", title: "College Composition II", credits: 3, type: "Required" },
          { code: "HIS 121", title: "United States History I", credits: 3, type: "Recommended" },
          { code: "CST 110", title: "Introduction to Communication", credits: 3, type: "Recommended" }
        ]
      },
      {
        id: "semester-3",
        label: "Semester 3",
        focus: "Calculus, physics, and intermediate CS",
        courses: [
          { code: "CSC 202", title: "Computer Science II", credits: 4, type: "Required" },
          { code: "MTH 263", title: "Calculus I", credits: 4, type: "Required" },
          { code: "PHY 201", title: "General College Physics I", credits: 4, type: "Required" },
          { code: "ECO 201", title: "Principles of Macroeconomics", credits: 3, type: "Recommended" }
        ]
      },
      {
        id: "semester-4",
        label: "Semester 4",
        focus: "Transfer-ready completion",
        courses: [
          { code: "CSC 205", title: "Computer Organization", credits: 3, type: "Required" },
          { code: "MTH 264", title: "Calculus II", credits: 4, type: "Required" },
          { code: "PHY 202", title: "General College Physics II", credits: 4, type: "Required" },
          { code: "ECO 202", title: "Principles of Microeconomics", credits: 3, type: "Recommended" },
          { code: "SOC 200", title: "Principles of Sociology", credits: 3, type: "Recommended" }
        ]
      }
    ]
  }
];

export function getAvailablePrograms() {
  return uniqueBy(transferPathways, "nvccProgram");
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
