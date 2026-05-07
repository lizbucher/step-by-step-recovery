"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Imagery from "@/components/Imagery";
import content from "@/content/site-content.json";

export default function Residence() {
  const r = content.homepage.residence;
  return (
    <section className="relative py-20 lg:py-32 bg-surface-elevated">
      <div className="container-prose">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* asymmetric image stack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:col-span-7 relative"
          >
            <Imagery
              variant="residence-exterior"
              alt="Modern home exterior in a tree-lined St. Louis neighborhood"
              className="aspect-[5/4] rounded-xl shadow-card"
            />
            <Imagery
              variant="residence-bedroom"
              alt="Private resident bedroom with hotel-quality linens and natural light"
              className="hidden md:block absolute -bottom-12 -right-6 w-[44%] aspect-[4/5] rounded-xl shadow-elevated border-4 border-bg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className="eyebrow">{r.eyebrow}</p>
            <h2 className="mt-5 font-display font-bold text-h2 text-ink text-balance">
              {r.headline}
            </h2>
            <p className="mt-6 text-body-long text-ink-muted text-pretty">{r.body}</p>
            <ul className="mt-8 space-y-4">
              {r.bullets.map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <span
                    className="mt-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-forest text-white shrink-0"
                    aria-hidden
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-ink">{b}</span>
                </li>
              ))}
            </ul>
            <Link href={r.cta.href} className="btn-ghost mt-10">
              {r.cta.label} <ArrowUpRight size={16} aria-hidden />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
