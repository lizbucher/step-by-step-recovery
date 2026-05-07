import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, localBusinessSchema, breadcrumbSchema } from "@/lib/seo";
import content from "@/content/site-content.json";

export const metadata: Metadata = buildMetadata({
  title: content.the_method_page.meta_title,
  description: content.the_method_page.meta_description,
  path: "/the-method",
});

export default function TheMethodPage() {
  const p = content.the_method_page;
  const pillars = content.homepage.method.pillars;
  return (
    <>
      <JsonLd
        schemas={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Our Approach", url: "/the-method" },
          ]),
        ]}
      />
      <PageHero eyebrow="The Method" title={p.h1} subtitle={p.intro} />

      <section className="py-16 lg:py-24">
        <div className="container-prose">
          <ol className="space-y-16 lg:space-y-24">
            {pillars.map((pillar, i) => (
              <li
                key={pillar.n}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-3">
                  <span className="font-display font-bold text-stat text-clay tabular-nums leading-none">
                    {pillar.n}
                  </span>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="font-display font-bold text-h2 text-ink text-balance">
                    {pillar.name}
                  </h2>
                  <p className="mt-6 max-w-2xl text-body-long text-ink-muted text-pretty">
                    {pillar.body}
                  </p>
                  <p className="mt-6 max-w-2xl text-body-long text-ink-muted text-pretty">
                    {extendedBody(i)}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-24 lg:mt-32 rounded-xl bg-section-dark text-section-dark-text p-10 lg:p-16">
            <p className="eyebrow text-clay">A standing offer</p>
            <h3 className="mt-4 font-display font-bold text-3xl lg:text-4xl text-balance">
              If your client, family member, or you are considering Step by Step, I&apos;d
              like to talk.
            </h3>
            <p className="mt-6 max-w-2xl text-body-long text-section-dark-text/80">
              Inquiry calls are private and unhurried. I read every message
              personally and respond within one business day.
            </p>
            <Link href="/contact" className="btn-primary mt-8 bg-clay hover:bg-clay-deep">
              Inquire about availability
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function extendedBody(i: number) {
  const extras = [
    "Eight is not arbitrary. It is the largest cohort where every resident is known by name, every relapse risk is seen early, and the founder can be present weekly without diluting attention.",
    "Structure means written house norms, weekly accountability one-on-ones, sponsor and step-work expectations, and household responsibilities that aren't negotiable. Not punitive — load-bearing.",
    "We furnished and finished this home as a residence, not as a facility. The communal kitchen has good knives. The porch has chairs that hold up to use. The bedrooms have hotel-quality linens. Everything in the space communicates: you are worth this.",
    "I am in the house every week. I know each resident by name and history. Families have my email and a same-day response standard. The brand isn't a holding company — it is me, in this house, by name.",
    "From the first week we map the 6-month off-ramp: work, education, sponsorship, housing, family. Discharge isn't a goodbye, it's a structured handoff to a sustainable life.",
  ];
  return extras[i] ?? "";
}
