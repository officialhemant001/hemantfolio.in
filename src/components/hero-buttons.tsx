"use client";

import Link from "next/link";
import { FileText, Send, ChevronDown, User, BookOpen } from "lucide-react";
import { DATA } from "@/data/resume";
import { useState, useRef, useEffect } from "react";

export function HeroButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-3 relative" ref={dropdownRef}>
      {/* Resume Button */}
      <Link
        href="/Lucknow Resu.pdf"
        target="_blank"
        rel="noopener noreferrer"
        id="hero-resume-button"
        className="group inline-flex items-center gap-2 rounded-xl border border-border/80 bg-background/60 backdrop-blur-xs px-4.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-muted/80 hover:border-border hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
        aria-label="Download Resume"
      >
        <FileText className="size-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
        Resume / CV
      </Link>

      {/* Get in Touch Button */}
      <Link
        href={`mailto:${DATA.contact.email}`}
        id="hero-contact-button"
        className="group inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-4.5 py-2.5 text-sm font-semibold shadow-md hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 relative overflow-hidden"
        aria-label="Contact via Email"
      >
        <Send className="size-4 group-hover:translate-x-0.5 transition-transform duration-300" />
        Get in touch
      </Link>

      {/* About Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="hero-about-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          className={`inline-flex items-center gap-2 rounded-xl border border-border/80 bg-background/60 backdrop-blur-xs px-4.5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-300 hover:shadow-md hover:bg-muted/80 hover:-translate-y-0.5 active:translate-y-0 ${isOpen ? "bg-muted/80" : ""}`}
        >
          About
          <ChevronDown className={`size-4 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {/* Dropdown Menu */}
        <div
          role="menu"
          className={`absolute left-0 top-full mt-2 w-48 rounded-xl border border-border bg-background/95 backdrop-blur-md p-1 shadow-lg transition-all duration-200 origin-top-left z-50 ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0 visible"
              : "opacity-0 scale-95 -translate-y-2 invisible"
          }`}
        >
          <div className="flex flex-col">
            <Link
              href="/introduction"
              onClick={() => setIsOpen(false)}
              role="menuitem"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/60 transition-colors"
            >
              <User className="size-4" />
              Introduction
            </Link>
            <Link
              href="/notes"
              onClick={() => setIsOpen(false)}
              role="menuitem"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted/60 transition-colors"
            >
              <BookOpen className="size-4" />
              Notes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
