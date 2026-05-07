import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Imagery from "@/components/Imagery";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, localBusinessSchema, breadcrumbSchema } from "@/lib/seo";
import content from "@/content/site-content.json";

export const metadata: Metadata = buildMetadata({
  title: content.the_residence_page.meta_title,
  description: content.the_residence_page.meta_description,
  path: "/the-residence",
});

const variants: Array<"residence-exterior" | "residence-interior" | "residence-bedroom" | "residence-porch"> = [
  "residence-exterior",
  "residence-interior",
  "residence-bedroom",
  "residence-porch",
];

export default function TheResidencePage() {
  const p = content.the_residence_page;
  return (
    <>
      <JsonLd
        schemas={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "The Residence", url: "/the-residence" },
          ]),
        ]}
      />
      <PageHero eyebrow="The Residence" title={p.h1} subtitle={p.intro} />

      <section className="py-16 lg:py-24">
        <div className="container-prose">
          <div className="space-y-24 lg:space-y-32">
            {p.sections.map((s, i) => {
              const flip = i % 2 === 1;
              const variant = variants[i % variants.length];
              return (
                <div
                  key={s.title}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    flip ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="lg:col-span-7">
                    <Imagery
                      variant={variant}
                      alt={s.title}
                      className="aspect-[5/4] rounded-xl shadow-card"
                    />
                  </div>
                  <div className="lg:col-span-5">
                    <p className="eyebrow">0{i + 1}</p>
                    <h2 className="mt-4 font-display font-bold text-h2 text-ink text-balance">
                      {s.title}
                    </h2>
                    <p className="mt-6 text-body-long text-ink-muted text-pretty">{s.body}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-24 lg:mt-32 text-center">
            <h3 className="font-display font-bold text-3xl lg:text-4xl text-ink text-balance">
              The home is the program.
            </h3>
            <p className="mt-6 max-w-xl mx-auto text-body-long text-ink-muted">
              When you&apos;re ready, I&apos;d like to walk you through it personally — in
              person or on a private video tour.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Inquire about availability
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
