export const uvaComputerScience2026 = {
  id: "nvcc-computer-science-to-uva-computer-science-2026-2027",
  nvccProgram: "computerScience",
  transferSchool: "uva",
  transferMajor: "computerScience",
  transferMajorName: "Computer Science",
  transferDegree: "BS Computer Science",
  transferCollege: "School of Engineering and Applied Science",
  catalogYear: "2026-2027",
  nvccProgramName: "AS Computer Science",
  totalCredits: 61,
  title: "NVCC AS Computer Science to UVA Engineering Computer Science",
  sourceDocuments: [
    {
      label: "NVCC Computer Science, A.S. catalog",
      year: "2026-2027",
      type: "NVCC catalog",
      url: "https://catalog.nvcc.edu/programs/computer-science-as/"
    },
    {
      label: "UVA Engineering Guaranteed Admission Agreement",
      year: "2025",
      type: "Guaranteed Admission Agreement",
      note: "Supersedes UVA Engineering GAA agreements signed before January 1, 2024."
    },
    {
      label: "UVA undergraduate transfer admission page",
      type: "General transfer admissions guidance"
    }
  ],
  gaa: {
    gpaMinimum: 3.2,
    minimumCredits: "45 transferable VCCS credits",
    noGradeBelow: "B in listed GAA courses; C in other transfer courses",
    guaranteedAdmissionTo: "UVA School of Engineering and Applied Science",
    requiredCourses: [
      "Complete an AS or AA&S degree in Engineering, Science, or Computer Science",
      "Earn B or better in MTH 264, MTH 265, PHY 241, CHM 111, and EGR 125 or CSC 221",
      "Earn C or better in all other community college courses used for UVA transfer credit",
      "Earn at least 45 transferable credits at a VCCS institution after high school graduation"
    ],
    generalEducationAreas: {
      "Lower-level general education": "Satisfied by completion of the approved transfer associate degree",
      "Science, Technology, and Society": "Must be completed at UVA Engineering"
    },
    notes: [
      "Admission through the GAA is to UVA Engineering; UVA notes that Engineering does not admit transfer students directly to a specific major.",
      "Fall transfer application deadline is March 1.",
      "Applicants must be at least one year removed from high school completion by UVA entry.",
      "Students who earned an associate degree through high school dual enrollment are not guaranteed admission under this GAA and should apply as first-year applicants.",
      "Students must transfer within two years after completing the associate degree.",
      "Students previously enrolled at UVA who transferred to a VCCS institution are not eligible for this GAA."
    ]
  },
  transferRoadmap: {
    required: [
      { vtCourse: "UVA GAA", nvccCourse: "MTH 264", title: "Calculus II with B or better" },
      { vtCourse: "UVA GAA", nvccCourse: "MTH 265", title: "Calculus III with B or better" },
      { vtCourse: "UVA GAA", nvccCourse: "PHY 241", title: "University Physics I with B or better" },
      { vtCourse: "UVA GAA", nvccCourse: "CHM 111", title: "General Chemistry I with B or better" },
      { vtCourse: "UVA GAA", nvccCourse: "CSC 221", title: "Programming requirement with B or better" }
    ],
    stronglyRecommended: [
      { vtCourse: "UVA transfer guidance", nvccCourse: "Associate degree completion", title: "Complete the approved transfer associate degree before entry" },
      { vtCourse: "UVA transfer guidance", nvccCourse: "24 transferable credits", title: "Minimum eligibility for transfer consideration" }
    ],
    recommended: [
      { vtCourse: "UVA application", nvccCourse: "Common Application", title: "Submit transfer application and UVA supplement by March 1" },
      { vtCourse: "UVA application", nvccCourse: "Official transcripts", title: "Submit all college and high school transcripts" },
      { vtCourse: "UVA transfer resources", nvccCourse: "Credit equivalency review", title: "Use UVA Engineering equivalency resources for course planning" }
    ]
  },
  semesters: [
    {
      id: "semester-1",
      label: "Semester 1",
      focus: "NVCC foundation and UVA programming requirement",
      courses: [
        { code: "CSC 221", title: "Introduction to Problem Solving and Programming", credits: 3, type: "Required", transferPriority: "UVA GAA B or Better" },
        { code: "ENG 111", title: "College Composition I", credits: 3, type: "Required" },
        { code: "HIS Elective", title: "History elective", credits: 3, type: "Required" },
        { code: "MTH 167", title: "PreCalculus with Trigonometry", credits: 5, type: "Placement-based" },
        { code: "SDV 100", title: "College Success Skills", credits: 1, type: "Required" }
      ]
    },
    {
      id: "semester-2",
      label: "Semester 2",
      focus: "Calculus I and core CS progress",
      courses: [
        { code: "CSC 222", title: "Object Oriented Programming", credits: 4, type: "Required" },
        { code: "ENG 112", title: "College Composition II", credits: 3, type: "Required" },
        { code: "MTH 263", title: "Calculus I", credits: 4, type: "Required" },
        { code: "Humanities/Fine Arts", title: "Humanities or fine arts elective", credits: 3, type: "Required" }
      ]
    },
    {
      id: "semester-3",
      label: "Semester 3",
      focus: "UVA GAA math and lab science requirements",
      courses: [
        { code: "CSC 223", title: "Data Structures and Analysis of Algorithms", credits: 4, type: "Required" },
        { code: "CSC 208 or MTH 288", title: "Discrete structures or discrete mathematics", credits: 3, type: "Required" },
        { code: "MTH 264", title: "Calculus II", credits: 4, type: "Required", transferPriority: "UVA GAA B or Better" },
        { code: "CHM 111", title: "General Chemistry I", credits: 4, type: "Science Elective", transferPriority: "UVA GAA B or Better" }
      ]
    },
    {
      id: "semester-4",
      label: "Semester 4",
      focus: "UVA Engineering transfer readiness",
      courses: [
        { code: "MTH 265", title: "Calculus III", credits: 4, type: "Required Option", transferPriority: "UVA GAA B or Better" },
        { code: "PHY 241", title: "University Physics I", credits: 4, type: "Science Elective", transferPriority: "UVA GAA B or Better" },
        { code: "MTH 266", title: "Linear Algebra", credits: 3, type: "Approved Elective" },
        { code: "Social/Behavioral Science", title: "Social or behavioral science elective", credits: 3, type: "Required" },
        { code: "Humanities/Fine Arts", title: "Second humanities or fine arts elective", credits: 3, type: "Required" }
      ]
    }
  ]
};
