"use client";
import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Elements that reveal once as they enter the viewport. Children of a
// stagger parent get an incremental --i so CSS can cascade delays.
// data-reveal goes "" (hidden) → "in" (animating) → "done" (native styles),
// and a permanent .seen class drives one-shot animations of inner elements.
const REVEAL_SELECTORS = [
  ".section-head",
  ".about-copy p:not(.lead)",
  ".about-side .item",
  ".exp",
  ".filters",
  ".case",
  ".principle",
  ".quote-box",
  ".contact",
].join(",");

const STAGGER_PARENTS = [
  ".about-side",
  ".experience-shell",
  ".case-grid",
  ".principles",
  ".links",
  ".filters",
];

const ScrollFx = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  useEffect(() => {
    STAGGER_PARENTS.forEach((sel) =>
      document.querySelectorAll<HTMLElement>(sel).forEach((parent) =>
        Array.from(parent.children).forEach((child, i) => (child as HTMLElement).style.setProperty("--i", String(i)))
      )
    );

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.dataset.reveal = "in";
          el.classList.add("seen");
          io.unobserve(el);
          // Hand back to native styles so hover transitions aren't delayed
          const i = Number(el.style.getPropertyValue("--i") || 0);
          window.setTimeout(() => (el.dataset.reveal = "done"), 1500 + i * 90);
        }),
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    // Tracked per effect run: StrictMode remounts must re-observe pending elements
    const watched = new WeakSet<HTMLElement>();
    const observe = () =>
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTORS).forEach((el) => {
        if (watched.has(el) || el.dataset.reveal === "in" || el.dataset.reveal === "done") return;
        watched.add(el);
        el.dataset.reveal = "";
        io.observe(el);
      });
    observe();

    // Project filters re-render cards, so pick up newly mounted elements
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    document.documentElement.classList.add("fx-ready");
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
};

export default ScrollFx;
