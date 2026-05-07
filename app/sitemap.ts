import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import manifest from "@/project-manifest.json";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return manifest.sitemap.map((entry) => ({
    url: `${SITE_URL}${entry.path === "/" ? "" : entry.path}`,
    lastModified: new Date(),
    changeFrequency: entry.changefreq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: entry.priority,
  }));
}
