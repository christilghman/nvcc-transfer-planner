const vtAccountingGaa = {
  gpaMinimum: 3.4,
  minimumCredits: 60,
  noGradeBelow: "C",
  guaranteedAdmissionTo: "Virginia Tech",
  requiredCourses: [
    "Complete a VCCS transfer-oriented associate degree with a cumulative GPA of 3.40 or higher",
    "Earn B or better in English courses, mathematics courses specific to the intended major, lab science courses specific to the intended major, and social science courses",
    "Earn C or higher in each community college course applicable to the transfer-oriented associate degree",
    "Earn at least 45 credits toward the transfer degree at a VCCS institution after high school graduation",
    "Follow Virginia Tech application processes, deadlines, and any departmental/program requirements"
  ],
  generalEducationAreas: {
    "Virginia Tech Liberal Education/general education":
      "Guaranteed complete by finishing the eligible transfer-oriented associate degree",
    "Transfer credit":
      "Virginia Tech guarantees acceptance of transferable credits from the associate degree, not to exceed 60 credits"
  },
  notes: [
    "The general VT/VCCS GAA guarantees university admission for eligible Summer or Fall transfer applicants, but students must still follow special departmental/program procedures and requirements.",
    "Students earning an associate degree concurrent with high school graduation are not eligible under this GAA and should apply as freshmen with transfer credit.",
    "Students previously enrolled at Virginia Tech who transferred back to VCCS to complete the degree are not eligible for participation in the GAA.",
    "Virginia Tech may deny admission to students who have been academically dismissed or suspended or convicted of a felony.",
    "Completion of the associate degree may not guarantee completion of the bachelor's degree within the minimum credits required for graduation."
  ]
};

const businessAdministrationSemesters = [
  {
    id: "semester-1",
    label: "Semester 1",
    focus: "Business foundation and transfer core",
    courses: [
      { code: "BUS 100", title: "Introduction to Business", credits: 3, type: "Required" },
      { code: "ENG 111", title: "College Composition I", credits: 3, type: "Required", transferPriority: "VT GAA: B or better" },
      { code: "HIS Elective", title: "History elective", credits: 3, type: "Required" },
      { code: "MTH 161", title: "PreCalculus I or higher", credits: 3, type: "Required", transferPriority: "VT Pamplin preparation" },
      { code: "CST 100 or CST 110", title: "Communication elective", credits: 3, type: "Required" },
      { code: "SDV 100 or SDV 101", title: "College success/orientation", credits: 1, type: "Required" }
    ]
  },
  {
    id: "semester-2",
    label: "Semester 2",
    focus: "Composition, calculus, lab science, and business tools",
    courses: [
      { code: "ENG 112", title: "College Composition II", credits: 3, type: "Required", transferPriority: "VT GAA: B or better" },
      { code: "Humanities/Fine Arts", title: "Humanities or fine arts elective", credits: 3, type: "Required" },
      { code: "MTH 261", title: "Applied Calculus I or higher", credits: 3, type: "Required", transferPriority: "VT Pamplin preparation" },
      { code: "Lab Science", title: "Physical or life science elective with lab", credits: 4, type: "Required", transferPriority: "VT GAA: B or better if major-specific" },
      { code: "ITE 140 or BUS 240", title: "Spreadsheeting for Business or Business Law", credits: 3, type: "Transfer-advised Option" }
    ]
  },
  {
    id: "semester-3",
    label: "Semester 3",
    focus: "Accounting, economics, statistics, and humanities",
    courses: [
      { code: "ACC 211", title: "Principles of Accounting I", credits: 3, type: "Required", transferPriority: "VT ACIS foundation" },
      { code: "BUS 224", title: "Business Statistics", credits: 3, type: "Required", transferPriority: "VT BIT/statistics preparation" },
      { code: "ECO 201", title: "Principles of Macroeconomics", credits: 3, type: "Required", transferPriority: "VT GAA: B or better" },
      { code: "Humanities/Fine Arts", title: "Second humanities or fine arts elective", credits: 3, type: "Required" },
      { code: "BUS Elective or Lab Science", title: "Business elective or additional lab science", credits: 3, type: "Program Option" }
    ]
  },
  {
    id: "semester-4",
    label: "Semester 4",
    focus: "Accounting, economics, and business transfer electives",
    courses: [
      { code: "ACC 212", title: "Principles of Accounting II", credits: 3, type: "Required", transferPriority: "VT ACIS foundation" },
      { code: "ECO 202", title: "Principles of Microeconomics", credits: 3, type: "Required", transferPriority: "VT GAA: B or better" },
      { code: "BUS 270 or BUS Elective", title: "Interpersonal Dynamics or business elective", credits: 3, type: "Program Option" },
      { code: "BUS 280 or BUS Elective", title: "International Business or business elective", credits: 3, type: "Program Option" }
    ]
  }
];

export const vtAccounting2026 = {
  id: "nvcc-business-administration-to-vt-accounting-2026-2027",
  nvccProgram: "businessAdministration",
  transferSchool: "vt",
  transferMajor: "accounting",
  transferMajorName: "Accounting",
  transferDegree: "BS Accounting",
  transferCollege: "Pamplin College of Business",
  catalogYear: "2026-2027",
  nvccProgramName: "AS Business Administration",
  totalCredits: 60,
  title: "NVCC AS Business Administration to Virginia Tech BS Accounting",
  sourceDocuments: [
    {
      label: "NVCC Business Administration, A.S. catalog",
      year: "2026-2027",
      type: "NVCC catalog",
      url: "https://catalog.nvcc.edu/programs/business-administration-as/"
    },
    {
      label: "Virginia Tech and VCCS General Guaranteed Admission Agreement",
      year: "2013",
      type: "Guaranteed Admission Agreement",
      note: "General VT/VCCS GAA for transfer-oriented associate degrees; students must also satisfy program procedures and requirements."
    },
    {
      label: "Virginia Tech Accounting BS roadmaps",
      type: "VT accounting roadmaps",
      note: "Reviewed Accounting and Information Systems and Accounting & Business Analysis roadmaps. The first two VT years match; concentration-specific differences are upper-division ACIS requirements."
    }
  ],
  gaa: vtAccountingGaa,
  transferRoadmap: {
    required: [
      { vtCourse: "VT GAA", nvccCourse: "AS Business Administration", title: "Complete the transfer-oriented associate degree" },
      { vtCourse: "VT GAA", nvccCourse: "Cumulative GPA", title: "Earn a 3.40 or higher cumulative GPA" },
      { vtCourse: "VT GAA", nvccCourse: "ENG, MTH, Lab Science, Social Science", title: "Earn B or better in specified core transfer areas" },
      { vtCourse: "ACIS 2115/2116", nvccCourse: "ACC 211 and ACC 212", title: "Principles of Accounting sequence" },
      { vtCourse: "ECON 2005/2006", nvccCourse: "ECO 201 and ECO 202", title: "Principles of Economics sequence" }
    ],
    stronglyRecommended: [
      { vtCourse: "ACIS 1504", nvccCourse: "Business analytics/spreadsheet preparation", title: "Introduction to Business Analytics and Business Intelligence" },
      { vtCourse: "ACIS 2504", nvccCourse: "Accounting analytics preparation", title: "Introduction to Accounting Analytics" },
      { vtCourse: "BIT 2406", nvccCourse: "BUS 224", title: "Business Statistics, Analytics, and Modeling preparation" },
      { vtCourse: "ACIS 3115 and ACIS 3504", nvccCourse: "ACC 211 and ACC 212", title: "Intermediate Financial Accounting and Accounting Systems foundation after transfer" }
    ],
    recommended: [
      { vtCourse: "Accounting and Information Systems", nvccCourse: "Accounting foundation", title: "Upper-division VT option emphasizes ACIS electives, accounting analytics, forensic accounting, and systems/security topics" },
      { vtCourse: "Accounting & Business Analysis", nvccCourse: "Accounting foundation", title: "Upper-division VT option emphasizes accounting analytics, auditing, AI in accounting, and a specialization group" },
      { vtCourse: "CPA preparation", nvccCourse: "Accounting coursework", title: "VT notes CPA candidates should monitor accounting/business credit requirements and state board rules" },
      { vtCourse: "Pamplin+ Curriculum", nvccCourse: "BUS electives", title: "Choose NVCC business electives with an advisor to support accounting transfer goals" }
    ]
  },
  semesters: businessAdministrationSemesters
};
