import type { Metadata } from "next";

export const SITE_URL = "https://stepbysteprecoverystl.com";
export const BRAND_NAME = "Step by Step Treatment and Recovery Centers";
export const BRAND_SHORT = "Step by Step";
export const LOCALE = "en_US";

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
  type?: "website" | "article";
  keywords?: string[];
}

export function buildMetadata({
  title,
  description,
  path,
  ogImage = "/og-image.png",
  noindex = false,
  type = "website",
  keywords = [],
}: BuildMetadataInput): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    keywords: keywords.length ? keywords.join(", ") : undefined,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: BRAND_SHORT,
      locale: LOCALE,
      images: [{ url: ogImage, width: 1200, height: 630, alt: BRAND_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    "@id": `${SITE_URL}#organization`,
    name: BRAND_NAME,
    alternateName: BRAND_SHORT,
    url: SITE_URL,
    description:
      "A boutique-scale, founder-led sober living residence in St. Louis, Missouri — eight residents, one modern home, real structure for the part of recovery that comes after.",
    image: `${SITE_URL}/og-image.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "St. Louis",
      addressRegion: "MO",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 38.627, longitude: -90.1994 },
    areaServed: [
      { "@type": "City", name: "St. Louis" },
      { "@type": "City", name: "Clayton" },
      { "@type": "City", name: "Webster Groves" },
      { "@type": "City", name: "University City" },
      { "@type": "City", name: "Kirkwood" },
    ],
    priceRange: "$$$",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.svg`,
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND_SHORT,
    url: SITE_URL,
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function personSchema(name: string, role: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: role,
    worksFor: { "@type": "Organization", name: BRAND_NAME },
  };
}

export function faqPageSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
