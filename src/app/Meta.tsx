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
  //
  // LinkedIn-specific optimization:
  //   - type "website" is used for the homepage; "profile" is for dedicated
  //     profile pages (LinkedIn reads both)
  //   - Detailed description helps LinkedIn's content preview
  //   - 1200x630 image is the optimal OG image size across all platforms
  //
  // The actual image is auto-generated by `opengraph-image.tsx`.
  openGraph: {
    type: "website",
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
  //
  // Note: Twitter cards also serve as fallback for platforms that don't
  // fully support Open Graph (some messaging apps, forums, etc.)
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
  //
  // Best practice: provide multiple sizes and formats.
  // If you add a proper apple-touch-icon.png (180x180), update this section.
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
  // Replace the placeholder values with your actual verification codes.
  //
  // Get these from:
  //   - Google: https://search.google.com/search-console
  //   - Bing:   https://www.bing.com/webmasters
  //   - Yandex: https://webmaster.yandex.com
  //
  // ⚠️ TODO: Add your real verification codes after deploying
  // verification: {
  //   google: "your-google-site-verification-code",
  //   yandex: "your-yandex-verification-code",
  //   other: {
  //     "msvalidate.01": "your-bing-verification-code",
  //   },
  // },

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
  // dates, emails, and addresses — keeps the design consistent.
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ── Additional Meta Tags via other ───────────────────────────────────────
  // These custom meta tags provide additional SEO and discovery signals.
  //
  // - "theme-color": Controls browser chrome color on mobile
  // - "google": "notranslate" prevents Google from offering translation
  //   (important for a portfolio — you want your exact wording shown)
  // - "geo" tags: Help with local search intent matching
  other: {
    // ── Theme Color ──
    // Sets browser address bar color on mobile for branded experience
    "theme-color": "#000000",

    // ── Prevent Google Translate ──
    // Your portfolio content is intentionally in English; prevent
    // Google from offering to translate it (which can break layouts)
    "google": "notranslate",

    // ── Geographic Meta Tags ──
    // Helps with local SEO and geo-targeted search results
    // Particularly useful for "developer in Lucknow" searches
    "geo.region": "IN-UP",
    "geo.placename": "Lucknow",
    "geo.position": "26.8467;80.9462",
    "ICBM": "26.8467, 80.9462",

    // ── Profile / Identity Discovery ──
    // Helps crawlers associate this site with your social profiles.
    // Some search engines and AI assistants use these for knowledge graphs.
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
//      (launched 2024, increasingly important for personal branding)
//
// The @graph approach links all schemas together with @id references,
// creating a connected knowledge graph for search engines.
//
// This is rendered as a <script type="application/ld+json"> tag in layout.tsx.
// ============================================================================

/**
 * JSON-LD structured data combining Person, WebSite, and ProfilePage schemas.
 *
 * - `Person` schema: Helps Google build a Knowledge Panel for Hemant.
 *   Includes social profiles, skills, education, and work experience.
 *
 * - `WebSite` schema: Enables sitelinks search box in Google results
 *   and establishes the site's identity.
 *
 * - `ProfilePage` schema: Google's newer schema type for personal pages.
 *   Signals that this is an authoritative self-representation.
 *   See: https://developers.google.com/search/docs/appearance/structured-data/profile-page
 */
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // ── Person Schema ────────────────────────────────────────────────────
    // The core entity — everything else references this.
    // This is what Google uses for Knowledge Panel generation.
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
      // PostalAddress with geo coordinates for local search enrichment
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },

      // ── Social Profiles (sameAs) ──
      // CRITICAL for cross-platform identity verification.
      // Google uses sameAs to:
      //   1. Confirm identity across platforms
      //   2. Build Knowledge Panel with social links
      //   3. Associate content across the web
      //
      // ✅ Added: Instagram for personal brand discovery
      // ✅ Order: Professional profiles first (GitHub, LinkedIn, X, Instagram)
      sameAs: [
        DATA.contact.social.GitHub.url,     // https://github.com/officialhemant001
        DATA.contact.social.LinkedIn.url,   // https://linkedin.com/in/hemant-sonkar-developer
        DATA.contact.social.X.url,          // https://x.com/Hemantsonkar001
        "https://www.instagram.com/hemant_.112/", // Instagram — personal brand
        "https://www.facebook.com/share/1DFNQSg8Dj/", // Facebook — personal brand
      ],

      // ── Skills / Expertise ──
      // Comprehensive list helps Google understand your expertise areas.
      // Ordered by proficiency/relevance for E-E-A-T signals.
      knowsAbout: [
        "Full Stack Development",
        "Python",
        "Django",
        "Django REST Framework",
        "JavaScript",
        "TypeScript",
        "React",
        "React.js",
        "Next.js",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Tailwind CSS",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Docker",
        "Git",
        "REST API",
        "GraphQL",
        "AI Development",
        "Machine Learning",
        "LangChain",
        "RAG Systems",
        "AI Agents",
        "Large Language Models",
      ],

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
      // Demonstrates professional experience for E-E-A-T
      worksFor: {
        "@type": "Organization",
        name: "Techpile",
      },

      // ── Nationality ──
      // Helps with geo-targeted knowledge panels
      nationality: {
        "@type": "Country",
        name: "India",
      },
    },

    // ── WebSite Schema ───────────────────────────────────────────────────
    // Establishes the website entity and links it to the Person.
    // Can enable sitelinks search box in Google SERPs.
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

      // ── Potential Search Action ──
      // Enables sitelinks search box in Google results.
      // If you have a blog search, update the URL template.
      // Uncomment when you have search functionality:
      // potentialAction: {
      //   "@type": "SearchAction",
      //   target: {
      //     "@type": "EntryPoint",
      //     urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      //   },
      //   "query-input": "required name=search_term_string",
      // },
    },

    // ── ProfilePage Schema ───────────────────────────────────────────────
    // Google's ProfilePage type (supported since April 2024).
    //
    // Signals to Google that this is the authoritative self-representation
    // of a person. Helps with:
    //   - Personal brand SERP features
    //   - Author attribution for blog posts
    //   - Creator credibility signals
    //
    // See: https://developers.google.com/search/docs/appearance/structured-data/profile-page
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

    // ── CollectionPage Schema (Projects Portfolio) ───────────────────────
    // Tells Google this site contains a curated collection of work samples.
    // Helps with rich snippets when people search for your projects.
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
    },
  ],
};
