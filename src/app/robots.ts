import { MetadataRoute } from "next";
import { DATA } from "@/data/resume";

/**
 * Programmatic Robots.txt Generator (Next.js App Router)
 *
 * This function dynamically generates robots.txt at runtime or build time.
 * It specifies crawl rules and links the generated sitemap.xml.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = DATA.url; // "https://hemantsonkar.dev"

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blog", "/introduction", "/notes"],
        disallow: [],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
