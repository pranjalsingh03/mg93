"use client";
import React from "react";

const Intro = () => {
  return (
    <header className="hero" id="top">
      <div>
        <div className="eyebrow">
          <span className="mono">FULL STACK DEVELOPER / FORWARD DEPLOYED ENGINEER</span>
          <span className="line" aria-hidden="true" />
          <span className="mono">INDIA / REMOTE</span>
        </div>
        <h1>
          Pranjal<br />
          <span>Singh</span>
        </h1>
        <div className="hero-copy">
          <p>
            Full-stack developer and forward deployed engineer (<strong>React, Next.js, Flutter, Node.js</strong>). Built bank-grade e-banking platforms serving <strong>100,000+ (1 Lakh+) users</strong>, logged <strong>900+ coding hours on WakaTime (Top 4% of 5 Lakh+ developers worldwide)</strong>, and maintained a <strong>483-day active GitHub streak</strong>.
          </p>
          <div className="hero-index">01 / 08</div>
        </div>
        <div className="hero-actions">
          <a className="btn primary" href="#work">
            Explore my work ↗
          </a>
          <a className="btn" href="#contact">
            Let&apos;s talk ↗
          </a>
        </div>
        <div className="hero-facts">
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
        </div>
      </div>

      <div className="hero-visual" aria-label="System Telemetry & Architecture Visual">
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
      </div>
    </header>
  );
};

export default Intro;
