"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Users, CalendarCheck, Home, HeartHandshake, Compass } from "lucide-react";
import Imagery from "@/components/Imagery";
import content from "@/content/site-content.json";
import { cn } from "@/lib/cn";

const STEP_ICONS = [Users, CalendarCheck, Home, HeartHandshake, Compass];

export default function MethodPinned() {
  const m = content.homepage.method;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-20 lg:py-32 bg-surface-elevated">
      <div className="container-prose">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <p className="eyebrow">{m.eyebrow}</p>
          <h2 className="mt-5 font-display font-bold text-h2 text-ink text-balance">
            Here&apos;s{" "}
            <span className="relative inline-block">
              how it works
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                className="absolute left-0 right-0 -bottom-2 w-full h-3 text-clay"
              >
                <path
                  d="M2 8 Q 50 2, 100 6 T 198 5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            .
          </h2>
          <p className="mt-8 text-body-long text-ink-muted text-pretty">
            {m.body}
          </p>
        </div>

        {/* Pinned scroll grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Sticky photo card with morphing icon */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl shadow-elevated">
                <Imagery
                  variant="residence-exterior"
                  alt="The residence"
                  className="aspect-[4/5]"
                />
              </div>
              {/* White circle icon overlay */}
              <div className="absolute -bottom-8 right-6 lg:right-10">
                <div className="relative h-24 w-24 lg:h-28 lg:w-28 rounded-full bg-bg shadow-elevated flex items-center justify-center border-4 border-bg">
                  <AnimatePresence mode="wait">
                    {STEP_ICONS.map((Icon, i) => {
                      if (i !== activeStep) return null;
                      return (
                        <motion.span
                          key={i}
                          initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
                          animate={{ scale: 1, opacity: 1, rotate: 0 }}
                          exit={{ scale: 0.5, opacity: 0, rotate: 15 }}
                          transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <Icon size={40} strokeWidth={1.5} className="text-forest" />
                        </motion.span>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling timeline */}
          <ol className="lg:col-span-7 relative">
            {/* Vertical guide line */}
            <span
              aria-hidden
              className="absolute left-[1.375rem] top-6 bottom-6 w-px bg-line"
            />
            {m.pillars.map((pillar, i) => (
              <Step
                key={pillar.n}
                pillar={pillar}
                index={i}
                isActive={activeStep === i}
                onEnterView={() => setActiveStep(i)}
                isLast={i === m.pillars.length - 1}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Step({
  pillar,
  index,
  isActive,
  onEnterView,
  isLast,
}: {
  pillar: { n: string; name: string; body: string };
  index: number;
  isActive: boolean;
  onEnterView: () => void;
  isLast: boolean;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { amount: 0.55, margin: "-40% 0px -35% 0px" });

  if (inView && !isActive) onEnterView();

  return (
    <li
      ref={ref}
      className={cn(
        "relative flex gap-6 transition-opacity duration-500",
        isLast ? "pb-2" : "pb-20 lg:pb-32",
        !isActive && "opacity-50"
      )}
    >
      {/* Step indicator */}
      <div className="relative shrink-0">
        <motion.div
          animate={{
            backgroundColor: isActive ? "#B8623E" : "#F4F1EB",
            borderColor: isActive ? "#B8623E" : "#E0DBD0",
            scale: isActive ? 1.05 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative z-10 h-11 w-11 rounded-full border-2 flex items-center justify-center font-display font-bold tabular-nums"
        >
          <motion.span
            animate={{ color: isActive ? "#FFFFFF" : "#6B6F66" }}
            transition={{ duration: 0.3 }}
            className="text-sm"
          >
            {String(index + 1)}
          </motion.span>
        </motion.div>
      </div>

      <div className="flex-1 pt-1.5">
        <motion.h3
          animate={{
            color: isActive ? "#1C1F1B" : "#6B6F66",
          }}
          transition={{ duration: 0.4 }}
          className="font-display font-bold text-2xl lg:text-3xl tracking-tight"
        >
          {pillar.name}
        </motion.h3>
        <motion.p
          animate={{ opacity: isActive ? 1 : 0.7 }}
          transition={{ duration: 0.4 }}
          className="mt-4 text-body-long text-ink-muted text-pretty"
        >
          {pillar.body}
        </motion.p>
      </div>
    </li>
  );
}
