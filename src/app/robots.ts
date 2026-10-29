import { MetadataRoute } from "next";
import { DATA } from "@/data/resume";

/**
 * Programmatic Robots.txt Generator (Next.js App Router)
 *
 * This function dynamically generates robots.txt at runtime or build time.
 * It specifies crawl rules and links the generated sitemap.xml.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = DATA.url; // "https://hemantfolio.in.vercel.app"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
