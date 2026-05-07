import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, localBusinessSchema, breadcrumbSchema } from "@/lib/seo";
import content from "@/content/site-content.json";

export const metadata: Metadata = buildMetadata({
  title: content.partner_page.meta_title,
  description: content.partner_page.meta_description,
  path: "/partner",
});

export default function PartnerPage() {
  const p = content.partner_page;
  return (
    <>
      <JsonLd
        schemas={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Partner With Us", url: "/partner" },
          ]),
        ]}
      />
      <PageHero eyebrow="For Partners · Investment Opportunity" title={p.h1} subtitle={p.intro} />

      <section className="py-16 lg:py-24">
        <div className="container-prose">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {p.thesis_blocks.map((block, i) => (
              <div key={block.title} className="relative">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-display font-bold text-clay text-xl tabular-nums">
                    0{i + 1}
                  </span>
                  <h2 className="font-display font-bold text-2xl lg:text-3xl text-ink tracking-tight">
                    {block.title}
                  </h2>
                </div>
                <p className="text-body-long text-ink-muted text-pretty">{block.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 lg:mt-32 rounded-xl bg-section-dark text-section-dark-text p-10 lg:p-16">
            <p className="eyebrow text-clay">Conversation, on your terms</p>
            <h3 className="mt-4 font-display font-bold text-3xl lg:text-4xl text-balance">
              We&apos;re inviting a small number of conversations.
            </h3>
            <p className="mt-6 max-w-2xl text-body-long text-section-dark-text/80">
              If you&apos;d like the deck, the financial model, and a private call with
              Yomi, request the materials below. We will reply within one business
              day.
            </p>
            <Link href={p.cta.href} className="btn-primary mt-8 bg-clay hover:bg-clay-deep">
              {p.cta.label} <ArrowRight size={16} aria-hidden />
            </Link>
            <p className="mt-6 text-xs text-section-dark-text/55 max-w-xl">
              Note: This page is for informational purposes only. Nothing on this
              site constitutes an offer to sell or a solicitation of an offer to
              buy securities. Materials shared post-NDA include a private placement
              memorandum where applicable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
