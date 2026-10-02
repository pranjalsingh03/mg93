"use client";
import React from "react";
import { motion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";

const Marquee = () => {
  // Fast scrolling leans the band forward; it settles back when scrolling stops
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { stiffness: 300, damping: 50 });
  const skewX = useTransform(velocity, [-2500, 0, 2500], [8, 0, -8], { clamp: true });
  const scale = useTransform(velocity, [-2500, 0, 2500], [1.04, 1, 1.04], { clamp: true });

  return (
    <div className="marquee" aria-hidden="true">
      <motion.div style={{ skewX, scale }}>
        <div className="track">
          <span>FULL STACK</span> • <span>FORWARD DEPLOYED</span> • <span>FLUTTER</span> • <span>AI SYSTEMS</span> • <span>BANKING SECURITY</span> • <span>0 → 1 BUILDS</span> • <span>APIFY &amp; APOLLO AUTOMATIONS</span> • <span>FULL STACK</span> • <span>FORWARD DEPLOYED</span> • <span>FLUTTER</span> • <span>AI SYSTEMS</span> • <span>BANKING SECURITY</span> • <span>0 → 1 BUILDS</span> • <span>APIFY &amp; APOLLO AUTOMATIONS</span> •
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
