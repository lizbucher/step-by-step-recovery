"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import content from "@/content/site-content.json";

export default function Method() {
  const m = content.homepage.method;
  return (
    <section className="relative py-24 lg:py-36">
      <div className="container-prose">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 lg:mb-24">
          <div className="lg:col-span-5">
            <p className="eyebrow">{m.eyebrow}</p>
            <h2 className="mt-5 font-display font-bold text-h2 text-ink text-balance">
              {m.headline}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-body-long text-ink-muted text-pretty">{m.body}</p>
          </div>
        </div>

        <ol className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-6 lg:gap-y-0">
          {m.pillars.map((p, i) => (
            <motion.li
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
              className={[
                "lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start py-8",
                i !== 0 ? "border-t border-line" : "",
              ].join(" ")}
            >
              <div className="lg:col-span-2">
                <span className="font-display text-clay font-bold text-xl tracking-tight tabular-nums">
                  {p.n}
                </span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-display font-bold text-h3 text-ink">{p.name}</h3>
              </div>
              <div className="lg:col-span-6">
                <p className="text-body-long text-ink-muted text-pretty">{p.body}</p>
              </div>
            </motion.li>
          ))}
        </ol>

        <div className="mt-16 lg:mt-24 flex">
          <Link href={m.cta.href} className="btn-secondary">
            {m.cta.label} <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
