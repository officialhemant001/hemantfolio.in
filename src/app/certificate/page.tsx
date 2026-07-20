import { Metadata } from "next";
import CertificateClient from "./certificate-client";
import { DATA } from "@/data/resume";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Certifications",
  description: `View professional certifications of ${DATA.name}, including Postman API Student Expert, Full Stack Web Development, and Python Data Structures accomplishments.`,
  openGraph: {
    title: `Certifications | ${DATA.name}`,
    description: `View professional certifications of ${DATA.name}, including Postman API Student Expert, Full Stack Web Development, and Python Data Structures accomplishments.`,
  },
};

export default function CertificatePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col items-center justify-center gap-3">
        <div className="size-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        <p className="text-sm font-semibold text-muted-foreground">Loading certifications viewer...</p>
      </div>
    }>
      <CertificateClient />
    </Suspense>
  );
}
