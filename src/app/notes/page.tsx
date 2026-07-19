import { Metadata } from "next";
import NotesClient from "./notes-client";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: "Technical Notes",
  description: `Read technical cheat sheets and notes by ${DATA.name} on HTML, CSS, JavaScript, TypeScript, Django, Django REST Framework, React, Next.js, and Databases.`,
  openGraph: {
    title: `Technical Notes | ${DATA.name}`,
    description: `Read technical cheat sheets and notes by ${DATA.name} on HTML, CSS, JavaScript, TypeScript, Django, Django REST Framework, React, Next.js, and Databases.`,
  },
};

export default function NotesPage() {
  return <NotesClient />;
}
