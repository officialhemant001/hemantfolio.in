"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";

const certifications = [
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "2024",
    link: "#",
    gradient: "from-orange-500/20 via-rose-500/20 to-transparent",
    iconColor: "text-orange-500",
    hoverBorder: "hover:border-orange-500/50",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Techpile",
    date: "2024",
    link: "#",
    gradient: "from-blue-500/20 via-cyan-500/20 to-transparent",
    iconColor: "text-blue-500",
    hoverBorder: "hover:border-blue-500/50",
  },
  {
    title: "Python & Data Structures",
    issuer: "HackerRank",
    date: "2023",
    link: "#",
    gradient: "from-green-500/20 via-emerald-500/20 to-transparent",
    iconColor: "text-green-500",
    hoverBorder: "hover:border-green-500/50",
  }
];

export default function CertificationsSection() {
  return (
    <div className="flex flex-col gap-y-6 w-full">
      <BlurFade delay={0.04 * 16}>
        <h2 className="text-xl font-bold">Certifications</h2>
      </BlurFade>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {certifications.map((cert, idx) => (
          <BlurFade key={cert.title} delay={0.04 * (17 + idx)} className="h-full">
            <div className={`group relative flex flex-col justify-between p-6 border rounded-2xl bg-card backdrop-blur-sm shadow-sm transition-all duration-300 h-full overflow-hidden ${cert.hoverBorder} hover:-translate-y-1 hover:shadow-lg`}>
              
              {/* Colorful Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-all pointer-events-none group-hover:scale-125 group-hover:-rotate-12 duration-500">
                <Award className={`size-20 ${cert.iconColor}`} />
              </div>
              
              <div className="z-10 flex flex-col mb-4">
                <div className={`w-12 h-12 rounded-xl bg-background shadow-sm border border-border/50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Award className={`size-6 ${cert.iconColor}`} />
                </div>
                <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-foreground transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>
              
              <div className="z-10 flex items-center justify-between mt-auto pt-5 border-t border-border/50">
                <span className="text-xs font-bold px-3 py-1 bg-background border border-border/50 rounded-full shadow-sm">
                  {cert.date}
                </span>
                
                <Link 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`bg-background border border-border/50 p-2 rounded-full hover:bg-muted transition-colors ${cert.iconColor}`}
                  title="View Certificate"
                >
                  <ExternalLink className="size-4" />
                </Link>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
