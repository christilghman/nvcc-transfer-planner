import {
  commonEngineeringRequired,
  vtEngineeringGaa
} from "./vtAerospaceOceanEngineering2026";

const chemicalEngineeringSemesters = [
  {
    id: "semester-1",
    label: "Semester 1",
    focus: "Calculus, general chemistry, writing, and engineering foundation",
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
    focus: "Calculus II, physics I, and second semester chemistry",
    courses: [
      { code: "ENG 112", title: "College Composition II", credits: 3, type: "Required" },
      { code: "MTH 264", title: "Calculus II", credits: 4, type: "Required", transferPriority: "VT MATH 1226" },
      { code: "PHY 241", title: "University Physics I", credits: 4, type: "Science/Technical Elective", transferPriority: "VT PHYS 2305" },
      { code: "CHM 112", title: "General Chemistry II", credits: 4, type: "Technical Elective", transferPriority: "VT CHEM 1036/1046" },
      { code: "Humanities/Fine Arts", title: "Humanities or fine arts elective", credits: 3, type: "Required" }
    ]
  },
  {
    id: "semester-3",
    label: "Semester 3",
    focus: "Organic chemistry, physics II, and advanced math",
    courses: [
      { code: "MTH 267", title: "Differential Equations", credits: 3, type: "Required", transferPriority: "VT MATH 2214" },
      { code: "PHY 242", title: "University Physics II", credits: 4, type: "Science/Technical Elective", transferPriority: "VT PHYS 2306" },
      { code: "MTH 266", title: "Linear Algebra", credits: 3, type: "Math/Technical Elective", transferPriority: "VT MATH 2114" },
      { code: "CHM 241", title: "Organic Chemistry I", credits: 3, type: "Technical Elective", transferPriority: "VT CHEM 2535/2565 prep" },
      { code: "CHM 245", title: "Organic Chemistry I Laboratory", credits: 2, type: "Technical Elective", transferPriority: "VT CHEM 2545 prep" },
      { code: "HIS Elective", title: "History elective", credits: 3, type: "Required" }
    ]
  },
  {
    id: "semester-4",
    label: "Semester 4",
    focus: "Calculus III, organic chemistry II, and engineering design",
    courses: [
      { code: "MTH 265", title: "Calculus III", credits: 4, type: "Math/Technical Elective", transferPriority: "VT MATH 2204" },
      { code: "CHM 242", title: "Organic Chemistry II", credits: 3, type: "Technical Elective", transferPriority: "VT CHEM 2536/2566 prep" },
      { code: "CHM 246", title: "Organic Chemistry II Laboratory", credits: 2, type: "Technical Elective", transferPriority: "Chemistry elective/lab preparation if accepted" },
      { code: "EGR 122", title: "Engineering Design", credits: 3, type: "Technical Elective", transferPriority: "VT ENGE 1216" },
      { code: "Technical Elective", title: "Advisor-approved engineering or technical elective", credits: 3, type: "Technical Elective", transferPriority: "Advisor-confirmed" },
      { code: "Humanities/Fine Arts", title: "Second humanities or fine arts elective", credits: 3, type: "Required" }
    ]
  }
];

export const vtChemicalEngineering2026 = {
  id: "nvcc-engineering-to-vt-chemical-engineering-2026-2027",
  nvccProgram: "engineering",
  transferSchool: "vt",
  transferMajor: "chemicalEngineering",
  transferMajorName: "Chemical Engineering",
  transferDegree: "BS Chemical Engineering",
  transferCollege: "College of Engineering",
  catalogYear: "2026-2027",
  nvccProgramName: "AS Engineering",
  totalCredits: chemicalEngineeringSemesters.flatMap((semester) => semester.courses).reduce(
    (total, course) => total + course.credits,
    0
  ),
  title: "NVCC AS Engineering to Virginia Tech BS Chemical Engineering",
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
      label: "Virginia Tech Chemical Engineering BS roadmap",
      year: "2026-2027",
      type: "VT engineering roadmap",
      note: "Roadmap emphasizes general chemistry, organic chemistry, physics, linear algebra, multivariable calculus, differential equations, and CHE-specific sophomore coursework."
    }
  ],
  gaa: vtEngineeringGaa,
  transferRoadmap: {
    required: [
      ...commonEngineeringRequired,
      { vtCourse: "CHEM 1036/1046", nvccCourse: "CHM 112", title: "General Chemistry II with lab" },
      { vtCourse: "CHEM 2535/2565", nvccCourse: "CHM 241", title: "Organic Chemistry I" },
      { vtCourse: "CHEM 2545", nvccCourse: "CHM 245", title: "Organic Chemistry laboratory preparation" },
      { vtCourse: "CHEM 2536/2566", nvccCourse: "CHM 242", title: "Organic Chemistry II" }
    ],
    stronglyRecommended: [
      { vtCourse: "CHE 2004", nvccCourse: "No clear NVCC direct equivalent", title: "Chemical Engineering Sophomore Seminar is likely completed after transfer" },
      { vtCourse: "CHE 2114", nvccCourse: "EGR 231", title: "Mass and Energy Balances may transfer to VT, but does not satisfy an NVCC Engineering AS technical elective" },
      { vtCourse: "CHE 2164", nvccCourse: "EGR 232", title: "Chemical Engineering Thermodynamics may transfer to VT, but does not satisfy an NVCC Engineering AS technical elective" },
      { vtCourse: "CHE 3134", nvccCourse: "No clear NVCC direct equivalent", title: "Separation Processes is likely completed after transfer" }
    ],
    recommended: [
      { vtCourse: "CHE 2114/CHE 2164 transfer option", nvccCourse: "EGR 231 and EGR 232", title: "Consider separately from the AS plan; these can help VT transfer credit but will not count toward the NVCC Engineering AS degree" },
      { vtCourse: "Chemical Engineering technical electives", nvccCourse: "CHM 246, BIO 101, PHY 243, or advisor-approved alternatives", title: "Choose based on intended CHE track and confirmed transfer value" },
      { vtCourse: "Climate/energy/materials interests", nvccCourse: "EGR 248, CIV 280, EGR 280, or approved chemistry elective", title: "Useful background only if accepted by VT or recommended by an advisor" }
    ]
  },
  semesters: chemicalEngineeringSemesters
};
