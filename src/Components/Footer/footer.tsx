"use client";
import React from "react";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="contact">
          <div>
            <div className="mono">10 / Let&apos;s build something real</div>
            <h2>
              Have a<br />
              <span className="outline">project?</span>
            </h2>
            <p>
              If you are building a startup, launching a product, improving an internal tool or need a full-stack developer / forward deployed engineer who can take a web, mobile, or AI system from rough requirements to a production release, let&apos;s connect.
            </p>
          </div>
          <div className="links">
            <a href="mailto:pranjalsingh9304@gmail.com">Email ↗</a>
            <a href="https://linkedin.com/in/pranjalsingh03" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/pranjalsingh03" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://pranjalsingh.in/" target="_blank" rel="noopener noreferrer">Current Site ↗</a>
          </div>
        </div>
        <div className="footer-bottom mono">
          <span>PRANJAL SINGH / 2026</span>
          <span>FULL STACK DEVELOPER / FORWARD DEPLOYED ENGINEER</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;