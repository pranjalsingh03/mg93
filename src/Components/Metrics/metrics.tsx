"use client";
import React from "react";

const Metrics = () => {
  return (
    <section className="section">
      <div className="section-head">
        <div>
          <div className="mono">04 / Evidence &amp; Engineering Activity</div>
          <h2>
            Numbers<br />
            <span className="outline">matter.</span>
          </h2>
        </div>
        <p className="section-intro">
          Concrete signals from production user scale, WakaTime coding benchmarks, continuous GitHub activity, and application performance.
        </p>
      </div>
      <div className="metrics">
        <div className="metric">
          <b>1 Lakh+</b>
          <span>Users served on e-banking platforms built from scratch</span>
        </div>
        <div className="metric">
          <b>900+ Hrs</b>
          <span>Coded on WakaTime (Top 4% of 5 Lakh+ developers worldwide)</span>
        </div>
        <div className="metric">
          <b>483 Days</b>
          <span>Continuous active GitHub streak shipping code daily</span>
        </div>
        <div className="metric">
          <b>800+</b>
          <span>Active learners reached in 15 days on OmniTutor (+35% retention)</span>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
