export const vtEngineeringGaa = {
  gpaMinimum: 3.2,
  minimumCredits: 60,
  noGradeBelow: "C",
  guaranteedAdmissionTo: "General Engineering",
  requiredCourses: [
    "Complete an eligible VCCS transfer associate degree one semester prior to the planned Virginia Tech start term",
    "Earn a cumulative GPA of at least 3.20 on the associate degree as determined by Virginia Tech Undergraduate Admissions",
    "Complete all courses offered for transfer credit with C or better",
    "Use EGR-prefix courses for transferable engineering coursework",
    "Apply to the College of Engineering through the required Virginia Tech transfer process"
  ],
  generalEducationAreas: {
    "Virginia Tech Pathways general education":
      "Guaranteed complete by finishing the eligible associate degree",
    "College of Engineering transfer credit":
      "Virginia Tech Engineering may transfer up to one-half of the credit hours required for graduation"
  },
  notes: [
    "The Engineering GAA guarantees admission to General Engineering; admission to a specific engineering department is subject to space availability and departmental entrance requirements.",
    "Eligible students may be admitted to alternate engineering majors if the first choice is not available.",
    "Students without the eligible associate degree or required GPA may still be reviewed competitively, but admission is not guaranteed under the GAA.",
    "Students earning an associate degree concurrent with high school graduation are not eligible under this GAA and should apply as freshmen with transfer credit.",
    "The College of Engineering may require more than two years of coursework after transfer depending on major requirements and accepted credits."
  ]
};

export const commonEngineeringRequired = [
  { vtCourse: "VT Engineering GAA", nvccCourse: "AS Engineering", title: "Complete the eligible VCCS Engineering associate degree" },
  { vtCourse: "VT Engineering GAA", nvccCourse: "Cumulative GPA", title: "Earn at least a 3.20 cumulative GPA" },
  { vtCourse: "MATH 1225/1226", nvccCourse: "MTH 263 and MTH 264", title: "Calculus I and II" },
  { vtCourse: "MATH 2204", nvccCourse: "MTH 265", title: "Multivariable Calculus" },
  { vtCourse: "MATH 2114", nvccCourse: "MTH 266", title: "Linear Algebra" },
  { vtCourse: "MATH 2214", nvccCourse: "MTH 267", title: "Differential Equations" },
  { vtCourse: "PHYS 2305/2306", nvccCourse: "PHY 241 and PHY 242", title: "University Physics sequence" },
  { vtCourse: "CHEM 1035/1045", nvccCourse: "CHM 111", title: "General Chemistry with lab" },
  { vtCourse: "ENGE 1215/1216", nvccCourse: "EGR 121 and EGR 122", title: "Foundations of Engineering sequence" }
];

const commonEngineeringRecommended = [
  { vtCourse: "ESM 2304", nvccCourse: "EGR 245", title: "Dynamics preparation" },
  { vtCourse: "CS 1064", nvccCourse: "CSC 221", title: "Programming preparation" },
  { vtCourse: "AOE 2074", nvccCourse: "CSC 221 or additional CSC coursework", title: "Data and algorithms preparation" },
  { vtCourse: "AOE 2014", nvccCourse: "Do not rely on EGR 240/EGR 246", title: "Statics and mechanics may help background knowledge but should not be promoted as direct AOE 2014 transfer credit" }
];

const aerospaceSemesters = [
  {
    id: "semester-1",
    label: "Semester 1",
    focus: "Calculus, chemistry, and engineering foundation",
    courses: [
      { code: "ECO 202", title: "Principles of Microeconomics", credits: 3, type: "Required" },
      { code: "EGR 121", title: "Foundations of Engineering", credits: 2, type: "Required", transferPriority: "VT ENGE 1215" },
      { code: "ENG 111", title: "College Composition I", credits: 3, type: "Required" },
      { code: "MTH 263", title: "Calculus I", credits: 4, type: "Required", transferPriority: "VT Required" },
      { code: "CHM 111", title: "General Chemistry I", credits: 4, type: "Science/Technical Elective", transferPriority: "VT CHEM 1035/1045" },
      { code: "SDV 100 or SDV 101", title: "College success/orientation", credits: 1, type: "Required" }
    ]
  },
  {
    id: "semester-2",
    label: "Semester 2",
    focus: "Calculus II, physics I, and programming",
    courses: [
      { code: "ENG 112", title: "College Composition II", credits: 3, type: "Required" },
      { code: "MTH 264", title: "Calculus II", credits: 4, type: "Required", transferPriority: "VT Required" },
      { code: "PHY 241", title: "University Physics I", credits: 4, type: "Science/Technical Elective", transferPriority: "VT PHYS 2305" },
      { code: "CSC 221", title: "Introduction to Problem Solving and Programming", credits: 3, type: "Technical Elective", transferPriority: "VT CS 1064" },
      { code: "Humanities/Fine Arts", title: "Humanities or fine arts elective", credits: 3, type: "Required" }
    ]
  },
  {
    id: "semester-3",
    label: "Semester 3",
    focus: "Physics II, differential equations, and transfer-safe technical electives",
    courses: [
      { code: "MTH 267", title: "Differential Equations", credits: 3, type: "Required", transferPriority: "VT MATH 2214" },
      { code: "PHY 242", title: "University Physics II", credits: 4, type: "Science/Technical Elective", transferPriority: "VT PHYS 2306" },
      { code: "MTH 266", title: "Linear Algebra", credits: 3, type: "Math/Technical Elective", transferPriority: "VT MATH 2114" },
      { code: "EGR 122", title: "Engineering Design", credits: 3, type: "Technical Elective", transferPriority: "VT ENGE 1216" },
      { code: "HIS Elective", title: "History elective", credits: 3, type: "Required" }
    ]
  },
  {
    id: "semester-4",
    label: "Semester 4",
    focus: "Advanced math and aerospace-oriented technical electives",
    courses: [
      { code: "MTH 265", title: "Calculus III", credits: 4, type: "Math/Technical Elective", transferPriority: "VT MATH 2204" },
      { code: "EGR 245", title: "Dynamics", credits: 3, type: "Technical Elective", transferPriority: "VT ESM 2304" },
      { code: "Technical Elective", title: "Advisor-approved engineering or technical elective", credits: 4, type: "Technical Elective", transferPriority: "Confirm transfer applicability for VT Aerospace Engineering" },
      { code: "Technical Elective", title: "Advisor-approved engineering or technical elective", credits: 3, type: "Technical Elective", transferPriority: "Confirm transfer applicability for VT Aerospace Engineering" },
      { code: "Humanities/Fine Arts", title: "Second humanities or fine arts elective", credits: 3, type: "Required" }
    ]
  }
];

const oceanSemesters = [
  ...aerospaceSemesters.slice(0, 3),
  {
    id: "semester-4",
    label: "Semester 4",
    focus: "Advanced math and ocean/naval-oriented technical electives",
    courses: [
      { code: "MTH 265", title: "Calculus III", credits: 4, type: "Math/Technical Elective", transferPriority: "VT MATH 2204" },
      { code: "EGR 245", title: "Dynamics", credits: 3, type: "Technical Elective", transferPriority: "VT ESM 2304" },
      { code: "Technical Elective", title: "Advisor-approved engineering or technical elective", credits: 3, type: "Technical Elective", transferPriority: "Confirm transfer applicability for VT Ocean Engineering" },
      { code: "Technical Elective", title: "Advisor-approved engineering or technical elective", credits: 3, type: "Technical Elective", transferPriority: "Confirm transfer applicability for VT Ocean Engineering" },
      { code: "Humanities/Fine Arts", title: "Second humanities or fine arts elective", credits: 3, type: "Required" }
    ]
  }
];

function createVtAoePathway({
  id,
  transferMajor,
  transferMajorName,
  title,
  semesters,
  optionRecommendations
}) {
  return {
    id,
    nvccProgram: "engineering",
    transferSchool: "vt",
    transferMajor,
    transferMajorName,
    transferDegree: "BS Aerospace and Ocean Engineering",
    transferCollege: "College of Engineering",
    catalogYear: "2026-2027",
    nvccProgramName: "AS Engineering",
    totalCredits: semesters.flatMap((semester) => semester.courses).reduce(
      (total, course) => total + course.credits,
      0
    ),
    title,
    sourceDocuments: [
      {
        label: "NVCC Engineering, A.S. catalog",
        year: "2026-2027",
        type: "NVCC catalog",
        url: "https://catalog.nvcc.edu/programs/engineering-as/"
      },
      {
        label: "Virginia Tech College of Engineering GAA",
        year: "2021",
        type: "Guaranteed Admission Agreement",
        note: "Guarantees admission to General Engineering; specific engineering departments depend on space and departmental entrance requirements."
      },
      {
        label: "Virginia Tech Aerospace Engineering BS roadmap",
        type: "VT engineering roadmap",
        note: "AOE roadmap includes aerospace and ocean engineering shared core plus technical elective tracks."
      }
    ],
    gaa: vtEngineeringGaa,
    transferRoadmap: {
      required: commonEngineeringRequired,
      stronglyRecommended: commonEngineeringRecommended,
      recommended: optionRecommendations
    },
    semesters
  };
}

export const vtAerospaceEngineering2026 = createVtAoePathway({
  id: "nvcc-engineering-to-vt-aerospace-engineering-2026-2027",
  transferMajor: "aerospaceEngineering",
  transferMajorName: "Aerospace Engineering",
  title: "NVCC AS Engineering to Virginia Tech BS Aerospace Engineering",
  semesters: aerospaceSemesters,
  optionRecommendations: [
    { vtCourse: "AOE technical electives", nvccCourse: "Advisor-approved technical electives", title: "Do not assume every NVCC engineering elective applies directly to VT Aerospace Engineering" },
    { vtCourse: "AOE 2054 and AOE propulsion courses", nvccCourse: "Technical Elective", title: "Use advisor guidance before choosing electronics, thermodynamics, or other engineering electives" },
    { vtCourse: "Space/Aerospace technical tracks", nvccCourse: "PHY 243, programming, or approved alternatives", title: "Modern Physics or extra programming may support space, controls, or computational interests if accepted" },
    { vtCourse: "AOE design tracks", nvccCourse: "EGR 122", title: "Engineering Design supports later vehicle and system design coursework" }
  ]
});

export const vtOceanEngineering2026 = createVtAoePathway({
  id: "nvcc-engineering-to-vt-ocean-engineering-2026-2027",
  transferMajor: "oceanEngineering",
  transferMajorName: "Ocean Engineering",
  title: "NVCC AS Engineering to Virginia Tech BS Ocean Engineering",
  semesters: oceanSemesters,
  optionRecommendations: [
    { vtCourse: "Naval Engineering track", nvccCourse: "Advisor-approved technical electives", title: "Do not assume every NVCC engineering elective applies directly to VT Ocean Engineering" },
    { vtCourse: "Naval/Marine systems", nvccCourse: "Technical Elective", title: "Use advisor guidance before choosing fluids, hydraulics, environmental, or geology electives" },
    { vtCourse: "Ocean/environment context", nvccCourse: "GOL 105, EGR 280, CIV 240, EGR 282, or approved alternatives", title: "These may support ocean interests if accepted, but should be confirmed before scheduling" },
    { vtCourse: "Structures and Materials track", nvccCourse: "Ask advisor before taking EGR 246", title: "Mechanics of Materials may support background knowledge but should not be treated as direct AOE 2014 transfer credit" }
  ]
});
