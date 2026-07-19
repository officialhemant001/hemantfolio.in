"use client";

import Link from "next/link";
import { ChevronUp, Github, Linkedin, Facebook, Instagram, Mail, Phone, Globe, Twitter } from "lucide-react";
import { DATA, SOCIAL_LINKS } from "@/data/resume";
import { Icons } from "@/components/icons";

export function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/#work" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Certificates", href: "/certificate" },
    { name: "About / Intro", href: "/introduction" },
    { name: "Notes", href: "/notes" },
  ];

  return (
    <footer className="w-full border-t border-border/30 bg-muted/10 pt-12 pb-20 relative z-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          {/* Left: Bio & copyright */}
          <div className="space-y-3">
            <Link href="/" className="inline-block">
              <span className="text-base font-bold tracking-tight text-foreground">
                {DATA.name}
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[260px]">
              Full Stack Web Developer & AI Engineer specializing in Python, Django, React, and intelligent automation systems.
            </p>
            <p className="text-[11px] text-muted-foreground/80 font-medium">
              &copy; {currentYear} {DATA.name}. All rights reserved.
            </p>
          </div>

          {/* Right: Quick links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-foreground/80 uppercase tracking-widest">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors font-semibold"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Social Row & Scroll to Top */}
        <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social Links List */}
          <div className="flex items-center gap-3">
            <Link
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground p-1.5 rounded-lg hover:bg-muted/80 transition-all shrink-0"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </Link>
            <Link
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground p-1.5 rounded-lg hover:bg-muted/80 transition-all shrink-0"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </Link>
            <Link
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground p-1.5 rounded-lg hover:bg-muted/80 transition-all shrink-0"
              aria-label="Facebook"
            >
              <Facebook className="size-4" />
            </Link>
            <Link
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground p-1.5 rounded-lg hover:bg-muted/80 transition-all shrink-0"
              aria-label="Instagram"
            >
              <Instagram className="size-4" />
            </Link>
            <Link
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground p-1.5 rounded-lg hover:bg-muted/80 transition-all shrink-0"
              aria-label="Twitter / X"
            >
              <Twitter className="size-4" />
            </Link>
            <Link
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-muted-foreground hover:text-foreground p-1.5 rounded-lg hover:bg-muted/80 transition-all shrink-0"
              aria-label="Email"
            >
              <Mail className="size-4" />
            </Link>
            <Link
              href={`tel:${SOCIAL_LINKS.phone}`}
              className="text-muted-foreground hover:text-foreground p-1.5 rounded-lg hover:bg-muted/80 transition-all shrink-0"
              aria-label="Phone"
            >
              <Phone className="size-4" />
            </Link>
          </div>

          {/* Back to top button */}
          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/80 bg-background hover:bg-muted text-xs font-semibold text-muted-foreground hover:text-foreground transition-all cursor-pointer shadow-xs active:scale-95"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ChevronUp className="size-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
