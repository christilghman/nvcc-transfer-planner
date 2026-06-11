import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div>
          <p className="eyebrow">Built for NVCC transfer students</p>
          <h1>NOVA Transfer Planner</h1>
          <p>
            Map associate degree courses to four-year transfer pathways before
            signup ever gets in the way.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/choose-university">
              Start Planning
            </Link>
            <Link className="secondary-button" to="/schedule-builder">
              Open Saved Draft
            </Link>
          </div>
        </div>
      </section>

      <section className="feature-strip">
        <article>
          <span>1</span>
          <h2>Pick a pathway</h2>
          <p>Choose a transfer university, major, and catalog year.</p>
        </article>
        <article>
          <span>2</span>
          <h2>Track courses</h2>
          <p>Check off completed NVCC courses and see remaining credits.</p>
        </article>
        <article>
          <span>3</span>
          <h2>Save when ready</h2>
          <p>Keep browsing as a guest, then save only when it helps.</p>
        </article>
      </section>
    </main>
  );
}

export default HomePage;
