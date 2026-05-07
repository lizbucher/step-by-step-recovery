import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Imagery from "@/components/Imagery";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, localBusinessSchema, breadcrumbSchema } from "@/lib/seo";
import content from "@/content/site-content.json";

export const metadata: Metadata = buildMetadata({
  title: content.families_page.meta_title,
  description: content.families_page.meta_description,
  path: "/families",
});

const sections = [
  {
    title: "We assume you're involved.",
    body:
      "Default communication is weekly family check-ins for the first thirty days, then a cadence the resident chooses. If your loved one declines family contact and is over 18, we will respect that — and we will tell you, kindly and clearly.",
  },
  {
    title: "What happens when there's a crisis.",
    body:
      "Crisis-level events are escalated to the family same-day, with a clear plan. We will not surprise you a week later with something you should have known on Tuesday.",
  },
  {
    title: "Visits, after the first month.",
    body:
      "After the first thirty days, scheduled family visits are welcome. Many families have told me they were quietly surprised by how much the residence felt like a home — and I take that as the highest review the building can earn.",
  },
  {
    title: "What we don't promise.",
    body:
      "We don't promise outcomes. We don't promise the next ninety days will be easy. We promise a residence run with intent, a founder who is present, and a house culture that takes recovery seriously without losing the humanity inside it.",
  },
];

export default function FamiliesPage() {
  const p = content.families_page;
  return (
    <>
      <JsonLd
        schemas={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "For Families", url: "/families" },
          ]),
        ]}
      />
      <PageHero eyebrow="For Families" title={p.h1} subtitle={p.intro} />

      <section className="py-16 lg:py-24">
        <div className="container-prose">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Imagery
                variant="abstract-bloom"
                alt="A still moment in the home"
                className="aspect-square rounded-xl"
              />
            </div>
            <div className="lg:col-span-7 space-y-12">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="font-display font-bold text-h3 text-ink">{s.title}</h2>
                  <p className="mt-4 text-body-long text-ink-muted text-pretty">{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 text-center">
            <h3 className="font-display font-bold text-3xl lg:text-4xl text-ink text-balance max-w-2xl mx-auto">
              When you&apos;re ready, the first call is with me.
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
