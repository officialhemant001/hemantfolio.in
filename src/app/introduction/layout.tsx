import type { Metadata } from "next";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: `Interview Preparation Hub — ${DATA.name}`,
  description: `Complete interview preparation hub for ${DATA.name}. Includes HR questions, technical topics (Python, Django, React), project deep-dives, coding round challenges, and a 7-day preparation roadmap.`,
  alternates: {
    canonical: `${DATA.url}/introduction`,
  },
  keywords: [
    `${DATA.name} Introduction`,
    "Interview Preparation",
    "Technical Q&A",
    "HR Questions",
    "Django React developer interview",
    "Coding Round Practice",
  ],
  openGraph: {
    title: `Interview Preparation Hub — ${DATA.name}`,
    description: `Complete interview preparation hub for ${DATA.name}. Includes HR questions, technical topics (Python, Django, React), project deep-dives, coding round challenges, and a 7-day preparation roadmap.`,
    url: `${DATA.url}/introduction`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Interview Preparation Hub — ${DATA.name}`,
    description: `Complete interview preparation hub for ${DATA.name}. Includes HR questions, technical topics (Python, Django, React), project deep-dives, coding round challenges, and a 7-day preparation roadmap.`,
  },
};

export default function IntroductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
