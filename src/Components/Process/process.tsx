"use client";
import React, { useRef } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";

const steps = [
  {
    num: "01 / UNDERSTAND",
    title: "Get close to the problem.",
    body: "Understand the user, workflow, constraints and what “done” actually means before turning everything into tickets.",
  },
  {
    num: "02 / BUILD",
    title: "Make the first version real.",
    body: "Move quickly from architecture and interface decisions to a working implementation that can be tested in the real world.",
  },
  {
    num: "03 / VERIFY",
    title: "Break what you built.",
    body: "Test edge cases, APIs, permissions, states and failure paths. Debug until the product behaves correctly, not just visually.",
  },
  {
    num: "04 / ITERATE",
    title: "Improve what matters.",
    body: "Use feedback, metrics and engineering signals to decide what to polish, simplify, scale or rebuild next.",
  },
];

// Each step lights up in turn as the scroll passes its quarter of the sequence
const Step = ({ progress, i, step }: { progress: MotionValue<number>; i: number; step: (typeof steps)[number] }) => {
  const start = i / steps.length;
  const end = (i + 0.7) / steps.length;
  const opacity = useTransform(progress, [start, end], [0.22, 1]);
  const y = useTransform(progress, [start, end], [50, 0]);
  const glow = useTransform(progress, [start, end, end + 0.15], [0, 1, 0.35]);

  return (
    <motion.article className={`process-step-${i + 1}`} style={{ opacity, y }}>
      <motion.span className="process-glow" style={{ opacity: glow }} aria-hidden="true" />
      <div className="num">{step.num}</div>
      <h3>{step.title}</h3>
      <p>{step.body}</p>
    </motion.article>
  );
};

const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  // On wide screens the steps pin while this runs; elsewhere it plays as the grid scrolls past
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.4 });
  const lineScale = useTransform(progress, [0, 0.9], [0, 1]);

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
      <div className="process-pin" ref={ref}>
        <div className="process">
          <motion.span className="process-line" style={{ scaleX: lineScale }} aria-hidden="true" />
          {steps.map((step, i) => (
            <Step key={step.num} progress={progress} i={i} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
