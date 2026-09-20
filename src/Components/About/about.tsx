"use client";
import React from "react";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-head">
        <div>
          <div className="mono">01 / The person behind the stack</div>
          <h2>
            About<br />
            <span className="outline">me.</span>
          </h2>
        </div>
        <p className="section-intro">
          Full-stack developer and forward deployed engineer specializing in React, Next.js, Flutter, Node.js, enterprise security, and AI systems.
        </p>
      </div>
      <div className="about-intro">
        <div className="about-copy">
          <p className="lead">
            I build secure, robust, and high-performance software systems that <em>scale to 100,000+ (1 Lakh+) users</em>.
          </p>
          <p>
            B.Tech in Computer Science &amp; Engineering from Lovely Professional University (2022 – 2026), with 2+ years of hands-on experience taking technical ownership of complex web, mobile, and AI systems across fintech and AI-SaaS.
          </p>
          <p>
            Having built and designed bank-grade e-banking platforms from scratch for banking partners — serving over 1 Lakh users — my core focus lies in forward-deployed system integration, custom security implementation (dynamic RBAC, audit-ready compliance, KYC workflows), and full-stack delivery across Web, Mobile (Flutter), and Cloud backends.
          </p>
        </div>
        <aside className="about-side">
          <div className="item">
            <b>Education</b>
            <span>B.Tech in Computer Science &amp; Engineering · Lovely Professional University (2022 – 2026)</span>
          </div>
          <div className="item">
            <b>WakaTime Metric</b>
            <span>900+ hours coded — Top 4% out of 5 Lakh+ developers worldwide.</span>
          </div>
          <div className="item">
            <b>GitHub Consistency</b>
            <span>483-day active streak shipping continuous production code.</span>
          </div>
          <div className="item">
            <b>Scale &amp; Security Record</b>
            <span>100,000+ (1 Lakh+) users served on e-banking platforms built from scratch, 100+ UI screens &amp; REST APIs shipped.</span>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
