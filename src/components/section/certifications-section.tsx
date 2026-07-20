"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import { DATA } from "@/data/resume";

export default function CertificationsSection() {
  return (
    <div className="flex flex-col gap-y-6 w-full">
      <BlurFade delay={0.04 * 16}>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Certifications</h2>
          <Link
            href="/certificate"
            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            View Certificate →
          </Link>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {DATA.certifications.map((cert, idx) => (
          <BlurFade key={cert.title} delay={0.04 * (17 + idx)} className="h-full">
            <Link href={`/certificate?id=${cert.id}`} className="block h-full">
              <div
                className={`group relative flex flex-col justify-between p-6 border rounded-2xl bg-card backdrop-blur-sm shadow-sm transition-all duration-300 h-full overflow-hidden ${cert.hoverBorder} hover:-translate-y-1 hover:shadow-lg cursor-pointer`}
              >
                {/* Colorful Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-all pointer-events-none group-hover:scale-125 group-hover:-rotate-12 duration-500">
                  <Award className={`size-20 ${cert.iconColor}`} />
                </div>

                <div className="z-10 flex flex-col mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-background shadow-sm border border-border/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Award className={`size-6 ${cert.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-foreground transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-semibold text-muted-foreground">{cert.issuer}</p>
                </div>

                <div className="z-10 flex items-center justify-between mt-auto pt-5 border-t border-border/50">
                  <span className="text-xs font-bold px-3 py-1 bg-background border border-border/50 rounded-full shadow-sm">
                    {cert.date}
                  </span>

                  <div
                    className={`bg-background border border-border/50 p-2 rounded-full hover:bg-muted transition-colors ${cert.iconColor}`}
                    title="View Certificate"
                  >
                    <ExternalLink className="size-4" />
                  </div>
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
