import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { JsonLd } from "@/components/JsonLd";
import {
  buildMetadata,
  localBusinessSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import faq from "@/content/faq.json";

export const metadata: Metadata = buildMetadata({
  title: faq.page_meta.title,
  description: faq.page_meta.description,
  path: "/faq",
});

export default function FaqPage() {
  const grouped = faq.faqs.reduce<Record<string, typeof faq.faqs>>((acc, item) => {
    (acc[item.category] ??= []).push(item);
    return acc;
  }, {});
  return (
    <>
      <JsonLd
        schemas={[
          localBusinessSchema(),
          faqPageSchema(faq.faqs.map((f) => ({ q: f.q, a: f.a }))),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "FAQ", url: "/faq" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Frequently Asked"
        title="Questions, answered honestly."
        subtitle="Plain-English answers to the questions families, residents, and referring professionals most often ask."
      />

      <section className="py-12 lg:py-20">
        <div className="container-narrow space-y-16">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category}>
              <p className="eyebrow">{category}</p>
              <div className="mt-6 divide-y divide-line border-y border-line">
                {items.map((item) => (
                  <details
                    key={item.q}
                    className="group py-6 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                      <h2 className="font-display font-semibold text-lg lg:text-xl text-ink leading-snug">
                        {item.q}
                      </h2>
                      <span
                        className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-line text-ink-muted transition-transform duration-300 ease-smooth group-open:rotate-45 group-open:border-forest group-open:text-forest"
                        aria-hidden
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1.5V10.5M1.5 6H10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 max-w-2xl text-body-long text-ink-muted text-pretty">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center pt-8">
            <p className="text-body-long text-ink-muted">
              Have a question that isn&apos;t here?
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Send a private inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
