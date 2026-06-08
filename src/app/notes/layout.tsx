import type { Metadata } from "next";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: "Tech Notes & Reference Guides — Hemant Sonkar",
  description: "A comprehensive collection of coding cheat sheets, mental models, reference notes, and code snippets for Python, Django, React, TypeScript, and SQL by Hemant Sonkar.",
  alternates: {
    canonical: `${DATA.url}/notes`,
  },
  keywords: [
    "Tech Notes Hemant Sonkar",
    "Developer Cheat Sheets",
    "Python Django React Cheat Sheet",
    "Web Development Mental Models",
    "Full Stack Code Snippets",
    "TypeScript Cheat Sheet",
    "Git Commands Guide",
  ],
  openGraph: {
    title: "Tech Notes & Reference Guides — Hemant Sonkar",
    description: "A comprehensive collection of coding cheat sheets, mental models, reference notes, and code snippets for Python, Django, React, TypeScript, and SQL by Hemant Sonkar.",
    url: `${DATA.url}/notes`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Notes & Reference Guides — Hemant Sonkar",
    description: "A comprehensive collection of coding cheat sheets, mental models, reference notes, and code snippets for Python, Django, React, TypeScript, and SQL by Hemant Sonkar.",
  },
};

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
