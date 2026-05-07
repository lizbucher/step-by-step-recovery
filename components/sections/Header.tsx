"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import nav from "@/content/navigation.json";
import { cn } from "@/lib/cn";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300 ease-smooth",
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-line/70"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container-prose flex items-center justify-between py-4 lg:py-5">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Step by Step home">
          <span className="inline-block h-9 w-9 rounded-full bg-forest flex items-center justify-center">
            <span className="font-display font-bold text-bg text-base leading-none">S</span>
          </span>
          <span className="font-display font-bold text-ink text-lg tracking-tight leading-none">
            Step by Step
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          {nav.header.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-muted hover:text-ink transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Link href={nav.header_cta.href} className="btn-primary text-sm py-2.5 px-5">
            {nav.header_cta.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line/70 bg-bg">
          <nav aria-label="Mobile" className="container-prose py-6 flex flex-col gap-1">
            {nav.header.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-ink hover:text-forest transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={nav.header_cta.href}
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 self-start"
            >
              {nav.header_cta.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
