import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import GAARequirements from "../components/GAARequirements";
import { transferSchools } from "../data/schools";
import { getTransferPathway } from "../data/transferPathways";

const DRAFT_KEY = "nova-transfer-planner-draft";

function getInitialSelection(locationState) {
  if (
    locationState?.nvccProgram &&
    locationState?.catalogYear &&
    locationState?.transferSchool &&
    locationState?.transferMajor
  ) {
    return locationState;
  }

  try {
    const savedDraft = JSON.parse(localStorage.getItem(DRAFT_KEY));
    return savedDraft?.selection || {};
  } catch {
    return {};
  }
}

function ScheduleBuilder() {
  const location = useLocation();
  const initialSelection = getInitialSelection(location.state);
  const { nvccProgram, catalogYear, transferSchool, transferMajor } = initialSelection;
  const [completedCourses, setCompletedCourses] = useState([]);
  const [saveMessage, setSaveMessage] = useState("");

  const school = transferSchools[transferSchool];
  const plan = getTransferPathway({
    nvccProgram,
    catalogYear,
    transferSchool,
    transferMajor
  });

  const allCourses = useMemo(
    () => plan?.semesters.flatMap((semester) => semester.courses) || [],
    [plan]
  );

  const completedCredits = allCourses
    .filter((course) => completedCourses.includes(course.code))
    .reduce((total, course) => total + course.credits, 0);

  useEffect(() => {
    try {
      const savedDraft = JSON.parse(localStorage.getItem(DRAFT_KEY));
      if (
        savedDraft?.selection?.nvccProgram === nvccProgram &&
        savedDraft?.selection?.catalogYear === catalogYear &&
        savedDraft?.selection?.transferSchool === transferSchool &&
        savedDraft?.selection?.transferMajor === transferMajor
      ) {
        setCompletedCourses(savedDraft.completedCourses || []);
      }
    } catch {
      setCompletedCourses([]);
    }
  }, [nvccProgram, catalogYear, transferSchool, transferMajor]);

  const toggleCourse = (courseCode) => {
    setSaveMessage("");
    setCompletedCourses((currentCourses) =>
      currentCourses.includes(courseCode)
        ? currentCourses.filter((code) => code !== courseCode)
        : [...currentCourses, courseCode]
    );
  };

  const handleSaveDraft = () => {
    const draft = {
      selection: { nvccProgram, catalogYear, transferSchool, transferMajor },
      completedCourses,
      savedAt: new Date().toISOString()
    };

    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    setSaveMessage("Saved on this device. Account sync can come later.");
  };

  if (!plan) {
    return (
      <main className="page-shell">
        <section className="planner-panel empty-state">
          <p className="eyebrow">No pathway selected</p>
          <h1>Choose a university, major, and catalog year first.</h1>
          <p>
            The planner works best when it can load the exact transfer agreement
            for your target school.
          </p>
          <Link className="primary-button" to="/choose-university">
            Choose Pathway
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <section className="plan-header">
        <div>
          <p className="eyebrow">{school.name}</p>
          <h1>{plan.transferMajorName} transfer plan</h1>
          <p>
            {plan.nvccProgramName} to {plan.transferDegree} | Catalog {catalogYear}
          </p>
        </div>
        <div className="progress-card">
          <span>{completedCredits}</span>
          <p>of {plan.totalCredits} planned credits marked complete</p>
        </div>
      </section>

      <section className="action-row">
        <button className="primary-button" onClick={handleSaveDraft}>
          Save Draft
        </button>
        <Link className="secondary-button" to="/choose-university">
          Change Pathway
        </Link>
        {saveMessage && <p className="save-message">{saveMessage}</p>}
      </section>

      <section className="semester-grid">
        {plan.semesters.map((semester) => (
          <article className="semester-card" key={semester.id}>
            <div className="semester-card-header">
              <div>
                <p className="eyebrow">{semester.focus}</p>
                <h2>{semester.label}</h2>
              </div>
              <span>
                {semester.courses.reduce((total, course) => total + course.credits, 0)} credits
              </span>
            </div>

            <div className="course-list">
              {semester.courses.map((course) => (
                <label className="course-row" key={course.code}>
                  <input
                    type="checkbox"
                    checked={completedCourses.includes(course.code)}
                    onChange={() => toggleCourse(course.code)}
                  />
                  <span className="course-main">
                    <strong>{course.code}</strong>
                    <span>{course.title}</span>
                  </span>
                  <span className="course-meta">
                    {course.type} | {course.credits} cr
                  </span>
                </label>
              ))}
            </div>
          </article>
        ))}
      </section>

      <GAARequirements
        nvccProgram={nvccProgram}
        catalogYear={catalogYear}
        transferSchool={transferSchool}
        transferMajor={transferMajor}
      />
    </main>
  );
}

export default ScheduleBuilder;
