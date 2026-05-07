"use client";

import { motion } from "framer-motion";
import content from "@/content/site-content.json";

export default function TrustStrip() {
  const items = content.homepage.trust_strip;
  return (
    <section className="relative -mt-6 lg:mt-0 pb-16 lg:pb-24">
      <div className="container-prose">
        <div className="rounded-xl bg-surface border border-line shadow-card divide-y lg:divide-y-0 lg:divide-x divide-line grid grid-cols-1 lg:grid-cols-4 overflow-hidden">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 0.61, 0.36, 1] }}
              className="px-6 py-7 lg:px-8 lg:py-9"
            >
              <p className="font-display font-bold text-3xl lg:text-4xl text-forest leading-none tracking-tight">
                {item.stat}
              </p>
              <p className="mt-3 text-sm font-semibold text-ink">{item.label}</p>
              <p className="mt-1 text-sm text-ink-muted leading-snug">{item.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
