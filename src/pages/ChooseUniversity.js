import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { catalogYears } from "../data/catalogYears";
import { nvccPrograms } from "../data/programs";
import { transferSchools } from "../data/schools";
import {
  getAvailableSchools,
  getAvailableTransferMajors,
  getTransferPathway
} from "../data/transferPathways";

function ChooseUniversity() {
  const [nvccProgram, setNvccProgram] = useState("");
  const [catalogYear, setCatalogYear] = useState("");
  const [transferSchool, setTransferSchool] = useState("");
  const [transferMajor, setTransferMajor] = useState("");
  const navigate = useNavigate();

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

  const handleProgramChange = (event) => {
    setNvccProgram(event.target.value);
    setTransferSchool("");
    setTransferMajor("");
  };

  const handleCatalogChange = (event) => {
    setCatalogYear(event.target.value);
    setTransferSchool("");
    setTransferMajor("");
  };

  const handleSchoolChange = (event) => {
    setTransferSchool(event.target.value);
    setTransferMajor("");
  };

  const handleMajorChange = (event) => {
    setTransferMajor(event.target.value);
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
        <h1>Start with your NVCC pathway.</h1>
        <p>
          Choose your current program and catalog year first, then match it to a
          transfer school and intended bachelor&apos;s major.
        </p>
      </section>

      <section className="planner-panel">
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="nvcc-program">NVCC program</label>
            <select id="nvcc-program" value={nvccProgram} onChange={handleProgramChange}>
              <option value="">Choose program</option>
              {Object.entries(nvccPrograms).map(([id, program]) => (
                <option key={id} value={id}>
                  {program.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="catalog-year">Catalog year</label>
            <select
              id="catalog-year"
              value={catalogYear}
              onChange={handleCatalogChange}
              disabled={!nvccProgram}
            >
              <option value="">Choose catalog</option>
              {catalogYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="transfer-school">Transfer university</label>
            <select
              id="transfer-school"
              value={transferSchool}
              onChange={handleSchoolChange}
              disabled={!catalogYear}
            >
              <option value="">Choose university</option>
              {availableSchools.map((schoolId) => (
                <option key={schoolId} value={schoolId}>
                  {transferSchools[schoolId].name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="transfer-major">Transfer major</label>
            <select
              id="transfer-major"
              value={transferMajor}
              onChange={handleMajorChange}
              disabled={!transferSchool}
            >
              <option value="">Choose major</option>
              {availableTransferMajors.map((majorId) => {
                const pathway = getTransferPathway({
                  nvccProgram,
                  catalogYear,
                  transferSchool,
                  transferMajor: majorId
                });

                return (
                  <option key={majorId} value={majorId}>
                    {pathway.transferMajorName}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {nvccProgram && catalogYear && availableSchools.length === 0 && (
          <div className="notice">
            This program and catalog year are on the roadmap. Start with Computer
            Science for catalog year 2024-2025 while more transfer pathways are added.
          </div>
        )}

        {selectedPathway && (
          <div className="pathway-preview">
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
          </div>
        )}
      </section>
    </main>
  );
}

export default ChooseUniversity;
