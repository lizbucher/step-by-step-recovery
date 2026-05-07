"use client";

import { motion } from "framer-motion";
import content from "@/content/site-content.json";

export default function Marquee() {
  const items = content.homepage.marquee;
  // Duplicate for seamless loop
  const looped = [...items, ...items, ...items];

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-section-dark text-section-dark-text">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {looped.map((item, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-display font-semibold text-3xl lg:text-5xl tracking-tight text-section-dark-text/95">
              {item}
            </span>
            <span
              className="inline-block h-2.5 w-2.5 rounded-full bg-clay shrink-0"
              aria-hidden
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
