"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";
import { ExternalLink, Github } from "lucide-react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  projectNumber: string;
}

export function PremiumProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  projectNumber,
}: Props) {
  const [imageError, setImageError] = useState(false);

  // Determine standard links
  const liveLink = links?.find((l) => l.type.toLowerCase() === "website")?.href || href;
  const sourceLink = links?.find((l) => l.type.toLowerCase() === "source")?.href;

  return (
    <div
      className={cn(
        "group flex flex-col h-full bg-card border border-border/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-500 relative hover:-translate-y-2",
        className
      )}
    >
      {/* Thumbnail Area */}
      <div className="relative shrink-0 h-64 md:h-72 w-full overflow-hidden bg-zinc-900 flex items-center justify-center">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
          />
        ) : image && !imageError ? (
          <img
            src={image}
            alt={title}
            onError={() => setImageError(true)}
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-linear-to-br from-zinc-800 to-zinc-950 opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" />
        )}
        
        {/* Title Overlaid */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
          <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight z-10 drop-shadow-md">
            {title}
          </h3>
        </div>

        {/* Top Right Badges */}
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <Badge className="bg-primary/90 text-primary-foreground border-none font-semibold shadow-sm backdrop-blur-md">
            Featured
          </Badge>
          {liveLink && (
            <Badge className="bg-green-500/90 text-white border-none font-semibold shadow-sm backdrop-blur-md">
              Live
            </Badge>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8 flex flex-col gap-4 flex-1 relative">
        <div className="flex flex-wrap gap-2">
          {tags && tags.map((tag) => (
            <Badge
              key={tag}
              className="text-[11px] font-bold border-border/50 bg-muted/50 hover:bg-muted text-muted-foreground px-2.5 py-0.5 rounded-full"
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="text-sm md:text-base prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>

        <div className="mt-auto pt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {liveLink && (
              <Link
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-sm active:scale-95"
              >
                <ExternalLink className="size-4" />
                Live
              </Link>
            )}
            {sourceLink && (
              <Link
                href={sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 bg-background border border-border text-foreground text-sm font-bold rounded-xl hover:bg-muted transition-colors shadow-sm active:scale-95"
              >
                <Github className="size-4" />
                Code
              </Link>
            )}
          </div>
          
          {/* Project Number */}
          <div className="text-4xl font-extrabold text-muted-foreground/20 pointer-events-none select-none">
            {projectNumber}
          </div>
        </div>
      </div>
    </div>
  );
}
