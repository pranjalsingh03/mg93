"use client";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <nav aria-label="Main Navigation">
      <a className="logo" href="#top" aria-label="Pranjal Singh Home">
        <Image src="/logo1.png" alt="Pranjal Singh Logo" width={44} height={44} style={{ objectFit: "contain" }} priority />
      </a>
      <div className="navlinks">
        <a href="#about">About</a>
        <a href="#skills">Capabilities</a>
        <a href="#experience">Experience</a>
        <a href="#work">Work</a>
        <a href="#ai">AI / Eval</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav-status">
        <i className="live" aria-hidden="true" />
        <span className="mono">Available for selected work</span>
      </div>
    </nav>
  );
};

export default Header;