import { MetadataRoute } from "next";
import { allPosts } from "content-collections";
import { DATA } from "@/data/resume";

/**
 * Programmatic Sitemap Generator (Next.js App Router)
 *
 * This function dynamically generates sitemap.xml.
 * It includes all static pages and dynamically fetches all blog posts.
 * Next.js automatically caches this route according to static export rules.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DATA.url; // "https://hemantsonkar.dev"

  // 1. Static Pages
  const staticRoutes = ["", "/projects", "/blog", "/certificate", "/introduction", "/notes"].map((route) => {
    // Determine the priority and change frequency of different pages
    let priority = 0.8;
    let changeFrequency: "weekly" | "monthly" = "weekly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "weekly";
    } else if (route === "/projects") {
      priority = 0.95;
      changeFrequency = "weekly";
    } else if (route === "/blog") {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (route === "/certificate") {
      priority = 0.85;
      changeFrequency = "monthly";
    } else if (route === "/notes") {
      priority = 0.8;
      changeFrequency = "weekly";
    } else if (route === "/introduction") {
      priority = 0.8;
      changeFrequency = "monthly";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency,
      priority,
    };
  });

  // 2. Dynamic Blog Posts
  const blogRoutes = allPosts.map((post) => {
    const slug = post._meta.path.replace(/\.mdx$/, "");
    return {
      url: `${baseUrl}/blog/${slug}`,
      // Fallback to current date if publishedAt or updatedAt is not present or invalid
      lastModified: post.updatedAt || post.publishedAt || new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...blogRoutes];
}
