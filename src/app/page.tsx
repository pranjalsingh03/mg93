import React from "react";
import Header from "@/Components/Header/header";
import Intro from "@/Components/Intro/intro";
import Marquee from "@/Components/Marquee/marquee";
import About from "@/Components/About/about";
import Lang from "@/Components/Languages/Lang";
import Experience from "@/Components/Experience/Experience";
import Metrics from "@/Components/Metrics/metrics";
import AiEval from "@/Components/AiEval/aiEval";
import Projects from "@/Components/Projects/projects";
import CaseStudies from "@/Components/CaseStudies/caseStudies";
import Process from "@/Components/Process/process";
import Philosophy from "@/Components/Philosophy/philosophy";
import Footer from "@/Components/Footer/footer";
import "../app/globals.css";

export default function Home() {
  return (
    <>
      <div className="grid-bg" aria-hidden="true" />
      <div className="wrap">
        <Header />
        <Intro />
      </div>
      <Marquee />
      <div className="wrap">
        <About />
        <Lang />
        <Experience />
        <Metrics />
        <AiEval />
        <Projects />
        <CaseStudies />
        <Process />
        <Philosophy />
      </div>
      <Footer />
    </>
  );
}
