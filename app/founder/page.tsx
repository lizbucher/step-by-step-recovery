import type { Metadata } from "next";
import Link from "next/link";
import Imagery from "@/components/Imagery";
import { JsonLd } from "@/components/JsonLd";
import {
  buildMetadata,
  localBusinessSchema,
  personSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import content from "@/content/site-content.json";

export const metadata: Metadata = buildMetadata({
  title: content.founder_page.meta_title,
  description: content.founder_page.meta_description,
  path: "/founder",
});

export default function FounderPage() {
  const p = content.founder_page;
  return (
    <>
      <JsonLd
        schemas={[
          localBusinessSchema(),
          personSchema("Yomi Martin", "Founder, Step by Step Treatment and Recovery Centers"),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Founder", url: "/founder" },
          ]),
        ]}
      />

      <section className="pt-12 lg:pt-20 pb-16 lg:pb-24">
        <div className="container-prose">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-1 lg:order-2">
              <Imagery
                variant="founder"
                alt="Yomi Martin, founder of Step by Step"
                className="aspect-[4/5] rounded-xl shadow-elevated"
              />
            </div>
            <div className="lg:col-span-7 order-2 lg:order-1">
              <p className="eyebrow">Founder</p>
              <h1 className="mt-5 font-display font-bold text-h1 text-ink text-balance">
                {p.h1}
              </h1>
              <p className="mt-8 text-body-long text-ink-muted text-pretty">{p.intro}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-narrow space-y-8">
          <h2 className="font-display font-bold text-h2 text-ink text-balance">
            What I&apos;ve learned, that I&apos;ve built into Step by Step.
          </h2>
          <div className="space-y-6 text-body-long text-ink/90">
            <p>
              I&apos;ve spent fifteen years inside this work — in clinical settings, in
              recovery housing, in the part of the field that doesn&apos;t make brochures.
              The pattern that broke my heart most was the one I saw repeatedly: a
              resident finishes thirty days, leaves a structured environment, and
              within ninety days is back where they started — not because the work
              didn&apos;t take, but because there was no bridge.
            </p>
            <p>
              The bridge is a residence. A home that is dignified, structured, small
              enough to be human, and present long enough to count. That is what
              Step by Step is.
            </p>
            <p>
              I picked St. Louis because it&apos;s where I am from and where I have spent
              my professional life. I know the neighborhoods, the clinical
              ecosystem, the families. I picked a single home — not a campus —
              because intimacy is a design choice that protects outcomes. I picked a
              modern, residential setting — not an institutional building — because
              the space communicates something every resident needs to hear: you
              are worth this.
            </p>
            <p>
              I run this house myself. I&apos;m in the building every week. I take
              every family call. I read every inquiry that comes through the form
              on this site. That is the brand promise.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-narrow">
          <div className="rounded-xl border border-line bg-surface px-8 py-10 lg:px-12 lg:py-14 shadow-card">
            <p className="eyebrow">A standing offer</p>
            <h3 className="mt-4 font-display font-bold text-3xl lg:text-4xl text-ink text-balance">
              If you&apos;re considering Step by Step, the first conversation is mine.
            </h3>
            <p className="mt-6 text-body-long text-ink-muted">{p.standing_offer}</p>
            <Link href="/contact" className="btn-primary mt-8">
              Reach me directly
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
