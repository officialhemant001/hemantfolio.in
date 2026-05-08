/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-10 md:size-12 p-1 border rounded-full shadow-sm ring-1 ring-border bg-muted flex-none flex items-center justify-center text-xs font-bold text-muted-foreground" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-10 md:size-12 p-1 border rounded-full shadow-sm ring-1 ring-border overflow-hidden object-contain flex-none bg-background"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <div className="flex flex-col gap-8">
      {DATA.work.map((work) => (
        <div 
          key={work.company} 
          className="group relative flex flex-row gap-5 border border-border/30 rounded-xl p-5 bg-card/20 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30 overflow-hidden"
        >
          {/* Soft background glow on hover */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <div className="relative z-10 flex-none mt-1">
            <LogoImage src={work.logoUrl} alt={work.company} />
          </div>
          <div className="relative z-10 flex flex-col flex-1 gap-2">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-sm sm:text-base text-foreground">
                {work.company}
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {work.start} - {work.end ?? "Present"}
              </div>
            </div>
            <h4 className="font-sans text-sm leading-none text-muted-foreground">
              {work.title}
            </h4>
            {work.description && (
              <p className="prose prose-sm max-w-full text-slate-900 dark:text-slate-100 font-medium font-sans text-xs sm:text-sm mt-1">
                {work.description}
              </p>
            )}
            {work.technologies && work.technologies.length > 0 && (
              <div className="mt-3 flex flex-row flex-wrap items-center gap-2">
                <span className="text-xs text-muted-foreground font-medium">Technologies:</span>
                {work.technologies.map((tag: string) => (
                  <Badge key={tag} className="text-[10px] px-2 py-0.5 border-border/50 bg-background/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors" variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

