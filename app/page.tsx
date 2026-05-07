import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Residence from "@/components/sections/Residence";
import Lifestyle from "@/components/sections/Lifestyle";
import Marquee from "@/components/sections/Marquee";
import Method from "@/components/sections/Method";
import Why from "@/components/sections/Why";
import InvestmentTeaser from "@/components/sections/InvestmentTeaser";
import Inquiry from "@/components/sections/Inquiry";
import { JsonLd } from "@/components/JsonLd";
import {
  buildMetadata,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
  breadcrumbSchema,
} from "@/lib/seo";
import content from "@/content/site-content.json";

export const metadata: Metadata = buildMetadata({
  title: content.homepage.meta_title,
  description: content.homepage.meta_description,
  path: "/",
  keywords: [
    "sober living St. Louis",
    "boutique sober living",
    "private-pay recovery housing",
    "St. Louis recovery residence",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        schemas={[
          localBusinessSchema(),
          organizationSchema(),
          websiteSchema(),
          breadcrumbSchema([{ name: "Home", url: "/" }]),
        ]}
      />
      <Hero />
      <TrustStrip />
      <Residence />
      <Lifestyle />
      <Marquee />
      <Method />
      <Why />
      <InvestmentTeaser />
      <Inquiry />
    </>
  );
}
