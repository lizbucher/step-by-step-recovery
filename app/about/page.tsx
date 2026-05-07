import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Imagery from "@/components/Imagery";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, localBusinessSchema, breadcrumbSchema } from "@/lib/seo";
import content from "@/content/site-content.json";

export const metadata: Metadata = buildMetadata({
  title: content.about_page.meta_title,
  description: content.about_page.meta_description,
  path: "/about",
});

export default function AboutPage() {
  const p = content.about_page;
  return (
    <>
      <JsonLd
        schemas={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
          ]),
        ]}
      />

      <PageHero eyebrow="About" title={p.h1} subtitle={p.intro} />

      <section className="py-12 lg:py-20">
        <div className="container-prose">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <Imagery
                variant="residence-exterior"
                alt="The Step by Step residence in a tree-lined St. Louis neighborhood"
                className="aspect-[4/5] rounded-xl shadow-card"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="font-display font-bold text-h3 text-ink mb-10">{p.values_intro}</p>
              <div className="space-y-12">
                {p.values.map((v, i) => (
                  <div key={v.title} className="relative">
                    <div className="flex items-start gap-5">
                      <span className="number-pill shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h2 className="font-display font-bold text-h3 text-ink">{v.title}</h2>
                        <p className="mt-3 text-body-long text-ink-muted text-pretty">{v.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-24 lg:mt-32 text-center">
            <h3 className="font-display font-bold text-3xl lg:text-4xl text-ink text-balance max-w-2xl mx-auto">
              When you&apos;re ready, the door is open.
            </h3>
            <Link href="/contact" className="btn-primary mt-8">
              Send a private inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
