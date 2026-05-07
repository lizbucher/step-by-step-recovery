import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found | Step by Step Recovery",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="py-24 lg:py-40">
      <div className="container-narrow text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 font-display font-bold text-h1 text-ink text-balance">
          That page is taking a quiet day.
        </h1>
        <p className="mt-8 text-body-long text-ink-muted text-pretty">
          The link you followed doesn&apos;t lead anywhere on our site. Try the homepage,
          or send a private inquiry and I&apos;ll point you to what you were looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <Link href="/" className="btn-primary">Go home</Link>
          <Link href="/contact" className="btn-ghost">Send an inquiry</Link>
        </div>
      </div>
    </section>
  );
}
