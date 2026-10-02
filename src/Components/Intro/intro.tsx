"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

// Each line of the name slides up from behind a mask
const MaskLine = ({ children, delay, className }: { children: React.ReactNode; delay: number; className?: string }) => (
  <span className="line-mask">
    <motion.span
      className={`line-inner ${className ?? ""}`}
      initial={{ y: "105%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.1, delay, ease }}
    >
      {children}
    </motion.span>
  </span>
);

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

const Intro = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // As the hero scrolls away, the copy drifts up and the visual lags behind (parallax)
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const visualY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.75], ["blur(0px)", "blur(6px)"]);

  return (
    <header className="hero" id="top" ref={ref}>
      <motion.div style={{ y: copyY, opacity: fade, filter: blur }}>
        <motion.div className="eyebrow" {...fadeUp(0.1)}>
          <span className="mono">FULL STACK DEVELOPER / FORWARD DEPLOYED ENGINEER</span>
          <span className="line" aria-hidden="true" />
          <span className="mono">INDIA / REMOTE</span>
        </motion.div>
        <h1>
          <MaskLine delay={0.2}>Pranjal</MaskLine>
          <MaskLine delay={0.35} className="hero-outline">
            Singh
          </MaskLine>
        </h1>
        <motion.div className="hero-copy" {...fadeUp(0.6)}>
          <p>
            Full-stack developer and forward deployed engineer (<strong>React, Next.js, Flutter, Node.js</strong>). Built bank-grade e-banking platforms serving <strong>100,000+ (1 Lakh+) users</strong>, logged <strong>900+ coding hours on WakaTime (Top 4% of 5 Lakh+ developers worldwide)</strong>, and maintained a <strong>483-day active GitHub streak</strong>.
          </p>
          <div className="hero-index">01 / 08</div>
        </motion.div>
        <motion.div className="hero-actions" {...fadeUp(0.75)}>
          <a className="btn primary" href="#work">
            Explore my work ↗
          </a>
          <a className="btn" href="#contact">
            Let&apos;s talk ↗
          </a>
        </motion.div>
        <motion.div className="hero-facts" {...fadeUp(0.9)}>
          <div className="fact">
            <b>1 Lakh+ Users</b>
            <span>Bank-Grade E-Banking</span>
          </div>
          <div className="fact">
            <b>900+ Hours</b>
            <span>Top 4% on WakaTime</span>
          </div>
          <div className="fact">
            <b>483-Day Streak</b>
            <span>Active GitHub Shipping</span>
          </div>
          <div className="fact">
            <b>Forward Deployed</b>
            <span>End-to-End Systems</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        aria-label="System Telemetry & Architecture Visual"
        initial={{ opacity: 0, scale: 0.94, rotateX: 8 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1.3, delay: 0.45, ease }}
        style={{ y: visualY }}
      >
        <div className="hero-frame" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "28px", background: "linear-gradient(145deg, #0e1017, #07080b)", borderColor: "#282d3d" }}>
          {/* Top Status Bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #1e2433", paddingBottom: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--lime)", boxShadow: "0 0 12px var(--lime)" }} />
              <span className="mono" style={{ color: "#d5d5cf", fontSize: "10px", letterSpacing: "0.12em" }}>SYSTEM TELEMETRY</span>
            </div>
            <span className="mono" style={{ color: "var(--lime)", fontSize: "9px" }}>ONLINE / ACTIVE</span>
          </div>

          {/* Terminal / Telemetry Lines */}
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", lineHeight: "1.9", color: "#a0a098", margin: "20px 0" }}>
            <div style={{ color: "#555", marginBottom: "6px" }}>ps://forward-deployed-engineer</div>
            <div><span style={{ color: "var(--lime)" }}>✓</span> Scale: <strong style={{ color: "#fff" }}>100,000+ (1 Lakh+) Users</strong></div>
            <div><span style={{ color: "var(--lime)" }}>✓</span> Security: <strong style={{ color: "#fff" }}>Dynamic RBAC &amp; Bank Compliance</strong></div>
            <div><span style={{ color: "var(--lime)" }}>✓</span> Benchmark: <strong style={{ color: "#fff" }}>900+ Hrs (Top 4% WakaTime)</strong></div>
            <div><span style={{ color: "var(--lime)" }}>✓</span> Activity: <strong style={{ color: "#fff" }}>483-Day Continuous GitHub Streak</strong></div>
            <div><span style={{ color: "var(--lime)" }}>✓</span> Automations: <strong style={{ color: "#fff" }}>Apify &amp; Apollo.io Pipelines</strong></div>
          </div>

          {/* Tech Stack Chips */}
          <div style={{ borderTop: "1px solid #1e2433", paddingTop: "16px" }}>
            <div className="mono" style={{ color: "#666", fontSize: "9px", marginBottom: "10px" }}>PRIMARY ARCHITECTURE</div>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              <span className="chip" style={{ background: "#121622", borderColor: "#252d42", color: "var(--cyan)" }}>React</span>
              <span className="chip" style={{ background: "#121622", borderColor: "#252d42", color: "var(--lime)" }}>Next.js</span>
              <span className="chip" style={{ background: "#121622", borderColor: "#252d42", color: "var(--blue)" }}>Flutter</span>
              <span className="chip" style={{ background: "#121622", borderColor: "#252d42", color: "var(--violet)" }}>Node.js</span>
              <span className="chip" style={{ background: "#121622", borderColor: "#252d42", color: "var(--red)" }}>WebRTC</span>
            </div>
          </div>
        </div>

        <div className="visual-label">
          BUILD<br />
          SECURE<br />
          DEPLOY
        </div>
        <div className="visual-coords">26°N / 80°E · LPU</div>
      </motion.div>
    </header>
  );
};

export default Intro;
