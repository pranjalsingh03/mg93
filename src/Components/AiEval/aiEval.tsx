"use client";
import React, { useRef, useState } from "react";
import { motion, MotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";

const lines: { mark: string; tone: string; text: string; gap?: boolean }[] = [
  { mark: "$", tone: "green", text: "benchmark --task software_engineering" },
  { mark: "→", tone: "blue", text: "environment initialized" },
  { mark: "✓", tone: "green", text: "inspect repository" },
  { mark: "✓", tone: "green", text: "reproduce task" },
  { mark: "✓", tone: "green", text: "implement change" },
  { mark: "!", tone: "red", text: "edge case detected" },
  { mark: "✓", tone: "green", text: "run validation" },
  { mark: "✓", tone: "green", text: "verify final state" },
  { mark: "result:", tone: "blue", text: "evaluated / validated", gap: true },
];

// One terminal line, typed out across its slice of the scroll range
const Line = ({ progress, i, line }: { progress: MotionValue<number>; i: number; line: (typeof lines)[number] }) => {
  const start = 0.08 + (i / lines.length) * 0.8;
  const end = start + 0.8 / lines.length;
  const opacity = useTransform(progress, [start, start + 0.01], [0, 1]);
  const clipPath = useTransform(progress, [start, end], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
  const last = i === lines.length - 1;

  return (
    <motion.span className={`t-line ${line.gap ? "t-gap" : ""}`} style={{ opacity, clipPath }}>
      <span className={line.tone}>{line.mark}</span> {line.text}
      {last && <i className="t-caret" aria-hidden="true" />}
    </motion.span>
  );
};

const AiEval = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(0);
  // On wide screens the strip pins while the benchmark "runs"; elsewhere it plays as it scrolls past
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  useMotionValueEvent(progress, "change", (p) => setPercent(Math.round(Math.min(1, Math.max(0, (p - 0.08) / 0.8)) * 100)));

  const copyY = useTransform(progress, [0, 1], [40, -20]);
  const termRotate = useTransform(progress, [0, 0.25], [16, 0]);
  const termScale = useTransform(progress, [0, 0.25], [0.9, 1]);
  const termY = useTransform(progress, [0, 0.25], [60, 0]);
  const barScale = useTransform(progress, [0.08, 0.88], [0, 1]);

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
      <div className="ai-pin" ref={ref}>
        <div className="ai-strip">
          <motion.div className="ai-copy" style={{ y: copyY }}>
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
          </motion.div>
          <div className="ai-visual">
            <motion.div
              className="terminal"
              style={{ rotateX: termRotate, scale: termScale, y: termY, transformPerspective: 900 }}
            >
              <div className="terminal-head">
                <i aria-hidden="true" />
                <i aria-hidden="true" />
                <i aria-hidden="true" />
                <span className="terminal-status mono">{percent < 100 ? `running… ${percent}%` : "done ✓"}</span>
              </div>
              <div className="terminal-progress" aria-hidden="true">
                <motion.span style={{ scaleX: barScale }} />
              </div>
              <div className="terminal-body">
                {lines.map((line, i) => (
                  <Line key={line.text} progress={progress} i={i} line={line} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiEval;
