"use client";
import React from "react";

const Process = () => {
  return (
    <section className="section">
      <div className="section-head">
        <div>
          <div className="mono">08 / Working style</div>
          <h2>
            Build.<br />
            <span className="outline">Ship.</span><br />
            Learn.
          </h2>
        </div>
        <p className="section-intro">
          My preferred workflow is direct, iterative and practical — enough structure to avoid chaos, but not so much process that shipping becomes the bottleneck.
        </p>
      </div>
      <div className="process">
        <article className="process-step-1">
          <div className="num">01 / UNDERSTAND</div>
          <h3>Get close to the problem.</h3>
          <p>Understand the user, workflow, constraints and what “done” actually means before turning everything into tickets.</p>
        </article>
        <article className="process-step-2">
          <div className="num">02 / BUILD</div>
          <h3>Make the first version real.</h3>
          <p>Move quickly from architecture and interface decisions to a working implementation that can be tested in the real world.</p>
        </article>
        <article className="process-step-3">
          <div className="num">03 / VERIFY</div>
          <h3>Break what you built.</h3>
          <p>Test edge cases, APIs, permissions, states and failure paths. Debug until the product behaves correctly, not just visually.</p>
        </article>
        <article className="process-step-4">
          <div className="num">04 / ITERATE</div>
          <h3>Improve what matters.</h3>
          <p>Use feedback, metrics and engineering signals to decide what to polish, simplify, scale or rebuild next.</p>
        </article>
      </div>
    </section>
  );
};

export default Process;
