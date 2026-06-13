export const vtComputerScience2026 = {
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
};
