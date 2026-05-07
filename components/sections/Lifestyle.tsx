"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Imagery from "@/components/Imagery";
import content from "@/content/site-content.json";

const tiles: Array<{
  variant:
    | "lifestyle-1"
    | "lifestyle-2"
    | "lifestyle-3"
    | "lifestyle-4"
    | "residence-interior"
    | "residence-bedroom"
    | "residence-porch";
  alt: string;
  className: string;
  span: string;
}> = [
  {
    variant: "lifestyle-1",
    alt: "Welcoming front of the residence",
    className: "aspect-[4/5]",
    span: "lg:col-span-5 lg:row-span-2",
  },
  {
    variant: "residence-interior",
    alt: "Communal living and kitchen interior",
    className: "aspect-[5/4]",
    span: "lg:col-span-7",
  },
  {
    variant: "residence-bedroom",
    alt: "Private resident bedroom",
    className: "aspect-[5/4]",
    span: "lg:col-span-4",
  },
  {
    variant: "residence-porch",
    alt: "Porch with seating in late afternoon",
    className: "aspect-[5/4]",
    span: "lg:col-span-3",
  },
];

export default function Lifestyle() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const l = content.homepage.lifestyle;

  return (
    <section ref={ref} className="relative py-24 lg:py-36 overflow-hidden">
      <div className="container-prose">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 lg:mb-20">
          <div className="lg:col-span-5">
            <p className="eyebrow">{l.eyebrow}</p>
            <h2 className="mt-5 font-display font-bold text-h2 text-ink text-balance">
              {l.headline}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-body-long text-ink-muted text-pretty">{l.body}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {tiles.map((tile, i) => {
            const yMotion = i % 2 === 0 ? y1 : y2;
            return (
              <motion.div
                key={`${tile.variant}-${i}`}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.12,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                style={{ y: yMotion }}
                className={`group relative ${tile.span}`}
              >
                <div className="relative overflow-hidden rounded-xl shadow-card">
                  <Imagery
                    variant={tile.variant}
                    alt={tile.alt}
                    className={`${tile.className} transition-transform duration-700 ease-smooth group-hover:scale-[1.04]`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
