"use client";
import React from "react";

const CaseStudies = () => {
  return (
    <section className="section">
      <div className="section-head">
        <div>
          <div className="mono">07 / Selected case notes</div>
          <h2>
            How the<br />
            <span className="outline">work works.</span>
          </h2>
        </div>
        <p className="section-intro">
          A portfolio should show not only what was built, but what kind of engineering decisions were involved.
        </p>
      </div>
      <div className="case-grid">
        <article className="case">
          <div className="case-num">CASE 01 / SCALE + PRODUCT</div>
          <h3>From feature requests to complete workflows.</h3>
          <p>
            In product environments like BIAPay, a screen is rarely an isolated frontend task. A feature can touch permissions, APIs, validation, authentication, database state, error handling and multiple user roles. I approach the interface as part of that complete workflow.
          </p>
          <div className="case-stack">ROLE-BASED ACCESS · API INTEGRATION · STATE · VALIDATION · EDGE CASES</div>
        </article>

        <article className="case">
          <div className="case-num">CASE 02 / 0 → 1</div>
          <h3>Build the smallest useful version, then learn.</h3>
          <p>
            For products such as OmniTutor and freelance builds, speed matters. I prefer getting a real user-facing version into the hands of people quickly, then using feedback and observed behavior to decide what deserves deeper engineering.
          </p>
          <div className="case-stack">MVP · ITERATION · USER FEEDBACK · PRODUCT SENSE</div>
        </article>

        <article className="case">
          <div className="case-num">CASE 03 / PERFORMANCE</div>
          <h3>Performance is a product feature.</h3>
          <p>
            At Sheshya, the work extended beyond UI delivery into API and database performance. That experience shaped how I think about frontend speed: a fast interface depends on the systems behind it, not only the pixels in the browser.
          </p>
          <div className="case-stack">API PERFORMANCE · DATABASE QUERIES · LARGE DATASETS</div>
        </article>

        <article className="case">
          <div className="case-num">CASE 04 / AI EVALUATION</div>
          <h3>AI output needs verification.</h3>
          <p>
            Model-training and terminal-benchmarking work reinforced a simple engineering principle: an implementation that looks plausible is not necessarily correct. The environment, commands, tests, edge cases and final state all matter.
          </p>
          <div className="case-stack">CLI · DEBUGGING · VALIDATION · BENCHMARKING</div>
        </article>
      </div>
    </section>
  );
};

export default CaseStudies;
