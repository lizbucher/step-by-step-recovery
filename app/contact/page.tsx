import type { Metadata } from "next";
import { Mail, Clock } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import InquiryForm from "@/components/InquiryForm";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, localBusinessSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact & Inquiry | Step by Step Recovery",
  description:
    "Send a private inquiry to Step by Step Treatment and Recovery Centers. Our team reads every message and responds within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        schemas={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Contact & Inquiry"
        title="Tell us what's on your mind."
        subtitle="Whether for yourself, a family member, a client, or a partnership conversation — every inquiry is read by our team and replied to within one business day."
      />

      <section className="pb-24 lg:pb-32">
        <div className="container-prose">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="rounded-xl border border-line bg-surface p-8 lg:p-10 shadow-card">
                <InquiryForm />
              </div>
            </div>

            <aside className="lg:col-span-5 space-y-10">
              <div>
                <p className="eyebrow">Direct lines</p>
                <ul className="mt-5 space-y-5">
                  <li className="flex items-start gap-4">
                    <Mail className="mt-1 text-forest shrink-0" size={20} aria-hidden />
                    <div>
                      <p className="font-display font-semibold text-ink">Email</p>
                      <a
                        href="mailto:hello@stepbysteprecoverystl.com"
                        className="text-ink-muted hover:text-forest transition-colors"
                      >
                        hello@stepbysteprecoverystl.com
                      </a>
                      <p className="text-sm text-ink-subtle mt-1">
                        For all general and resident inquiries
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail className="mt-1 text-forest shrink-0" size={20} aria-hidden />
                    <div>
                      <p className="font-display font-semibold text-ink">For investors & partners</p>
                      <a
                        href="mailto:partners@stepbysteprecoverystl.com"
                        className="text-ink-muted hover:text-forest transition-colors"
                      >
                        partners@stepbysteprecoverystl.com
                      </a>
                      <p className="text-sm text-ink-subtle mt-1">
                        Routed directly to leadership
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock className="mt-1 text-forest shrink-0" size={20} aria-hidden />
                    <div>
                      <p className="font-display font-semibold text-ink">Response time</p>
                      <p className="text-ink-muted">Within one business day.</p>
                      <p className="text-sm text-ink-subtle mt-1">
                        Crisis-level family escalations are same-day.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-clay-soft border border-line p-6">
                <p className="text-sm text-ink/85 text-pretty">
                  <strong className="text-ink">If this is a medical or psychiatric emergency,</strong>{" "}
                  please call <a href="tel:911" className="underline">911</a> or the 988 Suicide
                  & Crisis Lifeline at{" "}
                  <a href="tel:988" className="underline">988</a>. Step by Step is a sober living
                  residence and does not provide emergency medical or psychiatric services.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
