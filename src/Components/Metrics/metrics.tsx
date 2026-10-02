"use client";
import React, { useRef } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";

const metrics = [
  { cls: "metric-users", to: 100000, suffix: "+", label: "Users served on e-banking platforms built from scratch" },
  { cls: "metric-hours", to: 900, suffix: "+ Hrs", label: "Coded on WakaTime (Top 4% of 5 Lakh+ developers worldwide)" },
  { cls: "metric-streak", to: 483, suffix: " Days", label: "Continuous active GitHub streak shipping code daily" },
  { cls: "metric-learners", to: 800, suffix: "+", label: "Active learners reached in 15 days on OmniTutor (+35% retention)" },
];

// Each number counts with the scroll (and back down when scrolling up), staggered across the row
const Metric = ({ progress, i, m }: { progress: MotionValue<number>; i: number; m: (typeof metrics)[number] }) => {
  const start = i * 0.14;
  const end = start + 0.5;
  const value = useTransform(progress, [start, end], [0, m.to]);
  const text = useTransform(value, (v) => `${Math.round(v).toLocaleString("en-IN")}${m.suffix}`);
  const y = useTransform(progress, [start, start + 0.25], [70, 0]);
  const opacity = useTransform(progress, [start, start + 0.2], [0.15, 1]);
  const bar = useTransform(progress, [start, end], [0, 1]);

  return (
    <motion.div className={`metric ${m.cls}`} style={{ y, opacity }}>
      <motion.b>{text}</motion.b>
      <span>{m.label}</span>
      <motion.i className="metric-bar" style={{ scaleX: bar }} aria-hidden="true" />
    </motion.div>
  );
};

const Metrics = () => {
  const ref = useRef<HTMLDivElement>(null);
  // On wide screens the row pins while the numbers run; elsewhere it plays as the row scrolls past
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.4 });

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
      <div className="metrics-pin" ref={ref}>
        <div className="metrics">
          {metrics.map((m, i) => (
            <Metric key={m.cls} progress={progress} i={i} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
