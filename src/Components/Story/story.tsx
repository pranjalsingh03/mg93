"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";

interface Chapter {
  tick: string;
  label: string;
  title: string;
  body: string;
  value: number;
  suffix?: string;
  display?: string;
  unit: string;
  facts: { v: string; l: string }[];
  stack: string[];
  ghost: string;
  accent: string;
  cta?: { text: string; href: string };
}

const chapters: Chapter[] = [
  {
    tick: "2022",
    label: "The first node",
    title: "One laptop. One line of code.",
    body: "Started B.Tech in Computer Science at Lovely Professional University — and decided to learn by shipping, not just studying.",
    value: 1,
    unit: "laptop, one terminal",
    facts: [
      { v: "CSE", l: "B.Tech major" },
      { v: "LPU", l: "Lovely Professional University" },
      { v: "2022–26", l: "Degree timeline" },
    ],
    stack: ["Git", "C++", "Python"],
    ghost: "CURIOSITY",
    accent: "var(--cyan)",
  },
  {
    tick: "DAILY",
    label: "The habit",
    title: "Show up. Ship code. Every day.",
    body: "Turned coding into a daily discipline — an unbroken GitHub streak and hundreds of tracked hours, benchmarked against developers worldwide.",
    value: 483,
    unit: "day GitHub streak",
    facts: [
      { v: "900+ hrs", l: "Logged on WakaTime" },
      { v: "Top 4%", l: "Of 5 Lakh+ developers" },
      { v: "0", l: "Days the streak broke" },
    ],
    stack: ["GitHub", "WakaTime", "Linux / CLI"],
    ghost: "CONSISTENCY",
    accent: "var(--lime)",
  },
  {
    tick: "2024",
    label: "Founding team",
    title: "From scripts to systems.",
    body: "Joined Sheshya AI's founding engineering team — Flutter agent apps, a React admin suite and the APIs and infrastructure behind them.",
    value: 100,
    suffix: "+",
    unit: "REST APIs designed",
    facts: [
      { v: "50+", l: "React admin pages" },
      { v: "10+", l: "Dockerized services" },
      { v: "−30%", l: "Avg API response time" },
    ],
    stack: ["Flutter", "React", "Node.js", "Docker", "GCP"],
    ghost: "SYSTEMS",
    accent: "var(--violet)",
  },
  {
    tick: "2025",
    label: "Zero to one",
    title: "Launch, listen, iterate.",
    body: "Built OmniTutor end to end — real-time AI voice and video over WebRTC — then iterated every week on what learners actually did.",
    value: 800,
    suffix: "+",
    unit: "learners in 15 days",
    facts: [
      { v: "15 days", l: "To 800+ learners" },
      { v: "+35%", l: "30-day retention" },
      { v: "Weekly", l: "Feedback-driven releases" },
    ],
    stack: ["Next.js", "WebRTC", "WebSockets", "AI middleware"],
    ghost: "LAUNCH",
    accent: "var(--blue)",
  },
  {
    tick: "LAB",
    label: "The lab",
    title: "Products, not just projects.",
    body: "Shipped live side products — OneCast for one-tap ads across Google, Meta and LinkedIn, TaskFlow AI for meeting-to-task automation, and a real-time interview room.",
    value: 88,
    suffix: "%",
    unit: "less post-meeting busywork",
    facts: [
      { v: "3 → 1", l: "Ad platforms, one flow" },
      { v: "25 → 3 min", l: "Meeting task setup" },
      { v: "Live", l: "Apify + Apollo.io pipelines" },
    ],
    stack: ["Flutter", "OpenAI", "Apify", "Apollo.io", "WebRTC"],
    ghost: "AUTOMATION",
    accent: "var(--red)",
  },
  {
    tick: "EVAL",
    label: "AI × evaluation",
    title: "Testing whether AI can build it.",
    body: "Model-training and terminal-benchmarking work: implement, run the tests, chase the edge cases — and never trust output that only looks right.",
    value: 7,
    unit: "step verification loop",
    facts: [
      { v: "Linux / CLI", l: "Terminal benchmarks" },
      { v: "Edge cases", l: "Detected, not ignored" },
      { v: "Final state", l: "Always verified" },
    ],
    stack: ["Software engineering", "Debugging", "Benchmarking"],
    ghost: "VERIFY",
    accent: "var(--cyan)",
  },
  {
    tick: "NOW",
    label: "Scale",
    title: "Bank-grade, at scale.",
    body: "Designed BIAPay's e-banking platform from scratch — dynamic RBAC, audit-ready security, KYC workflows — now live for banking partners.",
    value: 100000,
    suffix: "+",
    unit: "users served",
    facts: [
      { v: "100+", l: "Secure UI screens" },
      { v: "85%+", l: "Jest test coverage" },
      { v: "Unlimited", l: "User-defined roles" },
    ],
    stack: ["React", "Flutter", "Dynamic RBAC", "KYC", "2FA"],
    ghost: "SCALE",
    accent: "var(--lime)",
  },
  {
    tick: "NEXT",
    label: "What's next",
    title: "Your product could be the next chapter.",
    body: "Looking for teams building ambitious web, mobile or AI products who need someone to own the path from rough requirements to production.",
    value: 0,
    display: "You?",
    unit: "the next node",
    facts: [
      { v: "Remote", l: "Based in India" },
      { v: "Full stack", l: "Web · mobile · AI" },
      { v: "Open", l: "To selected work" },
    ],
    stack: ["Forward deployed", "0 → 1", "Production-ready"],
    ghost: "NEXT",
    accent: "var(--lime)",
    cta: { text: "Let's talk ↗", href: "#contact" },
  },
];

// Deterministic PRNG so server and client render the same network
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// New nodes unlocked per chapter, each chapter growing in a wider ring
const NODES_PER_CHAPTER = [1, 5, 7, 9, 9, 8, 12, 6];
const RING_RADIUS = [0, 12, 18, 25, 31, 36, 42, 48];
const LINK_DIST = 19;

const round = (n: number) => Math.round(n * 100) / 100;

function buildNetwork() {
  const rand = seeded(93);
  const nodes: { x: number; y: number; r: number; ch: number }[] = [{ x: 50, y: 50, r: 2.6, ch: 0 }];
  NODES_PER_CHAPTER.slice(1).forEach((n, idx) => {
    const ch = idx + 1;
    for (let i = 0; i < n; i++) {
      const angle = rand() * Math.PI * 2;
      const dist = RING_RADIUS[ch] * (0.7 + rand() * 0.3);
      // Rounded so server and browser trig output can't differ in the last digit
      nodes.push({
        x: round(50 + Math.cos(angle) * dist),
        y: round(50 + Math.sin(angle) * dist * 0.85),
        r: round(0.7 + rand() * (ch < 3 ? 1.2 : 0.8)),
        ch,
      });
    }
  });
  const links: { a: number; b: number; ch: number; len: number }[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const len = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
      if (len < LINK_DIST || (i === 0 && nodes[j].ch === 1)) {
        links.push({ a: i, b: j, ch: Math.max(nodes[i].ch, nodes[j].ch), len: round(len) });
      }
    }
  }
  return { nodes, links };
}

const formatIndian = (n: number) => Math.round(n).toLocaleString("en-IN");
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const LAST = chapters.length - 1;

const Story = () => {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [count, setCount] = useState(chapters[0].value);
  const { nodes, links } = useMemo(buildNetwork, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  // Continuous motion between chapter switches: the network slowly turns, the ghost word drifts
  const spin = useTransform(progress, [0, 1], [0, 50]);
  const ghostX = useTransform(progress, [0, 1], ["8%", "-28%"]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = Math.min(LAST, Math.floor(p * chapters.length));
    if (next !== active) setActive(next);
  });

  useEffect(() => {
    // Every chapter counts up from zero so a smaller stat never counts down
    const controls = animate(0, chapters[active].value, {
      duration: 1.1,
      ease,
      onUpdate: setCount,
    });
    return () => controls.stop();
  }, [active]);

  const chapter = chapters[active];

  return (
    <section className="story" ref={ref} aria-label="Career story" style={{ height: `${chapters.length * 95 + 100}vh` }}>
      {/* Screen readers get the whole story at once instead of the scroll-driven view */}
      <ol className="sr-only">
        {chapters.map((c) => (
          <li key={c.tick}>
            {c.tick} — {c.title} {c.body}
          </li>
        ))}
      </ol>

      <div className="story-sticky" aria-hidden="true">
        <motion.div className="story-ghost" style={{ x: ghostX }}>
          <motion.span
            key={chapter.ghost}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            {chapter.ghost}
          </motion.span>
        </motion.div>

        <div className="story-grid wrap">
          <div className="story-text">
            <div className="mono story-kicker">
              00 / The story so far
              <span className="story-index">
                {String(active + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}
              </span>
            </div>
            <motion.div
              key={active}
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07 } } }}
            >
              <motion.div
                className="story-year"
                style={{ color: chapter.accent }}
                variants={{
                  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
                }}
              >
                {chapter.tick}
              </motion.div>
              <motion.div className="mono story-label" variants={item}>
                Chapter {String(active + 1).padStart(2, "0")} / {chapter.label}
              </motion.div>
              <motion.h2 className="story-title" variants={item}>
                {chapter.title}
              </motion.h2>
              <motion.p className="story-body" variants={item}>
                {chapter.body}
              </motion.p>
              <motion.div className="story-facts" variants={item}>
                {chapter.facts.map((f) => (
                  <div key={f.l} className="story-fact">
                    <b>{f.v}</b>
                    <span className="mono">{f.l}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div className="story-stack" variants={item}>
                {chapter.stack.map((s) => (
                  <span key={s} className="chip" style={{ borderColor: "#2a2f3d" }}>
                    {s}
                  </span>
                ))}
                {chapter.cta && (
                  <a className="btn primary story-cta" href={chapter.cta.href} tabIndex={-1}>
                    {chapter.cta.text}
                  </a>
                )}
              </motion.div>
            </motion.div>
          </div>

          <div className="story-visual">
            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              <motion.g style={{ rotate: spin, originX: "50px", originY: "50px" }}>
                {links.map((l, i) => (
                  <line
                    key={i}
                    x1={nodes[l.a].x}
                    y1={nodes[l.a].y}
                    x2={nodes[l.b].x}
                    y2={nodes[l.b].y}
                    className={`story-link ${l.ch === LAST ? "future" : ""}`}
                    style={{
                      strokeDasharray: l.ch === LAST ? "0.6 0.8" : l.len,
                      strokeDashoffset: l.ch === LAST ? 0 : l.ch <= active ? 0 : l.len,
                      opacity: l.ch <= active ? 1 : 0,
                      transitionDelay: `${(i % 12) * 40}ms`,
                    }}
                  />
                ))}
                {nodes.map((n, i) => (
                  <circle
                    key={i}
                    cx={n.x}
                    cy={n.y}
                    r={n.r}
                    className={`story-node ${n.ch <= active ? "on" : ""} ${n.ch === LAST ? "future" : ""}`}
                    style={{
                      fill: n.ch === active && n.ch !== LAST ? chapter.accent : undefined,
                      stroke: n.ch === LAST ? chapter.accent : undefined,
                      transitionDelay: `${(i % 10) * 45}ms`,
                    }}
                  />
                ))}
              </motion.g>
              <circle cx={50} cy={50} r={5} className="story-core" style={{ stroke: chapter.accent }} />
            </svg>
            <div className="story-counter">
              <b style={{ color: chapter.accent }}>
                {chapter.display ?? `${formatIndian(count)}${chapter.suffix ?? ""}`}
              </b>
              <span className="mono">{chapter.unit}</span>
            </div>
          </div>
        </div>

        <div className="story-rail wrap">
          <div className="story-track">
            <motion.div className="story-fill" style={{ scaleX: progress }} />
          </div>
          <div className="story-ticks">
            {chapters.map((c, i) => (
              <span key={c.tick} className={`mono ${i <= active ? "on" : ""} ${i === active ? "current" : ""}`}>
                {c.tick}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default Story;
