"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default function TopNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/80 border-b border-border/40">
      <div className="max-w-2xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Left: Avatar */}
        <Link id="top-navbar-home-link" href="/" className="flex items-center gap-2.5 group">
          <Avatar className="size-8 border border-border/50 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-200">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-semibold text-foreground/80 hidden sm:block group-hover:text-foreground transition-colors">
            {DATA.initials}
          </span>
        </Link>

        {/* Center: Nav Links */}
        <nav className="flex items-center gap-4 sm:gap-6" aria-label="Main navigation">
          <Link
            id="top-navbar-work-link"
            href="/#work"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Work
          </Link>
          <Link
            id="top-navbar-projects-full-link"
            href="/projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            id="top-navbar-blog-link"
            href="/blog"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
        </nav>

        {/* Right: Theme Toggle */}
        <div className="flex items-center">
          <ModeToggle className="size-8 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
