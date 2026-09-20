"use client";
import React, { useState } from "react";

type ProjectCategory = "All" | "Web" | "Mobile" | "AI" | "Fintech" | "Automations" | "Tools";

interface ProjectItem {
  id: string;
  num: string;
  categoryTag: string;
  categories: ProjectCategory[];
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  linkText: string;
  bgGradient: string;
  minHeight?: string;
  gridSpan: string;
  externalUrl: string;
}

const allProjects: ProjectItem[] = [
  {
    id: "onecast",
    num: "01 / AD TECH & AUTOMATIONS",
    categoryTag: "AD TECH",
    categories: ["Mobile", "Web", "AI", "Automations"],
    title: "ONECAST — Three Platforms. One Tap.",
    subtitle: "Cross-Platform Campaign & Workflow Automation Manager",
    description:
      "A unified multi-channel ad management and automation platform designed to launch and monitor ad campaigns across Google Ads, Meta, and LinkedIn from a single flow — eliminating expensive ₹80,000/month agency retainers.",
    highlights: [
      "Engineered cross-platform Flutter & Web client sharing a unified REST/WebSocket backend.",
      "Integrated Apify web scrapers for automated competitor ad intelligence & lead data extraction.",
      "Leveraged Apollo.io enrichment workflows to automatically sync high-intent B2B target audiences directly into ad campaigns.",
      "Consolidated multi-network analytics into a single real-time reporting dashboard.",
    ],
    tags: ["Flutter", "Web", "Apify Automations", "Apollo.io", "Google Ads API", "Meta API", "LinkedIn API"],
    linkText: "LIVE: ONECAST.PRANJALSINGH.IN ↗",
    gridSpan: "span 7",
    minHeight: "620px",
    bgGradient: "radial-gradient(circle at 72% 22%, #1d6672 0, #0c2227 23%, #050909 65%)",
    externalUrl: "https://onecast.pranjalsingh.in/",
  },
  {
    id: "taskflow",
    num: "02 / AI & WORKFLOW AUTOMATION",
    categoryTag: "AI SAAS",
    categories: ["AI", "Mobile", "Web", "Automations"],
    title: "TaskFlow AI - From Meeting to Done in Minutes",
    subtitle: "Real-time Meeting Action Extraction & Sync",
    description:
      "An intelligent workflow assistant that listens to live meetings, automatically extracts action items, assignees, deadlines, and priorities using OpenAI & WebSockets, and syncs them directly into mobile apps.",
    highlights: [
      "Cut post-meeting task setup time from 25 minutes down to under 3 minutes (88% reduction in manual effort).",
      "Real-time call processing via WebSockets, WebRTC, and LLM structured prompt pipelines.",
      "Automated task creation, priority tagging, and instant mobile notification sync.",
    ],
    tags: ["React.js", "OpenAI", "WebSockets", "Task Automation", "Flutter"],
    linkText: "LIVE: TASK.PRANJALSINGH.IN ↗",
    externalUrl: "https://task.pranjalsingh.in/",
    gridSpan: "span 5",
    minHeight: "620px",
    bgGradient: "radial-gradient(circle at 70% 25%, #c7c7c7 0, #4b4b4b 18%, #151515 57%)",
  },
  {
    id: "biapay",
    num: "03 / FINTECH & ENTERPRISE SECURITY",
    categoryTag: "FINTECH",
    categories: ["Fintech", "Web", "Mobile"],
    title: "BIAPay E-Banking Platforms",
    subtitle: "Bank-Grade E-Banking & Security Engine Built from Scratch",
    description:
      "Enterprise e-banking platforms designed and built from scratch for banking partners — serving 100,000+ (1 Lakh+) users — featuring strict security standards, permission workflows, and a custom dynamic RBAC engine.",
    highlights: [
      "Built from scratch and scaled to 100,000+ (1 Lakh+) live users across multiple banking client deployments.",
      "Architected custom dynamic RBAC system supporting unlimited user-defined roles across super-agents, merchants, and corporate bank users.",
      "Enforced audit-ready security validations, 2FA authenticators, KYC processing, and 85%+ Jest test coverage.",
    ],
    tags: ["Built from Scratch", "1 Lakh+ Users", "React", "Flutter", "Dynamic RBAC", "Banking Security"],
    linkText: "1 LAKH+ USERS · BANKING SECURITY ↗",
    gridSpan: "span 6",
    minHeight: "540px",
    bgGradient: "radial-gradient(circle at 65% 25%, #6f52bd 0, #20143b 25%, #0b0913 67%)",
    externalUrl: "https://github.com/pranjalsingh03",
  },
  {
    id: "omnitutor",
    num: "04 / AI × EDTECH PLATFORM",
    categoryTag: "AI EDTECH",
    categories: ["AI", "Web", "Automations"],
    title: "OmniTutor — Real-Time AI Tutoring Platform",
    subtitle: "Real-time AI Tutoring & Automated Progress Tracking",
    description:
      "A full-stack Next.js tutoring platform combining real-time AI voice, video, and interactive learning sessions with automated weekly progress reports and personalized study plan generation.",
    highlights: [
      "Built with Next.js SSR/ISR, API routes, WebSockets, and WebRTC real-time media channels.",
      "Scaled to 800+ active learners within 15 days of launch.",
      "Boosted 30-day user retention by 35% through weekly feedback-driven iterations.",
    ],
    tags: ["Next.js", "WebRTC", "WebSockets", "AI Middleware", "Automated Study Plans"],
    linkText: "LIVE: OMNITUTOR.LIVE ↗",
    gridSpan: "span 6",
    minHeight: "540px",
    bgGradient: "radial-gradient(circle at 70% 25%, #19524e 0, #10211f 30%, #080c0c 70%)",
    externalUrl: "https://omnitutor.live/",
  },
  {
    id: "interview-room",
    num: "05 / REALTIME WEBRTC PLATFORM",
    categoryTag: "REALTIME",
    categories: ["Web", "AI", "Tools"],
    title: "Interview Room Sync",
    subtitle: "Collaborative Code Editor & Mock Interview Platform",
    description:
      "A production-grade shared coding environment for mock technical interviews, featuring live-synced code editing, WebRTC video/audio calls, role-gated question banks, and automated session saving.",
    highlights: [
      "Built multi-user real-time code synchronization using WebSockets and WebRTC data channels.",
      "Hardened backend infrastructure for zero code loss during socket reconnection events.",
    ],
    tags: ["WebRTC", "Collaborative Editing", "Node.js", "WebSockets", "Real-Time"],
    linkText: "MOCK INTERVIEW PLATFORM ↗",
    gridSpan: "span 6",
    minHeight: "540px",
    bgGradient: "radial-gradient(circle at 70% 25%, #354a7a 0, #141b30 30%, #080a10 70%)",
    externalUrl: "https://github.com/pranjalsingh03",
  },
  {
    id: "sheshya",
    num: "06 / FOUNDING TEAM AI-SAAS",
    categoryTag: "FOUNDING TEAM",
    categories: ["AI", "Mobile", "Web", "Automations"],
    title: "Sheshya AI Ecosystem",
    subtitle: "Multi-Agent AI Platform & Admin Infrastructure",
    description:
      "AI-SaaS education platform spanning Flutter mobile agent applications, 50+ React admin web pages, 100+ RESTful APIs, document processing automations, and containerized cloud deployments.",
    highlights: [
      "Engineered WebSocket/REST pipelines connecting Flutter mobile apps with backend AI microservices.",
      "Integrated multimodal AI features including speech-to-text, PDF document parsing, and location context.",
      "Containerized 10+ services with Docker and optimized MongoDB queries, reducing API response times by 30%.",
    ],
    tags: ["Flutter", "React", "Node.js", "Docker", "GCP", "Multimodal AI"],
    linkText: "FOUNDING ENGINEER · CASE STUDY ↗",
    gridSpan: "span 6",
    minHeight: "540px",
    bgGradient: "radial-gradient(circle at 70% 25%, #80613b 0, #292015 30%, #0d0b08 70%)",
    externalUrl: "https://github.com/pranjalsingh03",
  },
];

const categoriesList: ProjectCategory[] = ["All", "Web", "Mobile", "AI", "Fintech", "Automations", "Tools"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.categories.includes(activeCategory));

  return (
    <section className="section" id="work">
      <div className="section-head">
        <div>
          <div className="mono">06 / Selected work</div>
          <h2>Projects</h2>
        </div>
        <p className="section-intro">
          Selected production applications, workflow &amp; web automations (Apify, Apollo.io), mobile apps, and bank-grade systems. Click any card to open its live site.
        </p>
      </div>

      <div className="filters" role="tablist" aria-label="Project categories">
        {categoriesList.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`filter ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects">
        {filteredProjects.map((project) => (
          <a
            key={project.id}
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
            style={{ gridColumn: project.gridSpan }}
          >
            <article
              className="project"
              style={{
                background: project.bgGradient,
                minHeight: project.minHeight || undefined,
                height: "100%",
              }}
            >
              <span className="project-number">{project.num}</span>
              <div className="project-preview" aria-hidden="true">
                <div className="preview-lines" />
                <div className="preview-dot" />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p style={{ color: "var(--lime)", fontSize: "11px", fontFamily: "'DM Mono', monospace", marginBottom: "8px" }}>
                  {project.subtitle}
                </p>
                <p>{project.description}</p>
                <ul style={{ paddingLeft: "16px", margin: "0 0 14px", color: "#aaa9a2", fontSize: "11px", lineHeight: "1.7" }}>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-link">{project.linkText}</div>
              </div>
            </article>
          </a>
        ))}

        <a
          href="https://github.com/pranjalsingh03"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
          style={{ gridColumn: "span 12" }}
        >
          <article className="project more-project" style={{ minHeight: "220px" }}>
            <div>
              <div className="plus">＋</div>
              <strong>More in the lab</strong>
              <div className="mono">Small experiments, Apify/Apollo automations &amp; GitHub repos</div>
            </div>
          </article>
        </a>
      </div>
    </section>
  );
};

export default Projects;
