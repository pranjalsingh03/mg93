"use client";
import React from "react";

const AiEval = () => {
  return (
    <section className="section" id="ai">
      <div className="section-head">
        <div>
          <div className="mono">05 / Work beyond product development</div>
          <h2>
            AI ×<br />
            <span className="outline">Evaluation</span>
          </h2>
        </div>
        <p className="section-intro">
          I have also worked freelance-style on model-training and terminal-benchmarking tasks, bringing software-engineering experience into AI evaluation.
        </p>
      </div>
      <div className="ai-strip">
        <div className="ai-copy">
          <div className="mono">Model training / software engineering / terminal benchmarking</div>
          <h3>Not only building software. Testing whether AI can build it.</h3>
          <p>
            This work involved completing or evaluating software-engineering tasks in controlled environments — including frontend implementation, debugging, command-line workflows and Linux-based terminal tasks. The important part was not simply producing an answer; it was checking whether the implementation actually satisfied the task, handling edge cases and validating the final state.
          </p>
          <div className="detail">
            Typical loop → understand the task → inspect the environment → implement or reproduce the change → run commands/tests → inspect the result → identify failures → verify the final state.
          </div>
          <div className="ai-meta">
            <span className="tag">Software Engineering</span>
            <span className="tag">Frontend</span>
            <span className="tag">Linux / CLI</span>
            <span className="tag">Terminal Benchmarks</span>
            <span className="tag">Model Training</span>
            <span className="tag">Evaluation</span>
          </div>
        </div>
        <div className="ai-visual">
          <div className="terminal">
            <div className="terminal-head">
              <i aria-hidden="true" />
              <i aria-hidden="true" />
              <i aria-hidden="true" />
            </div>
            <div className="terminal-body">
              <span className="green">$</span> benchmark --task software_engineering<br />
              <span className="blue">→</span> environment initialized<br />
              <span className="green">✓</span> inspect repository<br />
              <span className="green">✓</span> reproduce task<br />
              <span className="green">✓</span> implement change<br />
              <span className="red">!</span> edge case detected<br />
              <span className="green">✓</span> run validation<br />
              <span className="green">✓</span> verify final state<br />
              <br />
              <span className="blue">result:</span> evaluated / validated
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiEval;
