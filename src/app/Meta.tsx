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
//   - Social profile discovery: LinkedIn, GitHub, Instagram, X, Facebook
//   - Recruiter-optimized keywords and description
//   - Geographic targeting with GeoCoordinates for local search
//   - Enhanced Open Graph with profile namespace for LinkedIn optimization
//   - Verification meta tags for Google, Bing, and Yandex
//   - SearchAction for Google Sitelinks Search Box
//   - FAQPage schema for rich results from introduction Q&A
//   - Occupation & EducationalCredential for recruiter discovery
//   - Speakable schema for voice search optimization
//   - Blog/Article structured data for content indexing
//   - Complete breadcrumb navigation for all routes
//
// References:
//   https://nextjs.org/docs/app/api-reference/functions/generate-metadata
//   https://nextjs.org/docs/app/api-reference/file-conventions/metadata
//   https://schema.org/Person
//   https://schema.org/ProfilePage
//   https://schema.org/FAQPage
//   https://schema.org/SearchAction
//   https://developers.google.com/search/docs/appearance/structured-data
// ============================================================================

import type { Metadata } from "next";
import { DATA, SOCIAL_LINKS } from "@/data/resume";

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
const TITLE = "Hemant Sonkar — Full Stack & AI Developer";

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
  "Hemant Sonkar — Full Stack & AI Developer specializing in Python, Django, React, Next.js, JavaScript, and TypeScript. Building scalable web applications, RESTful APIs, AI-powered systems, and modern software solutions with clean architecture, high performance, and exceptional user experiences.";

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
    canonical: "/",
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
    emails: [SOCIAL_LINKS.email],
    phoneNumbers: [SOCIAL_LINKS.phone],
    images: [
      {
        url: "/opengraph-image",  // Resolved by Next.js opengraph-image.tsx
        width: 1200,
        height: 630,
        alt: `${DATA.name} — Full Stack AI Developer | Portfolio`,
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
  // Multiple sizes ensure crisp display across all devices and contexts.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },

  // ── Manifest (PWA) ──────────────────────────────────────────────────────
  // Links to the web app manifest for PWA install prompts and app metadata.
  manifest: "/manifest.webmanifest",

  // ── Verification Tags ────────────────────────────────────────────────────
  // Proves site ownership to search engines for their webmaster tools.
  // Only include tags with real values — placeholders can trigger warnings.
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    }),
    ...(process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION && {
      yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION,
    }),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION && {
      other: {
        "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
      },
    }),
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
    // Open Graph profile namespace tags for social platform association.
    // Facebook, LinkedIn, and other OG consumers use these to link profiles.
    "profile:username": "officialhemant001",
    "profile:first_name": "Hemant",
    "profile:last_name": "Sonkar",
    "profile:gender": "male",

    // ── Social Profile Links (explicit meta for crawlers) ──
    // These "me" rel-equivalent meta tags help search engines and identity
    // aggregators associate all official profiles with this website.
    "article:author": SOCIAL_LINKS.facebook,

    // ── Content Language (explicit for multilingual crawlers) ──
    "content-language": "en-US",

    // ── Revisit Interval (Bing, Yandex hint for crawl frequency) ──
    "revisit-after": "7 days",

    // ── Rating (safe for all audiences) ──
    "rating": "general",

    // ── Author shorthand (supplementary to authors[] above) ──
    "author": DATA.name,
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
//   7. Blog — Represents the blog section with ItemList of articles
//   8. FAQPage — Rich results for Q&A content from introduction page
//   9. Occupation & EducationalCredential — Recruiter discovery
//
// The @graph approach links all schemas together with @id references,
// creating a connected knowledge graph for search engines.
// ============================================================================

/**
 * JSON-LD structured data combining Person, WebSite, ProfilePage,
 * BreadcrumbList, CollectionPage, Blog, FAQPage, and individual
 * SoftwareApplication schemas.
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
      jobTitle: "Full Stack & AI Developer",
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

      // ── Home Location (GeoCoordinates for local search) ──
      homeLocation: {
        "@type": "Place",
        name: "Lucknow, Uttar Pradesh, India",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 26.8467,
          longitude: 80.9462,
        },
      },

      // ── Social Profiles (sameAs) ──
      // Explicit, curated list of all official social profiles.
      // These tell Google, Bing, and other engines which social accounts
      // belong to this person — critical for Knowledge Panel eligibility
      // and E-E-A-T identity consolidation.
      sameAs: [
        SOCIAL_LINKS.portfolio,
        SOCIAL_LINKS.github,
        SOCIAL_LINKS.linkedin,
        SOCIAL_LINKS.facebook,
        SOCIAL_LINKS.twitter,
        SOCIAL_LINKS.instagram,
      ],

      // ── Skills / Expertise (Dynamic) ──
      knowsAbout: [
        "Full Stack Development",
        "Software Engineering",
        "AI Engineering",
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
        "RAG Architecture",
        ...DATA.skills.map((s) => s.name),
        ...DATA.skillCategories.flatMap((c) => c.items),
      ].filter((value, index, self) => self.indexOf(value) === index),

      // ── Programming Languages Known ──
      knowsLanguage: [
        { "@type": "Language", name: "English" },
        { "@type": "Language", name: "Hindi" },
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

      // ── Educational Credential ──
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Bachelor of Technology in Computer Science & Engineering",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "Khwaja Moinuddin Chishti Language University",
        },
      },

      // ── Current Occupation (structured for recruiter tools) ──
      hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Developer",
        occupationLocation: {
          "@type": "City",
          name: "Lucknow",
        },
        skills: DATA.skills.map((s) => s.name).join(", "),
        responsibilities:
          "Building production-grade web applications, REST APIs, AI-powered solutions, frontend-backend integration, and database architecture.",
        estimatedSalary: {
          "@type": "MonetaryAmountDistribution",
          name: "Full Stack Developer Salary in India",
          currency: "INR",
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
    // Enables sitelinks search box in Google results.
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

      // ── SearchAction (Google Sitelinks Search Box) ──
      // Enables the search box directly in Google SERP results.
      // Users can search within the site from Google itself.
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
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

      // ── Speakable (Voice Search Optimization — 2026 trend) ──
      // Tells Google which sections are suitable for voice/audio readout.
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#hero", ".text-foreground"],
      },
    },

    // ── BreadcrumbList Schema ───────────────────────────────────────────
    // Helps search engines understand navigation trails.
    // Complete breadcrumb with all site routes for full SERP coverage.
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
          name: "Projects",
          item: `${SITE_URL}/projects`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Blog",
          item: `${SITE_URL}/blog`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Certifications",
          item: `${SITE_URL}/certificate`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Introduction",
          item: `${SITE_URL}/introduction`,
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Notes",
          item: `${SITE_URL}/notes`,
        },
      ],
    },

    // ── Blog Schema ─────────────────────────────────────────────────────
    // Tells Google this site has a blog section with technical articles.
    // Improves indexing of blog content and can trigger blog-specific rich results.
    {
      "@type": "Blog",
      "@id": `${SITE_URL}/#blog`,
      url: `${SITE_URL}/blog`,
      name: `${DATA.name} — Technical Blog`,
      description: `Technical blog by ${DATA.name}. Thoughts, tutorials, and guides on Python, Django, React, Next.js, AI, and software engineering.`,
      author: {
        "@id": `${SITE_URL}/#person`,
      },
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      inLanguage: "en-US",
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

    // ── ItemList Schema (Skills & Technologies) ─────────────────────────
    // Presents the developer's skills as a structured list for rich results.
    // Google can use this to understand expertise areas.
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#skills`,
      name: `${DATA.name} — Technical Skills`,
      description: `Technical skills and expertise of ${DATA.name}`,
      numberOfItems: DATA.skills.length,
      itemListElement: DATA.skills.map((skill, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: skill.name,
        url: SITE_URL,
      })),
    },

    // ── FAQPage Schema (Introduction Q&A → Rich Results) ────────────────
    // Google displays FAQ rich results directly in SERPs.
    // These are sourced from the introduction/interview-prep Q&A content.
    // Only including the most impactful questions for rich result eligibility.
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      url: `${SITE_URL}/introduction`,
      name: `About ${DATA.name} — FAQ`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Hemant Sonkar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hemant Sonkar is a Full Stack Developer and AI Engineer based in Lucknow, India. He is pursuing his B.Tech in Computer Science at KMCLU and works as a Full Stack Developer Intern at Techpile. He specializes in Python, Django, React.js, and AI-powered solutions including RAG systems and multi-agent architectures.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies does Hemant Sonkar specialize in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hemant specializes in Python, Django, Django REST Framework, React.js, TypeScript, Next.js, PostgreSQL, MongoDB, Redis, Docker, LangChain, CrewAI, and OpenAI API. He has expertise in both full-stack web development and AI/ML engineering.",
          },
        },
        {
          "@type": "Question",
          name: "What are Hemant Sonkar's notable projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "His flagship projects include AI-ROS (AI Autonomous Research OS) — a production-grade SaaS platform with multi-agent AI, RAG-based document intelligence, and real-time collaboration; and AgroIntel AI — an AI-based crop disease detection system using deep learning (CNN & ResNet) with a Django REST API backend.",
          },
        },
        {
          "@type": "Question",
          name: "Is Hemant Sonkar available for hire?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Hemant Sonkar is open to both freelance and full-time opportunities. He is available for full-stack development, AI engineering, and software development roles. Contact him via email at oficialhemant112@gmail.com or through his LinkedIn profile.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Hemant Sonkar located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hemant Sonkar is based in Lucknow, Uttar Pradesh, India. He is open to remote work opportunities as well as on-site positions.",
          },
        },
      ],
    },

    // ── Resume Document Schema ──
    {
      "@type": "CreativeWork",
      "@id": `${SITE_URL}/#resumedocument`,
      name: `${DATA.name} Resume`,
      url: `${SITE_URL}/Lucknow Resu.pdf`,
      author: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: "en-US",
      description: `ATS-friendly professional resume of ${DATA.name}`,
    },

    // ── Certificate Document Schema ──
    {
      "@type": "CreativeWork",
      "@id": `${SITE_URL}/#certificatedocument`,
      name: `${DATA.name} Certifications`,
      url: `${SITE_URL}/certificate`,
      author: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: "en-US",
      description: `Professional certifications and accomplishments of ${DATA.name}`,
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
      datePublished: project.dates.split("—")[0]?.trim() || "2025",
      inLanguage: "en-US",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
    })),
  ],
};

// ============================================================================
// 📝 BLOG POST JSON-LD HELPER — Per-Article Structured Data
// ============================================================================
//
// This helper generates Article JSON-LD for individual blog posts.
// Import and use it in the blog/[slug]/page.tsx layout to inject
// post-specific structured data for rich results (breadcrumbs, author, etc.)
// ============================================================================

/**
 * Generates Article JSON-LD for a single blog post.
 *
 * @param post - Blog post data with title, description, slug, publishedAt, etc.
 * @returns A complete JSON-LD object for the Article schema.
 *
 * Usage in blog/[slug]/page.tsx:
 * ```tsx
 * import { blogPostJsonLd } from "@/app/Meta";
 * const jsonLd = blogPostJsonLd({ title, description, slug, publishedAt, updatedAt });
 * ```
 */
export function blogPostJsonLd(post: {
  title: string;
  description?: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/blog/${post.slug}/#article`,
    headline: post.title,
    description:
      post.description ||
      `${post.title} — a technical article by ${DATA.name}`,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@id": `${SITE_URL}/#person`,
    },
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    isPartOf: {
      "@id": `${SITE_URL}/#blog`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/opengraph-image`,
      width: 1200,
      height: 630,
    },
    inLanguage: "en-US",
    // BreadcrumbList for the blog post
    breadcrumb: {
      "@type": "BreadcrumbList",
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
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: `${SITE_URL}/blog/${post.slug}`,
        },
      ],
    },
  };
}
