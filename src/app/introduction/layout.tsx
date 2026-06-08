import type { Metadata } from "next";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: "Introduction & Interview Prep — Hemant Sonkar",
  description: "Professional introduction, core strengths, career journey, and technical interview preparation hub of Hemant Sonkar, Full Stack Developer & AI Engineer.",
  alternates: {
    canonical: `${DATA.url}/introduction`,
  },
  keywords: [
    "Hemant Sonkar About",
    "Interview Prep Hub",
    "Full Stack Developer Interview Questions",
    "AI Engineer Portfolio Lucknow",
    "KMCLU Computer Science",
    "Techpile Intern Hemant Sonkar",
  ],
  openGraph: {
    title: "Introduction & Interview Prep — Hemant Sonkar",
    description: "Professional introduction, core strengths, career journey, and technical interview preparation hub of Hemant Sonkar, Full Stack Developer & AI Engineer.",
    url: `${DATA.url}/introduction`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Introduction & Interview Prep — Hemant Sonkar",
    description: "Professional introduction, core strengths, career journey, and technical interview preparation hub of Hemant Sonkar, Full Stack Developer & AI Engineer.",
  },
};

export default function IntroductionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
