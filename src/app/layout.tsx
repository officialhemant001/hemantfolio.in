import TopNavbar from "@/components/top-navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteMetadata, jsonLd } from "./Meta";
import { SOCIAL_LINKS } from "@/data/resume";
import { Footer } from "@/components/footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

// ── SEO Metadata ─────────────────────────────────────────────────────────────
// Centralized in Meta.tsx for maintainability. Includes title, description,
// keywords, Open Graph, Twitter Card, robots, favicons, and more.
export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* ── JSON-LD Structured Data ─────────────────────────────────────── */}
      {/* Enables rich results in Google: Knowledge Panel, sitelinks, etc. */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Verification links to social profiles to establish digital identity and authority */}
        <link rel="me" href={SOCIAL_LINKS.github} />
        <link rel="me" href={SOCIAL_LINKS.linkedin} />
        <link rel="me" href={SOCIAL_LINKS.twitter} />
        <link rel="me" href={SOCIAL_LINKS.instagram} />
        <link rel="me" href={SOCIAL_LINKS.facebook} />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {/* Viewport premium frame border */}
            <div className="page-border-frame" />
            
            <TopNavbar />
            <div className="relative z-10 max-w-2xl mx-auto min-h-screen py-6 sm:py-10 px-4 sm:px-6">
              {children}
              <Footer />
            </div>
            <Toaster position="bottom-right" theme="system" />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
