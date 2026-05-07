"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Imagery from "@/components/Imagery";
import content from "@/content/site-content.json";

export default function Inquiry() {
  const i = content.homepage.inquiry;
  return (
    <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="container-prose">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <p className="eyebrow">{i.eyebrow}</p>
            <h2 className="mt-5 font-display font-bold text-h2 text-ink text-balance">
              {i.headline}
            </h2>
            <p className="mt-6 max-w-xl text-body-long text-ink-muted text-pretty">{i.body}</p>
            <p className="mt-6 font-display font-semibold text-clay text-lg">{i.signature}</p>
            <Link href={i.cta.href} className="btn-primary mt-8">
              {i.cta.label} <ArrowRight size={16} aria-hidden />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <Imagery
              variant="residence-porch"
              alt="Front porch of the residence with seating in the late afternoon"
              className="aspect-[5/4] rounded-xl shadow-card"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
