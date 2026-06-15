export const jmuBusinessAdministration2026 = {
  id: "nvcc-business-administration-to-jmu-business-administration-2026-2027",
  nvccProgram: "businessAdministration",
  transferSchool: "jmu",
  transferMajor: "businessAdministration",
  transferMajorName: "Business Administration",
  transferDegree: "JMU Guaranteed Admission Pathway",
  catalogYear: "2026-2027",
  nvccProgramName: "AS Business Administration",
  totalCredits: 60,
  title: "NVCC AS Business Administration to JMU Business Administration",
  sourceDocuments: [
    {
      label: "NVCC Business Administration, A.S. catalog",
      year: "2026-2027",
      type: "NVCC catalog",
      url: "https://catalog.nvcc.edu/programs/business-administration-as/"
    },
    {
      label: "JMU and VCCS Guaranteed Admission Agreement",
      year: "2023",
      type: "Guaranteed Admission Agreement",
      note: "Broad university GAA; admission under the agreement does not necessarily guarantee admission to a specific major or program."
    },
    {
      label: "JMU transfer admissions requirements",
      type: "General transfer admissions guidance"
    }
  ],
  gaa: {
    gpaMinimum: 3.0,
    minimumCredits: 60,
    noGradeBelow: "C",
    guaranteedAdmissionTo: "James Madison University",
    requiredCourses: [
      "Complete an approved VCCS AA, AS, or AA&S transfer associate degree",
      "Complete at least one transferable course in English or language, math, lab science, humanities, and social science",
      "Complete 24 transferable credit hours after high school graduation for GAA eligibility",
      "Submit the JMU admission application, transcripts, and Letter of Intent by the application deadline"
    ],
    generalEducationAreas: {
      "JMU general education": "Satisfied by completion of the approved transfer associate degree",
      "Core academic areas": "Minimum 3.0 GPA across language, lab science, math, humanities, and social science courses"
    },
    notes: [
      "The JMU GAA is broad university guaranteed admission and does not necessarily guarantee admission into a specific program of choice.",
      "JMU requires a minimum cumulative 3.0 GPA at the current VCCS institution and previous institutions attended.",
      "Students who repeat more than two courses are not eligible through the GAA, but may apply through regular transfer admission.",
      "Students previously enrolled at JMU who transferred to a VCCS institution are not eligible for this GAA.",
      "JMU application deadlines are February 1 for summer, March 1 for fall, and October 1 for spring.",
      "JMU's transfer guidance recommends mostly A's and B's in core academic classes."
    ]
  },
  transferRoadmap: {
    required: [
      { vtCourse: "JMU GAA", nvccCourse: "ENG 111 and ENG 112", title: "English composition sequence" },
      { vtCourse: "JMU GAA", nvccCourse: "MTH 161 and MTH 261", title: "Math core area" },
      { vtCourse: "JMU GAA", nvccCourse: "Physical or Life Science Elective", title: "Lab science core area" },
      { vtCourse: "JMU GAA", nvccCourse: "Humanities/Fine Arts Electives", title: "Humanities core area" },
      { vtCourse: "JMU GAA", nvccCourse: "ECO 201 or ECO 202", title: "Social science core area" }
    ],
    stronglyRecommended: [
      { vtCourse: "JMU transfer guidance", nvccCourse: "Core academic courses", title: "Earn mostly A's and B's" },
      { vtCourse: "JMU GAA", nvccCourse: "Letter of Intent", title: "Submit by the application deadline" }
    ],
    recommended: [
      { vtCourse: "NVCC catalog note", nvccCourse: "ITE 140 or BUS 240", title: "Consult transfer guidance before choosing" },
      { vtCourse: "JMU application", nvccCourse: "Official transcripts", title: "Submit transcripts from all institutions attended, including high school" }
    ]
  },
  semesters: [
    {
      id: "semester-1",
      label: "Semester 1",
      focus: "Business foundation and core transfer areas",
      courses: [
        { code: "BUS 100", title: "Introduction to Business", credits: 3, type: "Required" },
        { code: "ENG 111", title: "College Composition I", credits: 3, type: "Required", transferPriority: "JMU Core Area" },
        { code: "HIS Elective", title: "History elective", credits: 3, type: "Required" },
        { code: "MTH 161", title: "PreCalculus I or higher", credits: 3, type: "Required", transferPriority: "JMU Core Area" },
        { code: "CST 100 or CST 110", title: "Communication elective", credits: 3, type: "Required" },
        { code: "SDV 100", title: "College Success Skills", credits: 1, type: "Required" }
      ]
    },
    {
      id: "semester-2",
      label: "Semester 2",
      focus: "Composition, calculus, and lab science",
      courses: [
        { code: "ENG 112", title: "College Composition II", credits: 3, type: "Required", transferPriority: "JMU Core Area" },
        { code: "Humanities/Fine Arts", title: "Humanities or fine arts elective", credits: 3, type: "Required", transferPriority: "JMU Core Area" },
        { code: "MTH 261", title: "Applied Calculus I or higher", credits: 3, type: "Required", transferPriority: "JMU Core Area" },
        { code: "Lab Science", title: "Physical or life science elective with lab", credits: 4, type: "Required", transferPriority: "JMU Core Area" },
        { code: "ITE 140 or BUS 240", title: "Spreadsheeting for Business or Business Law", credits: 3, type: "Transfer-advised Option" }
      ]
    },
    {
      id: "semester-3",
      label: "Semester 3",
      focus: "Accounting, economics, and business statistics",
      courses: [
        { code: "ACC 211", title: "Principles of Accounting I", credits: 3, type: "Required" },
        { code: "BUS 224", title: "Business Statistics", credits: 3, type: "Required" },
        { code: "ECO 201", title: "Principles of Macroeconomics", credits: 3, type: "Required", transferPriority: "JMU Core Area" },
        { code: "Humanities/Fine Arts", title: "Second humanities or fine arts elective", credits: 3, type: "Required" },
        { code: "BUS Elective or Lab Science", title: "Business elective or additional lab science", credits: 3, type: "Program Option" }
      ]
    },
    {
      id: "semester-4",
      label: "Semester 4",
      focus: "Business concentration options and transfer completion",
      courses: [
        { code: "ACC 212", title: "Principles of Accounting II", credits: 3, type: "Required" },
        { code: "ECO 202", title: "Principles of Microeconomics", credits: 3, type: "Required", transferPriority: "JMU Core Area" },
        { code: "BUS 270 or BUS Elective", title: "Interpersonal Dynamics or business elective", credits: 3, type: "Program Option" },
        { code: "BUS 280 or BUS Elective", title: "International Business or business elective", credits: 3, type: "Program Option" }
      ]
    }
  ]
};
