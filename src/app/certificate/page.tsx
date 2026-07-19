import { Metadata } from "next";
import CertificateClient from "./certificate-client";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: "Certifications",
  description: `View professional certifications of ${DATA.name}, including Postman API Student Expert, Full Stack Web Development, and Python Data Structures accomplishments.`,
  openGraph: {
    title: `Certifications | ${DATA.name}`,
    description: `View professional certifications of ${DATA.name}, including Postman API Student Expert, Full Stack Web Development, and Python Data Structures accomplishments.`,
  },
};

export default function CertificatePage() {
  return <CertificateClient />;
}
