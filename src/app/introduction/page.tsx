import { Metadata } from "next";
import IntroductionClient from "./introduction-client";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: "Introduction",
  description: `Get to know ${DATA.name} — Full Stack Web Developer & AI Engineer. Check out behavioral Q&A responses, technical deep dives, coding patterns, and professional roadmap.`,
  openGraph: {
    title: `Introduction | ${DATA.name}`,
    description: `Get to know ${DATA.name} — Full Stack Web Developer & AI Engineer. Check out behavioral Q&A responses, technical deep dives, coding patterns, and professional roadmap.`,
  },
};

export default function IntroductionPage() {
  return <IntroductionClient />;
}
