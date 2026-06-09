import type { Metadata } from "next";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: `Tech Notes — ${DATA.name}`,
  description: `A collection of fundamental concepts, mental models, and code snippets for the core tech stack of ${DATA.name}. Covering HTML, CSS, JavaScript, TypeScript, React, Python, Django, PostgreSQL, and Git.`,
  alternates: {
    canonical: `${DATA.url}/notes`,
  },
  keywords: [
    `${DATA.name} Tech Notes`,
    "Developer Cheat Sheets",
    "Programming Concepts",
    "Django Cheat Sheet",
    "React Cheat Sheet",
    "Python Notes",
  ],
  openGraph: {
    title: `Tech Notes — ${DATA.name}`,
    description: `A collection of fundamental concepts, mental models, and code snippets for the core tech stack of ${DATA.name}. Covering HTML, CSS, JavaScript, TypeScript, React, Python, Django, PostgreSQL, and Git.`,
    url: `${DATA.url}/notes`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Tech Notes — ${DATA.name}`,
    description: `A collection of fundamental concepts, mental models, and code snippets for the core tech stack of ${DATA.name}. Covering HTML, CSS, JavaScript, TypeScript, React, Python, Django, PostgreSQL, and Git.`,
  },
};

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
