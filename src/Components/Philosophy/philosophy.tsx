"use client";
import React from "react";

const Philosophy = () => {
  return (
    <section className="section">
      <div className="section-head">
        <div>
          <div className="mono">09 / Philosophy</div>
          <h2>
            More than<br />
            <span className="outline">code.</span>
          </h2>
        </div>
        <p className="section-intro">
          The strongest work happens when engineering is connected to the reason a product exists.
        </p>
      </div>
      <div className="quote-wrap">
        <div className="quote-box">
          <div className="mono">A line I keep close</div>
          <div className="quote">“कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।”</div>
          <p>Focus on the work, the craft and the action in front of you. Build something useful, learn from it and keep moving.</p>
        </div>
        <div className="principles">
          <div className="principle">
            <b>Ownership over handoffs.</b>
            <span>If a feature needs frontend, backend or integration work, I would rather understand the whole path than wait for a perfect boundary.</span>
          </div>
          <div className="principle">
            <b>Clarity over complexity.</b>
            <span>Good engineering should make the product easier to change, debug and explain.</span>
          </div>
          <div className="principle">
            <b>Shipping creates information.</b>
            <span>A real product teaches more than an over-planned prototype sitting on a local machine.</span>
          </div>
          <div className="principle">
            <b>Stay curious.</b>
            <span>From fintech to AI evaluation, I enjoy learning unfamiliar systems when the problem demands it.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
