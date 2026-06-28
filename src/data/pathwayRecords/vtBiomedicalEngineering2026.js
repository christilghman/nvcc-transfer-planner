import {
  commonEngineeringRequired,
  vtEngineeringGaa
} from "./vtAerospaceOceanEngineering2026";

const biomedicalEngineeringSemesters = [
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
    focus: "Calculus II, physics I, and linear algebra",
    courses: [
      { code: "ENG 112", title: "College Composition II", credits: 3, type: "Required" },
      { code: "MTH 264", title: "Calculus II", credits: 4, type: "Required", transferPriority: "VT MATH 1226" },
      { code: "MTH 266", title: "Linear Algebra", credits: 3, type: "Math/Technical Elective", transferPriority: "VT MATH 2114" },
      { code: "PHY 241", title: "University Physics I", credits: 4, type: "Science/Technical Elective", transferPriority: "VT PHYS 2305" },
      { code: "Humanities/Fine Arts", title: "Humanities or fine arts elective", credits: 3, type: "Required" }
    ]
  },
  {
    id: "semester-3",
    label: "Semester 3",
    focus: "Biology, statics, multivariable calculus, and physics II",
    courses: [
      { code: "BIO 101", title: "General Biology I", credits: 4, type: "Technical Elective", transferPriority: "VT BIOL 1105 prep" },
      { code: "EGR 122", title: "Engineering Design", credits: 3, type: "Technical Elective", transferPriority: "VT ENGE 1216" },
      { code: "EGR 240", title: "Statics", credits: 3, type: "Technical Elective", transferPriority: "VT ESM 2104" },
      { code: "MTH 265", title: "Calculus III", credits: 4, type: "Math/Technical Elective", transferPriority: "VT MATH 2204" },
      { code: "PHY 242", title: "University Physics II", credits: 4, type: "Science/Technical Elective", transferPriority: "VT PHYS 2306" }
    ]
  },
  {
    id: "semester-4",
    label: "Semester 4",
    focus: "Differential equations, dynamics, and transfer-safe technical electives",
    courses: [
      { code: "MTH 267", title: "Differential Equations", credits: 3, type: "Required", transferPriority: "VT MATH 2214" },
      { code: "EGR 245", title: "Dynamics", credits: 3, type: "Technical Elective", transferPriority: "VT ESM 2304" },
      { code: "Technical Elective", title: "Advisor-approved engineering or technical elective", credits: 4, type: "Technical Elective", transferPriority: "Advisor-confirmed" },
      { code: "Technical Elective", title: "Advisor-approved engineering or technical elective", credits: 3, type: "Technical Elective", transferPriority: "Advisor-confirmed" },
      { code: "HIS Elective", title: "History elective", credits: 3, type: "Required" },
      { code: "Humanities/Fine Arts", title: "Second humanities or fine arts elective", credits: 3, type: "Required" }
    ]
  }
];

export const vtBiomedicalEngineering2026 = {
  id: "nvcc-engineering-to-vt-biomedical-engineering-2026-2027",
  nvccProgram: "engineering",
  transferSchool: "vt",
  transferMajor: "biomedicalEngineering",
  transferMajorName: "Biomedical Engineering",
  transferDegree: "BS Biomedical Engineering",
  transferCollege: "College of Engineering",
  catalogYear: "2026-2027",
  nvccProgramName: "AS Engineering",
  totalCredits: biomedicalEngineeringSemesters.flatMap((semester) => semester.courses).reduce(
    (total, course) => total + course.credits,
    0
  ),
  title: "NVCC AS Engineering to Virginia Tech BS Biomedical Engineering",
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
      label: "Virginia Tech Biomedical Engineering BS roadmap",
      year: "2026-2027",
      type: "VT engineering roadmap",
      note: "Roadmap emphasizes biology, computational methods, statics, circuits/electrical principles, dynamics, materials, physics, and the advanced math sequence in the first two years."
    }
  ],
  gaa: vtEngineeringGaa,
  transferRoadmap: {
    required: [
      ...commonEngineeringRequired,
      { vtCourse: "BIOL 1105", nvccCourse: "BIO 101", title: "Principles of Biology preparation" },
      { vtCourse: "ESM 2104", nvccCourse: "EGR 240", title: "Statics" },
      { vtCourse: "ESM 2304", nvccCourse: "EGR 245", title: "Dynamics" },
      { vtCourse: "BMES 2054", nvccCourse: "No promoted NVCC equivalent", title: "Electrical Principles for Biomedical Engineers is likely completed after transfer" },
      { vtCourse: "BMES 2074", nvccCourse: "No promoted NVCC equivalent", title: "Computational Methods in Biomedical Engineering is likely completed after transfer" }
    ],
    stronglyRecommended: [
      { vtCourse: "BMES 2014", nvccCourse: "No clear NVCC direct equivalent", title: "Biomedical Engineering Professional Practice is likely completed after transfer" },
      { vtCourse: "BMES 2104", nvccCourse: "No clear NVCC direct equivalent", title: "Introduction to Biomedical Engineering is likely completed after transfer" },
      { vtCourse: "MSE 2034", nvccCourse: "EGR 246 only if advisor-approved", title: "Materials preparation should be confirmed before scheduling" }
    ],
    recommended: [
      { vtCourse: "BMES biomechanics subfield", nvccCourse: "EGR 246, PHY 243, or advisor-approved technical elective", title: "Useful for biomechanics interests if accepted" },
      { vtCourse: "BMES devices/imaging subfield", nvccCourse: "Advisor-approved technical elective", title: "Choose only courses confirmed to apply to the VT Biomedical Engineering degree" },
      { vtCourse: "BMES cell/tissue subfield", nvccCourse: "BIO 206, CHM 112, CHM 241/242, or advisor-approved science elective", title: "Useful for cell, tissue, biomaterials, or regenerative medicine interests if accepted" }
    ]
  },
  semesters: biomedicalEngineeringSemesters
};
