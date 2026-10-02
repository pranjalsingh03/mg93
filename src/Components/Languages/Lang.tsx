"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Card that flies in from alternating sides and settles into the grid in step with
// the scroll; cards later in a row start a little later. The icon turns as it lands.
const SkillCard = ({
  i,
  className,
  icon,
  children,
}: {
  i: number;
  className: string;
  icon: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 55%"] });
  const side = i % 2 === 0 ? -1 : 1;
  const range = [(i % 3) * 0.12, 1];
  const x = useTransform(scrollYProgress, range, [side * 140, 0]);
  const y = useTransform(scrollYProgress, range, [110, 0]);
  const rotate = useTransform(scrollYProgress, range, [side * 7, 0]);
  const scale = useTransform(scrollYProgress, range, [0.84, 1]);
  const opacity = useTransform(scrollYProgress, range, [0.1, 1]);
  const spin = useTransform(scrollYProgress, range, [side * -180, 0]);

  return (
    <motion.article ref={ref} className={className} style={{ x, y, rotate, scale, opacity }}>
      <motion.span className="skill-icon" aria-hidden="true" style={{ rotate: spin }}>
        {icon}
      </motion.span>
      {children}
    </motion.article>
  );
};

const Lang = () => {
  return (
    <section className="section" id="skills">
      <div className="section-head">
        <div>
          <div className="mono">02 / Capabilities &amp; Stack</div>
          <h2>
            What I<br />
            <span className="outline">build.</span>
          </h2>
        </div>
        <p className="section-intro">
          Production stack across full-stack engineering, mobile, AI systems, workflow automations, and cloud infrastructure.
        </p>
      </div>
      <div className="skills">
        <SkillCard i={0} className="skill skill-core" icon="◫">
          <span className="skill-num">01 / CORE STACK</span>
          <h3>Frontend &amp; Full Stack Architecture.</h3>
          <p>
            Production-grade web interfaces built with React, Next.js (SSR/ISR), TypeScript, and Node.js for high performance and accessibility.
          </p>
          <div className="skill-stack">
            <span className="chip">React</span>
            <span className="chip">Next.js</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Node.js</span>
            <span className="chip">Express.js</span>
          </div>
        </SkillCard>

        <SkillCard i={1} className="skill skill-backend" icon="⌘">
          <span className="skill-num">02 / BACKEND &amp; REALTIME</span>
          <h3>APIs, WebSockets &amp; Real-Time Systems.</h3>
          <p>
            RESTful APIs, tRPC, WebSockets, and WebRTC real-time collaborative pipelines backed by PostgreSQL and MongoDB.
          </p>
          <div className="skill-stack">
            <span className="chip">REST</span>
            <span className="chip">tRPC</span>
            <span className="chip">WebSockets</span>
            <span className="chip">WebRTC</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">MongoDB</span>
          </div>
        </SkillCard>

        <SkillCard i={2} className="skill skill-mobile" icon="▯">
          <span className="skill-num">03 / MOBILE DEVELOPMENT</span>
          <h3>Cross-Platform Mobile Apps.</h3>
          <p>
            Native-feeling Android and cross-platform mobile products in Flutter &amp; Dart with real-time sync and agent UIs.
          </p>
          <div className="skill-stack">
            <span className="chip">Flutter</span>
            <span className="chip">Dart</span>
            <span className="chip">Android</span>
          </div>
        </SkillCard>

        <SkillCard i={3} className="skill skill-auto" icon="⌁">
          <span className="skill-num">04 / AUTOMATIONS &amp; SCRAPING</span>
          <h3>Workflow &amp; Data Automations.</h3>
          <p>
            Building automated lead pipelines, web scraping actors, and audience enrichment workflows using tools like Apify and Apollo.io.
          </p>
          <div className="skill-stack">
            <span className="chip">Apify</span>
            <span className="chip">Apollo.io</span>
            <span className="chip">Web Scraping</span>
            <span className="chip">Lead Extraction</span>
            <span className="chip">Automations</span>
          </div>
        </SkillCard>

        <SkillCard i={4} className="skill skill-ai" icon="✦">
          <span className="skill-num">05 / AI &amp; MULTIMODAL</span>
          <h3>AI Products &amp; Agent Middleware.</h3>
          <p>
            Integrating OpenAI, LLM APIs, speech-to-text, PDF understanding, and real-time meeting task extractors into active user workflows.
          </p>
          <div className="skill-stack">
            <span className="chip">OpenAI</span>
            <span className="chip">LLM APIs</span>
            <span className="chip">Multimodal</span>
            <span className="chip">WebSockets</span>
          </div>
        </SkillCard>

        <SkillCard i={5} className="skill skill-devops" icon="△">
          <span className="skill-num">06 / DEVOPS &amp; TOOLS</span>
          <h3>Cloud Infra &amp; Engineering Utilities.</h3>
          <p>
            Docker containerization, GitHub Actions CI/CD, AWS, GCP, Azure, Terraform, plus Git, Postman, Python, and C++.
          </p>
          <div className="skill-stack">
            <span className="chip">Docker</span>
            <span className="chip">GitHub Actions</span>
            <span className="chip">AWS</span>
            <span className="chip">GCP</span>
            <span className="chip">Azure</span>
            <span className="chip">Terraform</span>
          </div>
        </SkillCard>
      </div>
    </section>
  );
};

export default Lang;
