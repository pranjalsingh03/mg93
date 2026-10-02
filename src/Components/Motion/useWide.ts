"use client";
import { useEffect, useState } from "react";

// True on desktop-width screens, where sections can pin and stack.
// Starts false so server and first client render agree.
export default function useWide(query = "(min-width: 901px)") {
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setWide(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);
  return wide;
}
