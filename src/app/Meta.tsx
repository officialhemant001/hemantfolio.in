// ============================================================================
// 🔍 Meta.tsx — Centralized SEO & Metadata Configuration
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
// References:
//   https://nextjs.org/docs/app/api-reference/functions/generate-metadata
//   https://nextjs.org/docs/app/api-reference/file-conventions/metadata
// ============================================================================

import type { Metadata } from "next";
import { DATA } from "@/data/resume";

// ── Constants ────────────────────────────────────────────────────────────────

/** Canonical site URL — used as the base for all metadata URL resolutions. */
const SITE_URL = DATA.url; // "https://hemantsonkar.dev"

/** Primary title shown in browser tabs, search results, and social shares. */
const TITLE = `${DATA.name} — Full Stack Developer & AI Engineer`;

/**
 * Meta description — kept under 160 characters for optimal SERP display.
 * Targets recruiter & client search intent with high-value keywords.
 */
const DESCRIPTION =
  "Hemant Sonkar is a Full Stack Developer & AI Engineer specializing in Python, Django, React, Next.js, and TypeScript. Building scalable web applications, REST APIs, and AI-powered solutions. Open to freelance projects and full-time opportunities.";

/**
 * SEO keywords — a curated mix of:
 *   • Role keywords (recruiter searches)
 *   • Technology keywords (technical searches)
 *   • Service keywords (client searches)
 *   • Location keywords (local intent)
 */
const KEYWORDS: string[] = [
  // ── Role & Identity ──
  "Hemant Sonkar",
  "Full Stack Developer",
  "AI Engineer",
  "Software Developer",
  "Web Developer",
  "Python Developer",
  "Django Developer",
  "React Developer",
  "Frontend Developer",
  "Backend Developer",

  // ── Core Technologies ──
  "Python",
  "Django",
  "Django REST Framework",
  "JavaScript",
  "TypeScript",
  "React",
  "React.js",
  "Next.js",
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",

  // ── Databases & DevOps ──
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "REST API",
  "GraphQL",

  // ── AI & ML ──
  "AI Development",
  "Machine Learning",
  "LangChain",
  "RAG Systems",
  "AI Agents",

  // ── Services & Intent ──
  "Portfolio",
  "Freelance Developer",
  "Web Application Development",
  "Hire Full Stack Developer",
  "Developer Portfolio",
  "Software Engineer Portfolio",

  // ── Location ──
  "Lucknow",
  "India",
];

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
  metadataBase: new URL(SITE_URL),

  // ── Title Configuration ──────────────────────────────────────────────────
  // `default` is used when a page doesn't specify its own title.
  // `template` wraps page-specific titles: "Blog | Hemant Sonkar"
  title: {
    default: TITLE,
    template: `%s | ${DATA.name}`,
  },

  // ── Description ──────────────────────────────────────────────────────────
  // Shown in Google search results and social share previews.
  description: DESCRIPTION,

  // ── Keywords ─────────────────────────────────────────────────────────────
  // While less weighted by modern search engines, keywords still help
  // with relevance signals and are used by some crawlers.
  keywords: KEYWORDS,

  // ── Author & Creator ─────────────────────────────────────────────────────
  // Identifies content ownership — important for Google Knowledge Panel.
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
  robots: {
    index: true,     // Allow pages to appear in search results
    follow: true,    // Allow crawlers to follow links
    nocache: false,  // Allow cached versions in search results
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,              // Allow image indexing
      "max-video-preview": -1,         // No limit on video preview length
      "max-image-preview": "large",    // Allow large image previews in SERP
      "max-snippet": -1,               // No limit on text snippet length
    },
  },

  // ── Canonical & Alternate URLs ───────────────────────────────────────────
  // Prevents duplicate content issues and declares the canonical version.
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
    },
  },

  // ── Open Graph (Facebook, LinkedIn, Discord, etc.) ───────────────────────
  // Controls how the site appears when shared on social platforms.
  // The actual image is auto-generated by `opengraph-image.tsx`.
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: DATA.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",  // Resolved by Next.js opengraph-image.tsx
        width: 1200,
        height: 630,
        alt: `${DATA.name} — Full Stack Developer & AI Engineer Portfolio`,
        type: "image/png",
      },
    ],
  },

  // ── Twitter Card ─────────────────────────────────────────────────────────
  // Controls how the site appears when shared on X (Twitter).
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
        alt: `${DATA.name} — Full Stack Developer & AI Engineer Portfolio`,
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


  // ── Additional Meta Tags ─────────────────────────────────────────────────
  // Category helps some search engines classify the site.
  category: "technology",

  // ── Application Name ─────────────────────────────────────────────────────
  // Shown in browser tab tooltips and PWA install prompts.
  applicationName: `${DATA.name} Portfolio`,

  // ── Referrer Policy ──────────────────────────────────────────────────────
  // Controls how much referrer info is sent when navigating away.
  referrer: "origin-when-cross-origin",

  // ── Format Detection ─────────────────────────────────────────────────────
  // Prevents mobile browsers from auto-detecting and styling phone numbers,
  // dates, emails, and addresses — keeps the design consistent.
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// ============================================================================
// 🏗️ JSON-LD STRUCTURED DATA — Schema.org Markup
// ============================================================================
//
// Structured data helps search engines understand the site's content and
// can trigger rich results (Knowledge Panel, sitelinks, etc.) in Google.
//
// This is rendered as a <script type="application/ld+json"> tag in layout.tsx.
// ============================================================================

/**
 * JSON-LD structured data combining Person and WebSite schemas.
 *
 * - `Person` schema: Helps Google build a Knowledge Panel for Hemant.
 * - `WebSite` schema: Enables sitelinks search box in Google results.
 */
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: DATA.name,
      url: SITE_URL,
      image: `${SITE_URL}/me.jpeg`,
      jobTitle: "Full Stack Developer & AI Engineer",
      description: DESCRIPTION,
      email: DATA.contact.email,
      telephone: DATA.contact.tel,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressCountry: "IN",
      },
      sameAs: [
        DATA.contact.social.GitHub.url,
        DATA.contact.social.LinkedIn.url,
        DATA.contact.social.X.url,
      ],
      knowsAbout: [
        "Python",
        "Django",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "HTML",
        "CSS",
        "Bootstrap",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "REST API",
        "AI Development",
        "Machine Learning",
        "Full Stack Development",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Khwaja Moinuddin Chishti Language University",
        url: "https://kmclu.ac.in/",
      },
    },
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
  ],
};
