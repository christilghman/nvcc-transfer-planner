import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import GAARequirements from "../components/GAARequirements";
import { transferSchools } from "../data/schools";
import { getTransferPathway } from "../data/transferPathways";
import { plansApi } from "../services/plansApi";

const DRAFT_KEY = "nova-transfer-planner-draft";
const SAVE_RETRY_DELAY_MS = 700;

function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

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
  const [draftPlanId, setDraftPlanId] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const isSavingRef = useRef(false);

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
        setDraftPlanId(savedDraft.planId || "");
      }
    } catch {
      setCompletedCourses([]);
      setDraftPlanId("");
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

  const syncDraftToAws = async (draft) => {
    if (draftPlanId) {
      return plansApi.update(draftPlanId, draft);
    }

    return plansApi.create(draft);
  };

  const handleSaveDraft = async () => {
    if (isSavingRef.current) {
      return;
    }

    isSavingRef.current = true;
    setIsSaving(true);

    const draft = {
      planId: draftPlanId || undefined,
      selection: { nvccProgram, catalogYear, transferSchool, transferMajor },
      completedCourses,
      savedAt: new Date().toISOString()
    };

    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    setSaveMessage("Saved on this device. Syncing to AWS...");

    try {
      let savedPlan;

      try {
        savedPlan = await syncDraftToAws(draft);
      } catch {
        await wait(SAVE_RETRY_DELAY_MS);
        savedPlan = await syncDraftToAws(draft);
      }

      const syncedDraft = {
        ...draft,
        planId: savedPlan.planId
      };

      localStorage.setItem(DRAFT_KEY, JSON.stringify(syncedDraft));
      setDraftPlanId(savedPlan.planId);
      setSaveMessage("Saved on this device and synced to AWS.");
    } catch {
      setSaveMessage("Saved on this device. AWS sync is unavailable right now.");
    } finally {
      isSavingRef.current = false;
      setIsSaving(false);
    }
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
        <button className="primary-button" disabled={isSaving} onClick={handleSaveDraft}>
          {isSaving ? "Saving..." : "Save Draft"}
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
                    {course.transferPriority && (
                      <span className="priority-pill">{course.transferPriority}</span>
                    )}
                  </span>
                </label>
              ))}
            </div>
          </article>
        ))}
      </section>

      {plan.transferRoadmap && <TransferRoadmap plan={plan} />}
      {plan.sourceDocuments && <SourceDocuments documents={plan.sourceDocuments} />}

      <GAARequirements
        nvccProgram={nvccProgram}
        catalogYear={catalogYear}
        transferSchool={transferSchool}
        transferMajor={transferMajor}
      />
    </main>
  );
}

function TransferRoadmap({ plan }) {
  const categories = [
    ["Required", plan.transferRoadmap.required],
    ["Strongly Recommended", plan.transferRoadmap.stronglyRecommended],
    ["Recommended", plan.transferRoadmap.recommended]
  ];

  return (
    <section className="roadmap-panel">
      <div>
        <p className="eyebrow">Transfer roadmap priorities</p>
        <h2>{plan.transferCollege || "Transfer"} course priorities</h2>
        <p>
          These items come from the destination university sources and help
          explain which NVCC classes and requirements matter most for transfer readiness.
        </p>
      </div>

      <div className="roadmap-grid">
        {categories.map(([label, courses]) => (
          <article key={label}>
            <h3>{label}</h3>
            <ul>
              {courses.map((course) => (
                <li key={`${label}-${course.vtCourse}-${course.nvccCourse}`}>
                  <strong>{course.nvccCourse}</strong>
                  <span>{course.title}</span>
                  <small>Destination: {course.vtCourse}</small>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function SourceDocuments({ documents }) {
  return (
    <section className="source-panel">
      <p className="eyebrow">Source documents used</p>
      <div className="source-list">
        {documents.map((document) => (
          <article key={`${document.type}-${document.label}`}>
            <h3>{document.label}</h3>
            <p>
              {document.type}
              {document.year ? ` | ${document.year}` : ""}
            </p>
            {document.url && (
              <a className="source-link" href={document.url} rel="noreferrer" target="_blank">
                Open Source
              </a>
            )}
            {document.note && <p>{document.note}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

export default ScheduleBuilder;
