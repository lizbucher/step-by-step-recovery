"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Imagery from "@/components/Imagery";
import content from "@/content/site-content.json";

export default function Founder() {
  const f = content.homepage.founder;
  return (
    <section className="relative py-24 lg:py-36 bg-section-dark text-section-dark-text">
      <div className="container-prose">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <Imagery
              variant="founder"
              alt="Yomi Martin, founder of Step by Step Treatment and Recovery Centers"
              className="aspect-[4/5] rounded-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <p className="eyebrow">{f.eyebrow}</p>
            <h2 className="mt-5 font-display font-bold text-h2 text-section-dark-text text-balance">
              {f.headline}
            </h2>
            <p className="mt-8 text-body-long text-section-dark-text/80 text-pretty">{f.body}</p>
            <p className="mt-8 font-display font-semibold text-clay text-lg">{f.signature_line}</p>
            <Link
              href={f.cta.href}
              className="btn-ghost mt-8 text-section-dark-text hover:text-clay"
            >
              {f.cta.label} <ArrowUpRight size={16} aria-hidden />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
