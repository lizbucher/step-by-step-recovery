"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Imagery from "@/components/Imagery";
import content from "@/content/site-content.json";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1], delay: 0.1 + i * 0.08 },
  }),
};

export default function Hero() {
  const hero = content.homepage.hero;
  return (
    <section className="relative pt-12 lg:pt-20 pb-24 lg:pb-32 overflow-hidden">
      {/* warm ambient blob — anti-pattern cap: max 2, we use 1 */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-clay-soft opacity-50 blur-3xl pointer-events-none"
      />

      <div className="container-prose relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <motion.p
              initial="hidden"
              animate="show"
              custom={0}
              variants={fade}
              className="eyebrow"
            >
              {hero.eyebrow}
            </motion.p>
            <h1 className="mt-6 font-display font-bold text-h1 text-ink text-balance">
              {hero.h1_lines.map((line, i) => {
                const containsHighlight = line.toLowerCase().includes(hero.h1_highlight_word.toLowerCase());
                return (
                  <motion.span
                    key={i}
                    initial="hidden"
                    animate="show"
                    custom={i + 1}
                    variants={fade}
                    className="block"
                  >
                    {containsHighlight ? (
                      <>
                        {line.split(new RegExp(`(${hero.h1_highlight_word})`, "i")).map((part, j) =>
                          part.toLowerCase() === hero.h1_highlight_word.toLowerCase() ? (
                            <span key={j} className="h1-highlight">{part}</span>
                          ) : (
                            <span key={j}>{part}</span>
                          )
                        )}
                      </>
                    ) : (
                      line
                    )}
                  </motion.span>
                );
              })}
            </h1>
            <motion.p
              initial="hidden"
              animate="show"
              custom={5}
              variants={fade}
              className="mt-8 max-w-xl text-body-long text-ink-muted text-pretty"
            >
              {hero.subhead}
            </motion.p>
            <motion.div
              initial="hidden"
              animate="show"
              custom={6}
              variants={fade}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link href={hero.cta_primary.href} className="btn-primary">
                {hero.cta_primary.label} <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href={hero.cta_secondary.href} className="btn-ghost">
                {hero.cta_secondary.label} <ArrowUpRight size={16} aria-hidden />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1], delay: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <Imagery
                variant="residence-hero"
                alt="Modern St. Louis sober living residence at golden hour"
                className="aspect-[4/5] rounded-xl shadow-elevated"
              />
              <div className="absolute -bottom-6 -left-6 hidden lg:flex items-center gap-3 rounded-xl bg-surface px-4 py-3 shadow-card border border-line">
                <span className="h-2 w-2 rounded-full bg-clay animate-pulse" aria-hidden />
                <span className="text-xs font-semibold tracking-wider uppercase text-ink-muted">
                  Now accepting inquiries
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
