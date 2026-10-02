"use client";
import React, { useRef } from "react";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import useWide from "@/Components/Motion/useWide";

const ROLES = 3;

// Each role card pins, then shrinks and dims as the next card slides over it
function useStackStyle(progress: MotionValue<number>, i: number) {
  const depth = ROLES - 1 - i;
  const scale = useTransform(progress, [i / ROLES, 1], [1, 1 - depth * 0.05]);
  const filter = useTransform(progress, [i / ROLES, 1], ["brightness(1)", `brightness(${1 - depth * 0.3})`]);
  return { scale, filter };
}

const Experience = () => {
  const shell = useRef<HTMLDivElement>(null);
  const wide = useWide();
  // Timeline rail fills as the reader travels through the roles
  const { scrollYProgress } = useScroll({ target: shell, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.4 });
  const { scrollYProgress: stack } = useScroll({ target: shell, offset: ["start start", "end end"] });
  const styles = [useStackStyle(stack, 0), useStackStyle(stack, 1), useStackStyle(stack, 2)];
  const cardStyle = (i: number) => (wide ? { ...styles[i], top: `${110 + i * 28}px` } : undefined);

  return (
    <section className="section" id="experience">
      <div className="section-head">
        <div>
          <div className="mono">03 / Career journey</div>
          <h2>Experience</h2>
        </div>
        <p className="section-intro">
          2+ years shipping production web, mobile, and AI-integrated applications across fintech and AI-SaaS.
        </p>
      </div>
      <div className={`experience-shell ${wide ? "stacked" : ""}`} ref={shell}>
        <motion.span className="exp-rail" style={{ scaleY }} aria-hidden="true" />
        <div className="exp-top mono">
          <span>ROLE / ORGANIZATION</span>
          <span>PERIOD / FOCUS</span>
        </div>

        <motion.article className="exp exp-biapay" style={cardStyle(0)}>
          <div className="exp-date">
            <span className="exp-dot" aria-hidden="true" />
            NOV 2025 — PRESENT<br />
            <span className="exp-badge">CURRENT</span>
          </div>
          <div>
            <h3>BIAPay</h3>
            <h4>Frontend / Forward Deployed Developer · Fintech</h4>
            <p className="summary">
              Designed and built BIAPay&apos;s e-banking platform from scratch for banking partners — now live and serving 100,000+ (1 Lakh+) users across multiple deployment projects.
            </p>
            <ul>
              <li>Designed and built core e-banking platforms from scratch for banking clients, scaling to <strong>100,000+ (1 Lakh+) active users</strong> while shipping 100+ secure UI screens end to end.</li>
              <li>Engineered strict banking-grade security mechanisms, data privacy standards, and audit-ready permission workflows directly into the interface layer.</li>
              <li>Replaced legacy fixed-role permissions with a fully dynamic, custom RBAC system supporting unlimited user-defined roles across super-agents, merchants, and corporate bank users.</li>
              <li>Maintained 85%+ code coverage on the frontend codebase by writing comprehensive unit and integration tests in Jest.</li>
            </ul>
          </div>
          <div className="exp-side">
            <b>1 Lakh+ Users</b>
            Built from Scratch · React · Banking Security<br />
            <span className="exp-badge">Fintech / Bank Security &amp; Compliance</span>
          </div>
        </motion.article>

        <motion.article className="exp exp-omnitutor" style={cardStyle(1)}>
          <div className="exp-date">
            <span className="exp-dot" aria-hidden="true" />
            MAY 2025 — OCT 2025
          </div>
          <div>
            <h3>OmniTutor</h3>
            <h4>Full Stack Developer · AI / EdTech</h4>
            <p className="summary">
              Built and launched OmniTutor, a Next.js full-stack tutoring platform integrating real-time AI voice, video, and interactive content.
            </p>
            <ul>
              <li>Architected full-stack Next.js application (SSR, ISR, API routes) integrating real-time AI voice, video, and interactive content via WebRTC, WebSockets, and AI middleware.</li>
              <li>Scaled to <strong>800+ active learners</strong> within 15 days of launch.</li>
              <li>Improved 30-day user retention by <strong>35%</strong> by iterating weekly on direct user feedback.</li>
            </ul>
          </div>
          <div className="exp-side">
            <b>0 → 1 Build</b>
            Next.js · WebRTC · WebSockets · AI<br />
            <span className="exp-badge">800+ Active Learners</span>
          </div>
        </motion.article>

        <motion.article className="exp exp-sheshya" style={cardStyle(2)}>
          <div className="exp-date">
            <span className="exp-dot" aria-hidden="true" />
            JUL 2024 — APR 2025
          </div>
          <div>
            <h3>Sheshya AI</h3>
            <h4>Software Engineer, Founding Team · AI-SaaS</h4>
            <p className="summary">
              Core member of the founding engineering team, building Flutter mobile agents, 50+ React admin web pages, 100+ RESTful APIs, and Docker/cloud infrastructure.
            </p>
            <ul>
              <li>Enabled low-latency, self-updating agent interfaces with real-time data sync by engineering WebSocket/REST pipelines and integrating backend APIs into the Flutter frontend.</li>
              <li>Powered intelligent assistant simulations by integrating multimodal features — speech-to-text, PDF understanding, and location-based context.</li>
              <li>Improved navigation efficiency and accessibility across 50+ web pages with a library of reusable React components.</li>
              <li>Reduced average API response times by <strong>30%</strong> by designing and optimizing 100+ RESTful endpoints with query optimization and containerizing 10+ services with Docker.</li>
            </ul>
          </div>
          <div className="exp-side">
            <b>Founding Team</b>
            Flutter · React · Node.js · Docker · GCP<br />
            <span className="exp-badge">100+ APIs / Multimodal AI</span>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Experience;
