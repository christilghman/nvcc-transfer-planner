import {
  commonEngineeringRequired,
  vtEngineeringGaa
} from "./vtAerospaceOceanEngineering2026";

const civilEngineeringSemesters = [
  {
    id: "semester-1",
    label: "Semester 1",
    focus: "Calculus, chemistry, writing, and engineering foundation",
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
    focus: "Calculus II, physics, engineering design, and communication",
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
    focus: "Statics, linear algebra, differential equations, and transfer-safe electives",
    courses: [
      { code: "MTH 267", title: "Differential Equations", credits: 3, type: "Required", transferPriority: "VT MATH 2214" },
      { code: "MTH 266", title: "Linear Algebra", credits: 3, type: "Math/Technical Elective", transferPriority: "VT MATH 2114" },
      { code: "EGR 240", title: "Statics", credits: 3, type: "Technical Elective", transferPriority: "VT ESM 2104" },
      { code: "Technical Elective", title: "Advisor-approved engineering or technical elective", credits: 4, type: "Technical Elective", transferPriority: "Advisor-confirmed" },
      { code: "HIS Elective", title: "History elective", credits: 3, type: "Required" }
    ]
  },
  {
    id: "semester-4",
    label: "Semester 4",
    focus: "Multivariable calculus and civil-oriented technical electives",
    courses: [
      { code: "MTH 265", title: "Calculus III", credits: 4, type: "Math/Technical Elective", transferPriority: "VT MATH 2204" },
      { code: "EGR 246", title: "Mechanics of Materials", credits: 3, type: "Technical Elective", transferPriority: "VT ESM 2204 prep" },
      { code: "EGR 206", title: "Engineering Economics", credits: 3, type: "Technical Elective", transferPriority: "VT ISE 2014 prep" },
      { code: "Technical Elective", title: "Advisor-approved engineering or technical elective", credits: 3, type: "Technical Elective", transferPriority: "Advisor-confirmed" },
      { code: "Technical Elective", title: "Advisor-approved engineering or technical elective", credits: 3, type: "Technical Elective", transferPriority: "Advisor-confirmed" },
      { code: "Humanities/Fine Arts", title: "Second humanities or fine arts elective", credits: 3, type: "Required" }
    ]
  }
];

export const vtCivilEngineering2026 = {
  id: "nvcc-engineering-to-vt-civil-engineering-2026-2027",
  nvccProgram: "engineering",
  transferSchool: "vt",
  transferMajor: "civilEngineering",
  transferMajorName: "Civil Engineering",
  transferDegree: "BS Civil Engineering",
  transferCollege: "College of Engineering",
  catalogYear: "2026-2027",
  nvccProgramName: "AS Engineering",
  totalCredits: civilEngineeringSemesters.flatMap((semester) => semester.courses).reduce(
    (total, course) => total + course.credits,
    0
  ),
  title: "NVCC AS Engineering to Virginia Tech BS Civil Engineering",
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
      label: "Virginia Tech Civil Engineering BS roadmap",
      year: "2026-2027",
      type: "VT engineering roadmap",
      note: "Roadmap emphasizes statics, mechanics of deformable bodies, geology, civil computer applications, geomatics, engineering economy, and the advanced math sequence in the first two years."
    }
  ],
  gaa: vtEngineeringGaa,
  transferRoadmap: {
    required: [
      ...commonEngineeringRequired,
      { vtCourse: "ESM 2104", nvccCourse: "EGR 240", title: "Statics" },
      { vtCourse: "ESM 2204", nvccCourse: "EGR 246", title: "Mechanics of deformable bodies preparation" },
      { vtCourse: "ISE 2014", nvccCourse: "EGR 206", title: "Engineering economy preparation" },
      { vtCourse: "GEOS 2104", nvccCourse: "No promoted NVCC equivalent", title: "Elements of Geology is likely completed after transfer" },
      { vtCourse: "CEE 3804", nvccCourse: "No promoted NVCC equivalent", title: "Computer Applications for Civil and Environmental Engineers is likely completed after transfer" }
    ],
    stronglyRecommended: [
      { vtCourse: "CEE 2804", nvccCourse: "No clear NVCC direct equivalent", title: "Introduction to Civil and Environmental Engineering is likely completed after transfer" },
      { vtCourse: "CEE 2814", nvccCourse: "Surveying/geomatics should be advisor-confirmed", title: "Geomatics is likely completed after transfer unless an approved equivalent is identified" },
      { vtCourse: "CEE 2834", nvccCourse: "CAD/drawing coursework if advisor-approved", title: "Civil drawings and virtual modeling preparation should be confirmed before scheduling" },
      { vtCourse: "CEE 3304", nvccCourse: "CIV 240 or EGR 282 if advisor-approved", title: "Civil fluid mechanics/water resources preparation should be confirmed before scheduling" }
    ],
    recommended: [
      { vtCourse: "Environmental Engineering specialty", nvccCourse: "Advisor-approved technical elective", title: "Choose only courses confirmed to apply to the VT Civil Engineering degree" },
      { vtCourse: "Water Resources specialty", nvccCourse: "CIV 240 or EGR 282 only if advisor-approved", title: "Useful for hydraulics or water resources interests only if accepted" },
      { vtCourse: "Geotechnical/Materials specialty", nvccCourse: "CIV 225/CIV 226, EGR 246, or advisor-approved alternative", title: "Useful for soils, geotechnical, or civil materials interests if accepted" },
      { vtCourse: "Construction Engineering and Management specialty", nvccCourse: "EGR 206, CST 100/110, or advisor-approved construction elective", title: "Useful for construction management interests if accepted" }
    ]
  },
  semesters: civilEngineeringSemesters
};
