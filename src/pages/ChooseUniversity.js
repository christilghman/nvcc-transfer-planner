import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { catalogYears } from "../data/catalogYears";
import { nvccPrograms } from "../data/programs";
import { transferSchools } from "../data/schools";
import {
  getAvailableCatalogYears,
  getAvailableSchools,
  getAvailableTransferMajors,
  getTransferPathway
} from "../data/transferPathways";

function ChooseUniversity() {
  const [nvccProgram, setNvccProgram] = useState("");
  const [catalogYear, setCatalogYear] = useState("");
  const [transferSchool, setTransferSchool] = useState("");
  const [transferMajor, setTransferMajor] = useState("");
  const [programSearch, setProgramSearch] = useState("");
  const [transferMajorSearch, setTransferMajorSearch] = useState("");
  const navigate = useNavigate();

  const programOptions = Object.entries(nvccPrograms).map(([programId, program]) => ({
    id: programId,
    degree: program.degree,
    isAvailable: getAvailableCatalogYears(programId).length > 0,
    name: program.name
  }));
  const filteredPrograms = filterOptions(programOptions, programSearch, ["name", "degree"]);

  const availableCatalogYears = getAvailableCatalogYears(nvccProgram);
  const availableSchools = getAvailableSchools(nvccProgram, catalogYear);
  const availableTransferMajors = getAvailableTransferMajors(
    nvccProgram,
    catalogYear,
    transferSchool
  );
  const selectedPathway = getTransferPathway({
    nvccProgram,
    catalogYear,
    transferSchool,
    transferMajor
  });
  const transferMajorOptions = availableTransferMajors.map((majorId) => {
    const pathway = getTransferPathway({
      nvccProgram,
      catalogYear,
      transferSchool,
      transferMajor: majorId
    });

    return {
      id: majorId,
      degree: pathway.transferDegree,
      name: pathway.transferMajorName,
      totalCredits: pathway.totalCredits
    };
  });
  const filteredTransferMajors = filterOptions(
    transferMajorOptions,
    transferMajorSearch,
    ["name", "degree"]
  );

  const selectProgram = (programId) => {
    setNvccProgram(programId);
    setCatalogYear("");
    setTransferSchool("");
    setTransferMajor("");
    setTransferMajorSearch("");
  };

  const selectCatalogYear = (year) => {
    setCatalogYear(year);
    setTransferSchool("");
    setTransferMajor("");
    setTransferMajorSearch("");
  };

  const selectSchool = (schoolId) => {
    setTransferSchool(schoolId);
    setTransferMajor("");
    setTransferMajorSearch("");
  };

  const handleContinue = () => {
    navigate("/schedule-builder", {
      state: { nvccProgram, catalogYear, transferSchool, transferMajor }
    });
  };

  return (
    <main className="page-shell">
      <section className="page-heading">
        <p className="eyebrow">Transfer pathway builder</p>
        <h1>Build your pathway step by step.</h1>
        <p>
          Pick your NVCC program, catalog year, transfer school, and intended major.
          Only verified pathway combinations become available.
        </p>
      </section>

      <section className="pathway-builder">
        <BuilderStep
          number="1"
          title="Choose your NVCC program"
          helper="Start with the associate program you are following."
        >
          <SearchableChoiceSection
            label="Search NVCC programs"
            onSearchChange={setProgramSearch}
            placeholder="Search business, computer science, psychology..."
            searchValue={programSearch}
          >
            {filteredPrograms.length > 0 ? (
              <div className="choice-grid program-choice-grid">
                {filteredPrograms.map((program) => (
                  <ChoiceCard
                    key={program.id}
                    active={nvccProgram === program.id}
                    disabled={!program.isAvailable}
                    eyebrow={program.degree}
                    title={program.name}
                    meta={program.isAvailable ? "Pathway data available" : "Roadmap pending"}
                    onClick={() => selectProgram(program.id)}
                  />
                ))}
              </div>
            ) : (
              <SearchEmptyMessage message="No NVCC programs match your search." />
            )}
          </SearchableChoiceSection>
        </BuilderStep>

        <BuilderStep
          number="2"
          title="Select catalog year"
          helper="Catalog year matters because course requirements can change."
          locked={!nvccProgram}
        >
          <div className="year-picker" role="group" aria-label="Catalog year">
            {catalogYears.map((year) => {
              const isAvailable = availableCatalogYears.includes(year);

              return (
                <button
                  className={`year-option ${catalogYear === year ? "is-active" : ""}`}
                  disabled={!isAvailable}
                  key={year}
                  onClick={() => selectCatalogYear(year)}
                  type="button"
                >
                  <span>{year}</span>
                  <small>{isAvailable ? "Available" : "Pending"}</small>
                </button>
              );
            })}
          </div>
        </BuilderStep>

        <BuilderStep
          number="3"
          title="Choose transfer university"
          helper="Schools appear when we have a verified pathway for your program and catalog year."
          locked={!catalogYear}
        >
          {availableSchools.length > 0 ? (
            <div className="choice-grid school-choice-grid">
              {availableSchools.map((schoolId) => (
                <ChoiceCard
                  key={schoolId}
                  active={transferSchool === schoolId}
                  eyebrow={transferSchools[schoolId].shortName}
                  title={transferSchools[schoolId].name}
                  meta="Verified pathway"
                  onClick={() => selectSchool(schoolId)}
                />
              ))}
            </div>
          ) : (
            <EmptyStepMessage />
          )}
        </BuilderStep>

        <BuilderStep
          number="4"
          title="Choose intended transfer major"
          helper="This is the destination major or school-level pathway the plan is built around."
          locked={!transferSchool}
        >
          {availableTransferMajors.length > 0 ? (
            <SearchableChoiceSection
              label="Search transfer majors"
              onSearchChange={setTransferMajorSearch}
              placeholder="Search computer science, engineering, business..."
              searchValue={transferMajorSearch}
            >
              {filteredTransferMajors.length > 0 ? (
                <div className="choice-grid major-choice-grid">
                  {filteredTransferMajors.map((major) => (
                    <ChoiceCard
                      key={major.id}
                      active={transferMajor === major.id}
                      eyebrow={major.degree}
                      title={major.name}
                      meta={`${major.totalCredits} planned credits`}
                      onClick={() => setTransferMajor(major.id)}
                    />
                  ))}
                </div>
              ) : (
                <SearchEmptyMessage message="No transfer majors match your search." />
              )}
            </SearchableChoiceSection>
          ) : (
            <EmptyStepMessage />
          )}
        </BuilderStep>

        {selectedPathway && (
          <section className="pathway-preview">
            <div>
              <p className="eyebrow">Selected transfer pathway</p>
              <h2>{selectedPathway.title}</h2>
              <p>
                {selectedPathway.nvccProgramName} | {selectedPathway.totalCredits} planned credits
              </p>
            </div>
            <button className="primary-button" onClick={handleContinue}>
              Build Plan
            </button>
          </section>
        )}
      </section>
    </main>
  );
}

function SearchableChoiceSection({
  children,
  label,
  onSearchChange,
  placeholder,
  searchValue
}) {
  return (
    <div className="searchable-choice-section">
      <label className="search-field">
        <span>{label}</span>
        <input
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={placeholder}
          type="search"
          value={searchValue}
        />
      </label>
      {children}
    </div>
  );
}

function BuilderStep({ number, title, helper, locked = false, children }) {
  return (
    <section className={`builder-step ${locked ? "is-locked" : ""}`}>
      <div className="builder-step-header">
        <span>{number}</span>
        <div>
          <h2>{title}</h2>
          <p>{locked ? "Complete the previous step to unlock this section." : helper}</p>
        </div>
      </div>
      {!locked && children}
    </section>
  );
}

function ChoiceCard({ active = false, disabled = false, eyebrow, title, meta, onClick }) {
  return (
    <button
      className={`choice-card ${active ? "is-active" : ""}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <span>{eyebrow}</span>
      <strong>{title}</strong>
      <small>{meta}</small>
    </button>
  );
}

function SearchEmptyMessage({ message }) {
  return <div className="search-empty">{message}</div>;
}

function EmptyStepMessage() {
  return (
    <div className="notice">
      This combination is on the roadmap. Try Computer Science with catalog year
      2026-2027 to see the newest verified pathways.
    </div>
  );
}

function filterOptions(options, searchValue, keys) {
  const normalizedSearch = searchValue.trim().toLowerCase();

  if (!normalizedSearch) {
    return options;
  }

  return options.filter((option) =>
    keys.some((key) => option[key].toLowerCase().includes(normalizedSearch))
  );
}

export default ChooseUniversity;
