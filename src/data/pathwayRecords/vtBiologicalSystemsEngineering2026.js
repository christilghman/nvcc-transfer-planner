import {
  commonEngineeringRequired,
  vtEngineeringGaa
} from "./vtAerospaceOceanEngineering2026";

const biologicalSystemsSemesters = [
  {
    id: "semester-1",
    label: "Semester 1",
    focus: "Calculus, chemistry, and engineering foundation",
    courses: [
      { code: "ECO 202", title: "Principles of Microeconomics", credits: 3, type: "Required" },
      { code: "EGR 121", title: "Foundations of Engineering", credits: 2, type: "Required", transferPriority: "VT ENGE 1215" },
      { code: "ENG 111", title: "College Composition I", credits: 3, type: "Required" },
      { code: "MTH 263", title: "Calculus I", credits: 4, type: "Required", transferPriority: "VT MATH 1225" },
      { code: "CHM 111", title: "General Chemistry I", credits: 4, type: "Science/Technical Elective", transferPriority: "VT CHEM 1035/1045" },
      { code: "SDV 100 or SDV 101", title: "College success/orientation", credits: 1, type: "Required" }
    ]
  },
  {
    id: "semester-2",
    label: "Semester 2",
    focus: "Calculus II, physics I, and engineering design",
    courses: [
      { code: "ENG 112", title: "College Composition II", credits: 3, type: "Required" },
      { code: "MTH 264", title: "Calculus II", credits: 4, type: "Required", transferPriority: "VT MATH 1226" },
      { code: "PHY 241", title: "University Physics I", credits: 4, type: "Science/Technical Elective", transferPriority: "VT PHYS 2305" },
      { code: "EGR 122", title: "Engineering Design", credits: 3, type: "Technical Elective", transferPriority: "VT ENGE 1216" },
      { code: "Humanities/Fine Arts", title: "Humanities or fine arts elective", credits: 3, type: "Required" }
    ]
  },
  {
    id: "semester-3",
    label: "Semester 3",
    focus: "Biology, chemistry, statics, and differential equations",
    courses: [
      { code: "MTH 267", title: "Differential Equations", credits: 3, type: "Required", transferPriority: "VT MATH 2214" },
      { code: "CHM 112", title: "General Chemistry II", credits: 4, type: "Technical Elective", transferPriority: "VT CHEM 1036/1046 prep" },
      { code: "BIO 101", title: "General Biology I", credits: 4, type: "Technical Elective", transferPriority: "VT BIOL 1105 prep" },
      { code: "EGR 240", title: "Statics", credits: 3, type: "Technical Elective", transferPriority: "VT ESM 2104" },
      { code: "HIS Elective", title: "History elective", credits: 3, type: "Required" }
    ]
  },
  {
    id: "semester-4",
    label: "Semester 4",
    focus: "Advanced math, physics II, and engineering economy",
    courses: [
      { code: "MTH 265", title: "Calculus III", credits: 4, type: "Math/Technical Elective", transferPriority: "VT MATH 2204" },
      { code: "MTH 266", title: "Linear Algebra", credits: 3, type: "Math/Technical Elective", transferPriority: "VT MATH 2114" },
      { code: "PHY 242", title: "University Physics II", credits: 4, type: "Science/Technical Elective", transferPriority: "VT PHYS 2306" },
      { code: "EGR 206", title: "Engineering Economics", credits: 3, type: "Technical Elective", transferPriority: "VT ISE 2014 prep" },
      { code: "Humanities/Fine Arts", title: "Second humanities or fine arts elective", credits: 3, type: "Required" }
    ]
  }
];

export const vtBiologicalSystemsEngineering2026 = {
  id: "nvcc-engineering-to-vt-biological-systems-engineering-2026-2027",
  nvccProgram: "engineering",
  transferSchool: "vt",
  transferMajor: "biologicalSystemsEngineering",
  transferMajorName: "Biological Systems Engineering",
  transferDegree: "BS Biological Systems Engineering",
  transferCollege: "College of Engineering",
  catalogYear: "2026-2027",
  nvccProgramName: "AS Engineering",
  totalCredits: biologicalSystemsSemesters.flatMap((semester) => semester.courses).reduce(
    (total, course) => total + course.credits,
    0
  ),
  title: "NVCC AS Engineering to Virginia Tech BS Biological Systems Engineering",
  sourceDocuments: [
    {
      label: "NVCC Engineering, A.S. catalog",
      year: "2026-2027",
      type: "NVCC catalog",
      url: "https://catalog.nvcc.edu/programs/engineering-as/"
    },
    {
      label: "Virginia Tech College of Engineering GAA",
      type: "Guaranteed Admission Agreement",
      note: "Engineering GAA guidance is used for College of Engineering transfer planning; admission to a specific engineering department depends on space and departmental entrance requirements."
    },
    {
      label: "Virginia Tech Biological Systems Engineering BS roadmap",
      year: "2026-2027",
      type: "VT engineering roadmap",
      note: "Roadmap emphasizes chemistry, biology, statics, engineering economy, physics, and the full calculus/differential equations/linear algebra sequence in the first two years."
    }
  ],
  gaa: vtEngineeringGaa,
  transferRoadmap: {
    required: [
      ...commonEngineeringRequired,
      { vtCourse: "CHEM 1036", nvccCourse: "CHM 112", title: "Second semester general chemistry is strongly encouraged for BSE" },
      { vtCourse: "BIOL 1105/1106", nvccCourse: "BIO 101 plus advisor-confirmed biology option", title: "Biology sequence preparation for BSE" },
      { vtCourse: "ESM 2104", nvccCourse: "EGR 240", title: "Statics" },
      { vtCourse: "ISE 2014", nvccCourse: "EGR 206", title: "Engineering economy" }
    ],
    stronglyRecommended: [
      { vtCourse: "BSE 2004", nvccCourse: "No clear NVCC direct equivalent", title: "Introduction to Biological Systems Engineering is likely completed after transfer" },
      { vtCourse: "BSE 2504", nvccCourse: "CIV 240 or EGR 282 if advisor-approved", title: "Fluid mechanics/hydraulics may support BSE, but confirm transfer before scheduling" },
      { vtCourse: "BSE 3144", nvccCourse: "CSC 221 or additional programming if advisor-approved", title: "Numerical methods preparation; do not assume direct BSE 3144 credit" }
    ],
    recommended: [
      { vtCourse: "BSE environmental/ecological sequence", nvccCourse: "CIV 280, EGR 280, GOL 105, or advisor-approved science elective", title: "Useful for ecological engineering or environmental health interests if accepted" },
      { vtCourse: "BSE biotechnology/food/health sequence", nvccCourse: "CHM 241/242, CHM 245/246, BIO 206, or advisor-approved biology/chemistry elective", title: "Useful for biotechnology, food engineering, or health professions interests if accepted" },
      { vtCourse: "CS 1064 technical elective option", nvccCourse: "CSC 221", title: "Programming may count as a technical elective and supports later numerical/modeling work" }
    ]
  },
  semesters: biologicalSystemsSemesters
};
