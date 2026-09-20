"use client";
import React from "react";

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
        <article className="skill skill-core">
          <span className="skill-num">01 / CORE STACK</span>
          <span className="skill-icon" aria-hidden="true">◫</span>
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
        </article>

        <article className="skill skill-backend">
          <span className="skill-num">02 / BACKEND &amp; REALTIME</span>
          <span className="skill-icon" aria-hidden="true">⌘</span>
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
        </article>

        <article className="skill skill-mobile">
          <span className="skill-num">03 / MOBILE DEVELOPMENT</span>
          <span className="skill-icon" aria-hidden="true">▯</span>
          <h3>Cross-Platform Mobile Apps.</h3>
          <p>
            Native-feeling Android and cross-platform mobile products in Flutter &amp; Dart with real-time sync and agent UIs.
          </p>
          <div className="skill-stack">
            <span className="chip">Flutter</span>
            <span className="chip">Dart</span>
            <span className="chip">Android</span>
          </div>
        </article>

        <article className="skill skill-auto">
          <span className="skill-num">04 / AUTOMATIONS &amp; SCRAPING</span>
          <span className="skill-icon" aria-hidden="true">⌁</span>
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
        </article>

        <article className="skill skill-ai">
          <span className="skill-num">05 / AI &amp; MULTIMODAL</span>
          <span className="skill-icon" aria-hidden="true">✦</span>
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
        </article>

        <article className="skill skill-devops">
          <span className="skill-num">06 / DEVOPS &amp; TOOLS</span>
          <span className="skill-icon" aria-hidden="true">△</span>
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
        </article>
      </div>
    </section>
  );
};

export default Lang;
