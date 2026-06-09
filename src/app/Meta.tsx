// ============================================================================
// 🔍 Meta.tsx — Centralized SEO & Metadata Configuration (2026 Optimized)
// ============================================================================
//
// This file exports the complete Next.js Metadata object for the portfolio.
// It is imported by layout.tsx and applied globally via the App Router.
//
// Next.js 15+ best practices:
//   - Use the `Metadata` type from "next" (not the deprecated Head component).
//   - `metadataBase` is required for resolving relative OG image URLs.
//   - The `opengraph-image.tsx` route file auto-generates the OG image;
//     we reference it here via relative path so Next.js resolves it correctly.
//   - Structured data (JSON-LD) is exported separately for use in layout.tsx.
//
// 2026 SEO Enhancements:
//   - Google E-E-A-T signals via comprehensive Person schema
//   - ProfilePage JSON-LD for personal branding (Google supports since 2024)
//   - Social profile discovery: LinkedIn, GitHub, Instagram, X
//   - Recruiter-optimized keywords and description
//   - Geographic targeting with GeoCoordinates for local search
//   - Enhanced Open Graph with profile namespace for LinkedIn optimization
//   - Verification meta tags for Google, Bing, and Yandex
//
// References:
//   https://nextjs.org/docs/app/api-reference/functions/generate-metadata
//   https://nextjs.org/docs/app/api-reference/file-conventions/metadata
//   https://schema.org/Person
//   https://schema.org/ProfilePage
//   https://developers.google.com/search/docs/appearance/structured-data
// ============================================================================

import type { Metadata } from "next";
import { DATA } from "@/data/resume";

// ── Constants ────────────────────────────────────────────────────────────────

/** Canonical site URL — used as the base for all metadata URL resolutions. */
const SITE_URL = DATA.url; // "https://hemantsonkar.dev"

/**
 * Primary title — optimized for both SERP click-through and recruiter search.
 *
 * Format: "Name — Primary Role | Secondary Role"
 * - Keeps name first for branded searches
 * - Pipe-separated roles maximize keyword matching
 * - Under 60 characters to avoid SERP truncation
 */
const TITLE = "Hemant Sonkar — Full Stack Developer | AI Engineer";

/**
 * Meta description — optimized for SERP display (under 155 chars ideal).
 *
 * Strategy:
 * - Leads with role + specialization (matches recruiter queries)
 * - Includes top 5 tech stack keywords naturally
 * - Ends with a call-to-action (open for opportunities)
 * - Avoids keyword stuffing; reads like a human-written sentence
 *
 * ⚠️ Google may rewrite this in SERPs, but a well-crafted description
 *    still influences click-through rate and social share previews.
 */
const DESCRIPTION =
  "Hemant Sonkar — Full Stack Developer & AI Engineer specializing in Python, Django, React, Next.js, and TypeScript. Building scalable web apps, REST APIs, and AI-powered solutions. Open for freelance & full-time roles.";

/**
 * SEO keywords — strategically organized by search intent.
 *
 * 2026 Note: Google officially ignores the keywords meta tag for ranking,
 * but other engines (Bing, Yandex, DuckDuckGo) still use them as signals.
 * They also help with internal site search and content classification.
 *
 * Categories:
 *   • Branded — name variations recruiters might search
 *   • Role — job title variations for LinkedIn/job board cross-referencing
 *   • Technology — specific stack keywords for technical recruiters
 *   • AI/ML — emerging skills that differentiate from generic developers
 *   • Service — client-intent searches (hire, freelance)
 *   • Location — geographic targeting for local opportunities
 */
const KEYWORDS: string[] = [
  // ── Branded & Identity ──
  // Recruiters often search by name + role after seeing LinkedIn profiles
  "Hemant Sonkar",
  "Hemant Sonkar developer",
  "Hemant Sonkar portfolio",
  "hemantsonkar.dev",

  // ── Role Keywords (Recruiter Searches) ──
  // Maps to LinkedIn job title fields and ATS keyword matching
  "Full Stack Developer",
  "AI Engineer",
  "Software Developer",
  "Software Engineer",
  "Web Developer",
  "Python Developer",
  "Django Developer",
  "React Developer",
  "Next.js Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Engineer",

  // ── Core Technologies ──
  // Matches technical recruiter boolean searches: "Python AND Django AND React"
  "Python",
  "Django",
  "Django REST Framework",
  "JavaScript",
  "TypeScript",
  "React",
  "React.js",
  "Next.js",
  "Node.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",

  // ── Databases & Infrastructure ──
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Git",
  "GitHub",
  "REST API",
  "GraphQL",
  "CI/CD",

  // ── AI & Machine Learning ──
  // High-demand keywords in 2026; differentiators from standard devs
  "AI Development",
  "Machine Learning",
  "LangChain",
  "RAG Systems",
  "AI Agents",
  "LLM",
  "Large Language Models",
  "CrewAI",
  "OpenAI API",

  // ── Services & Client Intent ──
  "Developer Portfolio",
  "Software Engineer Portfolio",
  "Freelance Developer",
  "Hire Full Stack Developer",
  "Hire Python Developer",
  "Web Application Development",

  // ── Location (Local SEO) ──
  "Lucknow",
  "India",
  "Developer in Lucknow",
  "Developer in India",

  // ── Dynamic Skills & Categories from DATA ──
  ...DATA.skills.map((s) => s.name),
  ...DATA.skillCategories.flatMap((c) => c.items),
  ...DATA.skills.map((s) => `${s.name} Developer`),
  ...DATA.skills.map((s) => `${s.name} Engineer`),
  ...DATA.skills.map((s) => `${s.name} Architect`),
].filter((value, index, self) => self.indexOf(value) === index);

// ============================================================================
// 📦 METADATA EXPORT — Next.js App Router Metadata Object
// ============================================================================

/**
 * The complete Metadata object for the portfolio site.
 *
 * This is the single source of truth for all <head> metadata.
 * Next.js merges this with any page-level metadata overrides automatically.
 */
export const siteMetadata: Metadata = {
  // ── Base URL ─────────────────────────────────────────────────────────────
  // Required for resolving relative URLs in OG images, alternates, etc.
  // Without this, relative paths like "/opengraph-image" won't resolve.
  metadataBase: new URL(SITE_URL),

  // ── Title Configuration ──────────────────────────────────────────────────
  // `default` is used when a page doesn't specify its own title.
  // `template` wraps page-specific titles: e.g., "Blog | Hemant Sonkar"
  title: {
    default: TITLE,
    template: `%s | ${DATA.name}`,
  },

  // ── Description ──────────────────────────────────────────────────────────
  // Shown in Google search results, social share previews, and browser
  // bookmark descriptions. Keep under 155 chars for full SERP display.
  description: DESCRIPTION,

  // ── Keywords ─────────────────────────────────────────────────────────────
  // Supplementary signal for non-Google engines and content classification.
  keywords: KEYWORDS,

  // ── Author & Creator ─────────────────────────────────────────────────────
  // Identifies content ownership — important for:
  // - Google Knowledge Panel candidate signals
  // - E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
  // - News/article schema authorship attribution
  authors: [
    {
      name: DATA.name,
      url: SITE_URL,
    },
  ],
  creator: DATA.name,
  publisher: DATA.name,

  // ── Robots Directives ────────────────────────────────────────────────────
  // Fine-grained control over how search engines crawl and index the site.
  // These directives work alongside robots.txt for comprehensive control.
  robots: {
    index: true,     // Allow pages to appear in search results
    follow: true,    // Allow crawlers to follow outbound links
    nocache: false,  // Allow cached versions in search results (good for SEO)
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,              // Allow image indexing (portfolio images!)
      "max-video-preview": -1,         // No limit on video preview length
      "max-image-preview": "large",    // Allow large image previews in SERP
      "max-snippet": -1,               // No limit on text snippet length
    },
  },

  // ── Canonical & Alternate URLs ───────────────────────────────────────────
  // Prevents duplicate content issues and declares the canonical version.
  // Critical for SEO — search engines consolidate ranking signals here.
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
    },
  },

  // ── Open Graph (LinkedIn, Facebook, WhatsApp, Discord, Slack) ───────────
  // Controls how the site appears when shared on social platforms.
  // Set type to "profile" and declare profile details for rich snippets.
  openGraph: {
    type: "profile",
    firstName: "Hemant",
    lastName: "Sonkar",
    username: "officialhemant001",
    gender: "male",
    locale: "en_US",
    url: SITE_URL,
    siteName: `${DATA.name} — Portfolio`,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",  // Resolved by Next.js opengraph-image.tsx
        width: 1200,
        height: 630,
        alt: `${DATA.name} — Full Stack Developer & AI Engineer | Portfolio`,
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────
  // Controls how the site appears when shared on X (formerly Twitter).
  // `summary_large_image` shows a large preview card — best for portfolios.
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@Hemantsonkar001",
    site: "@Hemantsonkar001",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${DATA.name} — Full Stack Developer & AI Engineer | Portfolio`,
      },
    ],
  },

  // ── Favicon & Icons ──────────────────────────────────────────────────────
  // Provides icons for browser tabs, bookmarks, PWA installs, and Apple devices.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon.ico", sizes: "180x180", type: "image/x-icon" },
    ],
  },

  // ── Verification Tags ────────────────────────────────────────────────────
  // Proves site ownership to search engines for their webmaster tools.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification-placeholder",
    yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION || "yandex-verification-placeholder",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "bing-verification-placeholder",
    },
  },

  // ── Additional Meta Tags ─────────────────────────────────────────────────
  // Category helps some search engines classify the site.
  category: "technology",

  // ── Application Name ─────────────────────────────────────────────────────
  // Shown in browser tab tooltips and PWA install prompts.
  applicationName: `${DATA.name} Portfolio`,

  // ── Referrer Policy ──────────────────────────────────────────────────────
  // Controls how much referrer info is sent when navigating away.
  // "origin-when-cross-origin" sends full URL for same-origin, only origin
  // for cross-origin — good balance of analytics vs. privacy.
  referrer: "origin-when-cross-origin",

  // ── Format Detection ─────────────────────────────────────────────────────
  // Prevents mobile browsers from auto-detecting and styling phone numbers,
  // dates, emails, and addresses.
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ── Additional Meta Tags via other ───────────────────────────────────────
  // These custom meta tags provide additional SEO and discovery signals.
  other: {
    // ── Theme Color ──
    "theme-color": "#000000",

    // ── Prevent Google Translate ──
    "google": "notranslate",

    // ── Geographic Meta Tags ──
    "geo.region": "IN-UP",
    "geo.placename": "Lucknow",
    "geo.position": "26.8467;80.9462",
    "ICBM": "26.8467, 80.9462",

    // ── Profile / Identity Discovery ──
    "profile:username": "officialhemant001",
  },
};

// ============================================================================
// 🏗️ JSON-LD STRUCTURED DATA — Schema.org Markup (2026 Enhanced)
// ============================================================================
//
// Structured data helps search engines understand the site's content and
// can trigger rich results (Knowledge Panel, sitelinks, etc.) in Google.
//
// This version includes:
//   1. Person — Primary entity for Knowledge Panel & E-E-A-T signals
//   2. WebSite — Enables sitelinks search box in Google results
//   3. ProfilePage — Google's preferred schema for portfolio/about pages
//   4. BreadcrumbList — Enables navigation trails in search results
//   5. CollectionPage — Represents the projects collection index page
//   6. SoftwareApplication / CreativeWork — Dynamic projects markup
//
// The @graph approach links all schemas together with @id references,
// creating a connected knowledge graph for search engines.
// ============================================================================

/**
 * JSON-LD structured data combining Person, WebSite, ProfilePage,
 * BreadcrumbList, CollectionPage, and individual SoftwareApplication schemas.
 */
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // ── Person Schema ────────────────────────────────────────────────────
    // The core entity — everything else references this.
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: DATA.name,
      givenName: "Hemant",
      familyName: "Sonkar",
      url: SITE_URL,
      image: {
        "@type": "ImageObject",
        url: `${SITE_URL}/me.jpeg`,
        width: 400,
        height: 400,
        caption: `${DATA.name} — Full Stack Developer & AI Engineer`,
      },
      jobTitle: "Full Stack Developer & AI Engineer",
      description: DESCRIPTION,
      email: DATA.contact.email,
      telephone: DATA.contact.tel,

      // ── Location ──
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },

      // ── Social Profiles (sameAs) ──
      // Dynamic resolution from profile links
      sameAs: [
        ...Object.values(DATA.contact.social)
          .map((s) => s.url)
          .filter((url) => url && !url.startsWith("mailto:")),
        "https://www.instagram.com/hemant_.112/",
        "https://www.facebook.com/share/1DFNQSg8Dj/",
      ].filter((value, index, self) => self.indexOf(value) === index),

      // ── Skills / Expertise (Dynamic) ──
      knowsAbout: [
        "Full Stack Development",
        "Software Engineering",
        "AI Engineering",
        ...DATA.skills.map((s) => s.name),
        ...DATA.skillCategories.flatMap((c) => c.items),
      ].filter((value, index, self) => self.indexOf(value) === index),

      // ── Education ──
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Khwaja Moinuddin Chishti Language University",
        url: "https://kmclu.ac.in/",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lucknow",
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN",
        },
      },

      // ── Work Experience ──
      worksFor: {
        "@type": "Organization",
        name: "Techpile",
      },

      // ── Nationality ──
      nationality: {
        "@type": "Country",
        name: "India",
      },
    },

    // ── WebSite Schema ───────────────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${DATA.name} — Portfolio`,
      description: DESCRIPTION,
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: "en-US",
    },

    // ── ProfilePage Schema ───────────────────────────────────────────────
    // Google's ProfilePage type (supported since April 2024).
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: `${DATA.name} — Portfolio`,
      description: DESCRIPTION,
      mainEntity: {
        "@id": `${SITE_URL}/#person`,
      },
      // dateCreated and dateModified help Google understand freshness
      dateCreated: "2025-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      inLanguage: "en-US",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
    },

    // ── BreadcrumbList Schema ───────────────────────────────────────────
    // Helps search engines understand navigation trails
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${SITE_URL}/blog`,
        },
      ],
    },

    // ── CollectionPage Schema (Projects Portfolio) ───────────────────────
    // Tells Google this site contains a curated collection of work samples.
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/#portfolio`,
      url: SITE_URL,
      name: `${DATA.name} — Projects & Portfolio`,
      description: `Portfolio of web development and AI projects by ${DATA.name}. Featuring full-stack applications built with Python, Django, React, and Next.js.`,
      creator: {
        "@id": `${SITE_URL}/#person`,
      },
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      inLanguage: "en-US",
      hasPart: DATA.projects.map((project) => ({
        "@id": `${SITE_URL}/#project-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      })),
    },

    // ── SoftwareApplication / CreativeWork for Projects (Dynamic) ───────
    // Injects all personal projects into the page-level Knowledge Graph
    ...DATA.projects.map((project) => ({
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#project-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      name: project.title,
      description: project.description,
      applicationCategory: project.technologies.some((t) =>
        /AI|Agent|LLM|LangChain|Learning|NLP/i.test(t)
      )
        ? "Artificial Intelligence Application"
        : "DeveloperApplication",
      operatingSystem: "All",
      url: project.href && project.href !== "#" ? project.href : SITE_URL,
      author: {
        "@id": `${SITE_URL}/#person`,
      },
      creator: {
        "@id": `${SITE_URL}/#person`,
      },
      ...(project.image && {
        screenshot: project.image.startsWith("http")
          ? project.image
          : `${SITE_URL}${project.image}`,
      }),
      softwareRequirements: project.technologies.join(", "),
      inLanguage: "en-US",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
    })),
  ],
};
