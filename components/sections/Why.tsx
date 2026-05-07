"use client";

import { motion } from "framer-motion";
import content from "@/content/site-content.json";

export default function Why() {
  const w = content.homepage.why;
  return (
    <section className="relative py-24 lg:py-36">
      <div className="container-prose">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 lg:mb-20">
          <div className="lg:col-span-7">
            <p className="eyebrow">{w.eyebrow}</p>
            <h2 className="mt-5 font-display font-bold text-h2 text-ink text-balance">
              {w.headline}
            </h2>
            <p className="mt-6 max-w-2xl text-body-long text-ink-muted text-pretty">{w.body}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 lg:gap-y-16">
          {w.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 0.61, 0.36, 1] }}
              className="relative"
            >
              <div className="flex items-start gap-5">
                <span className="number-pill shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display font-bold text-h3 text-ink">{item.title}</h3>
                  <p className="mt-3 text-body-long text-ink-muted text-pretty">{item.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
