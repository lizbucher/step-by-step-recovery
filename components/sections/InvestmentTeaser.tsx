"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import content from "@/content/site-content.json";

export default function InvestmentTeaser() {
  const t = content.homepage.investment_teaser;
  return (
    <section className="relative py-20 lg:py-28">
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative overflow-hidden rounded-xl border border-line bg-clay-soft px-8 py-12 lg:px-16 lg:py-20"
        >
          {/* subtle accent shape — anti-pattern §1 cap: max 2 blobs, we use 1 */}
          <div
            aria-hidden
            className="absolute -top-32 -right-24 h-[360px] w-[360px] rounded-full bg-clay/30 blur-3xl pointer-events-none"
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow text-forest">{t.eyebrow}</p>
              <h2 className="mt-5 font-display font-bold text-h2 text-ink text-balance">
                {t.headline}
              </h2>
              <p className="mt-6 max-w-xl text-body-long text-ink/80 text-pretty">{t.body}</p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link href={t.cta.href} className="btn-primary">
                {t.cta.label} <ArrowUpRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
