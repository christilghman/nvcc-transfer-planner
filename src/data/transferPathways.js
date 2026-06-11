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
  },
  {
    id: "nvcc-computer-science-to-vt-computer-science-2026-2027",
    nvccProgram: "computerScience",
    transferSchool: "vt",
    transferMajor: "computerScience",
    transferMajorName: "Computer Science",
    transferDegree: "BS Computer Science",
    transferCollege: "College of Engineering",
    catalogYear: "2026-2027",
    nvccProgramName: "AS Computer Science",
    totalCredits: 62,
    title: "NVCC AS Computer Science to Virginia Tech BS Computer Science",
    sourceDocuments: [
      {
        label: "NVCC Computer Science, A.S. catalog",
        year: "2026-2027",
        type: "NVCC catalog"
      },
      {
        label: "Virginia Tech Computer Science transfer roadmap",
        type: "VT admissions roadmap"
      },
      {
        label: "Virginia Tech College of Engineering GAA",
        year: "2021",
        type: "Guaranteed Admission Agreement",
        note: "Listed as the current Engineering GAA source; agreement states it is reviewed periodically."
      }
    ],
    gaa: {
      gpaMinimum: 3.2,
      minimumCredits: 60,
      noGradeBelow: "C",
      guaranteedAdmissionTo: "General Engineering",
      requiredCourses: [
        "Eligible VCCS associate degree",
        "Courses offered for transfer credit must be completed with C or better"
      ],
      generalEducationAreas: {
        "VT Pathways general education": "Satisfied by completion of the eligible associate degree"
      },
      notes: [
        "Admission is guaranteed to General Engineering; admission to a specific engineering department depends on space and departmental entrance requirements.",
        "Students without the eligible associate degree or required GPA may still be reviewed competitively, but admission is not guaranteed under the GAA.",
        "Students earning an associate degree concurrent with high school graduation are not eligible under this GAA and should apply as freshmen.",
        "Transfer credit may not guarantee completion of the bachelor's degree within two years after transfer."
      ]
    },
    transferRoadmap: {
      required: [
        { vtCourse: "MATH 1225", nvccCourse: "MTH 263", title: "Calculus I" },
        { vtCourse: "MATH 1226", nvccCourse: "MTH 264", title: "Calculus II" },
        { vtCourse: "ENGL 1105 or ENGL 1106", nvccCourse: "ENG 111 or ENG 112", title: "College Composition" }
      ],
      stronglyRecommended: [
        { vtCourse: "CS 1114", nvccCourse: "CSC 222", title: "Object Oriented Programming" },
        { vtCourse: "ENGE 1215", nvccCourse: "EGR 121", title: "Foundations of Engineering" },
        { vtCourse: "ENGE 1216", nvccCourse: "EGR 122", title: "Engineering Design" }
      ],
      recommended: [
        { vtCourse: "MATH 2114", nvccCourse: "MTH 266", title: "Linear Algebra" },
        { vtCourse: "MATH 2204", nvccCourse: "MTH 265", title: "Calculus III" },
        { vtCourse: "Natural Science", nvccCourse: "BIO 101, CHM 111, or PHY 241", title: "Two lab sciences" },
        { vtCourse: "Remaining English course", nvccCourse: "ENG 111 or ENG 112", title: "Complete remaining composition course" }
      ]
    },
    semesters: [
      {
        id: "semester-1",
        label: "Semester 1",
        focus: "NVCC foundation and VT calculus preparation",
        courses: [
          { code: "CSC 221", title: "Introduction to Problem Solving and Programming", credits: 3, type: "Required" },
          { code: "ENG 111", title: "College Composition I", credits: 3, type: "Required", transferPriority: "VT Required" },
          { code: "HIS Elective", title: "History elective", credits: 3, type: "Required" },
          { code: "MTH 167", title: "PreCalculus with Trigonometry", credits: 5, type: "Placement-based" },
          { code: "SDV 100", title: "College Success Skills", credits: 1, type: "Required" }
        ]
      },
      {
        id: "semester-2",
        label: "Semester 2",
        focus: "VT required math and programming",
        courses: [
          { code: "CSC 222", title: "Object Oriented Programming", credits: 4, type: "Required", transferPriority: "VT Strongly Recommended" },
          { code: "ENG 112", title: "College Composition II", credits: 3, type: "Required", transferPriority: "VT Required/Recommended" },
          { code: "MTH 263", title: "Calculus I", credits: 4, type: "Required", transferPriority: "VT Required" },
          { code: "Humanities/Fine Arts", title: "Humanities or fine arts elective", credits: 3, type: "Required" }
        ]
      },
      {
        id: "semester-3",
        label: "Semester 3",
        focus: "Data structures, calculus II, and VT engineering prep",
        courses: [
          { code: "CSC 223", title: "Data Structures and Analysis of Algorithms", credits: 4, type: "Required" },
          { code: "CSC 208 or MTH 288", title: "Discrete structures or discrete mathematics", credits: 3, type: "Required" },
          { code: "MTH 264", title: "Calculus II", credits: 4, type: "Required", transferPriority: "VT Required" },
          { code: "PHY 241", title: "University Physics I", credits: 4, type: "Science Elective", transferPriority: "VT Recommended" },
          { code: "EGR 121", title: "Foundations of Engineering", credits: 2, type: "Approved Elective", transferPriority: "VT Strongly Recommended" }
        ]
      },
      {
        id: "semester-4",
        label: "Semester 4",
        focus: "Transfer competitiveness and degree completion",
        courses: [
          { code: "EGR 122", title: "Engineering Design", credits: 3, type: "Approved Elective", transferPriority: "VT Strongly Recommended" },
          { code: "MTH 266", title: "Linear Algebra", credits: 3, type: "Approved Elective", transferPriority: "VT Recommended" },
          { code: "MTH 265", title: "Calculus III", credits: 4, type: "Approved Elective", transferPriority: "VT Recommended" },
          { code: "Social/Behavioral Science", title: "Social or behavioral science elective", credits: 3, type: "Required" },
          { code: "Humanities/Fine Arts", title: "Second humanities or fine arts elective", credits: 3, type: "Required" }
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
