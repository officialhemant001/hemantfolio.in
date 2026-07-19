import { Metadata } from "next";
import ProjectsClient from "./projects-client";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore the portfolio of ${DATA.name}, featuring AI desktop assistants, SaaS dashboards, next-generation weather platforms, multi-agent SaaS OS, and crop disease computer vision systems.`,
  openGraph: {
    title: `Projects | ${DATA.name}`,
    description: `Explore the portfolio of ${DATA.name}, featuring AI desktop assistants, SaaS dashboards, next-generation weather platforms, multi-agent SaaS OS, and crop disease computer vision systems.`,
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
