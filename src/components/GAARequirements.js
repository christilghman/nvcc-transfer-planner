import { getGAARequirements } from "../data/gaaRequirements";
import { transferSchools } from "../data/schools";

function GAARequirements({ nvccProgram, catalogYear, transferSchool, transferMajor }) {
  const school = transferSchools[transferSchool];
  const requirements = getGAARequirements({
    nvccProgram,
    catalogYear,
    transferSchool,
    transferMajor
  });

  if (!requirements) {
    return (
      <section className="requirements-panel">
        <h2>Guaranteed admission requirements</h2>
        <p>No GAA requirements are available for this pathway yet.</p>
      </section>
    );
  }

  return (
    <section className="requirements-panel">
      <div>
        <p className="eyebrow">Guaranteed admission agreement</p>
        <h2>{school.name}</h2>
      </div>

      <div className="requirement-stats">
        <div>
          <span>{requirements.gpaMinimum}</span>
          <p>Minimum GPA</p>
        </div>
        <div>
          <span>{requirements.minimumCredits}</span>
          <p>Minimum credits</p>
        </div>
        <div>
          <span>{requirements.noGradeBelow}</span>
          <p>No grade below</p>
        </div>
      </div>

      <div className="requirements-grid">
        <div>
          <h3>Required courses</h3>
          <ul>
            {requirements.requiredCourses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3>General education areas</h3>
          <ul>
            {Object.entries(requirements.generalEducationAreas).map(([area, count]) => (
              <li key={area}>
                {area}: {count} course{count === 1 ? "" : "s"}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Notes</h3>
          <ul>
            {requirements.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default GAARequirements;
