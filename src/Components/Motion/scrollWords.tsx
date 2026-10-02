"use client";
import React, { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

const Word = ({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span className="scroll-word" style={{ opacity }}>
      {children}{" "}
    </motion.span>
  );
};

// Paragraph whose words light up one by one, tied to scroll position
const ScrollWords = ({ text, highlight, className }: { text: string; highlight?: string; className?: string }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const plain = text.split(" ");
  const accent = highlight ? highlight.split(" ") : [];
  const total = plain.length + accent.length;
  const range = (i: number): [number, number] => [i / total, (i + 1) / total];

  return (
    <p className={className} ref={ref}>
      {plain.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={range(i)}>
          {w}
        </Word>
      ))}
      {accent.length > 0 && (
        <em>
          {accent.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={range(plain.length + i)}>
              {w}
            </Word>
          ))}
        </em>
      )}
    </p>
  );
};

export default ScrollWords;
