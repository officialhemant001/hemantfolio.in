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
      <Link
        href="/typs.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-muted transition-all duration-200 hover:shadow-md"
      >
        <FileText className="size-4" />
        Resume / CV
      </Link>
      
      <Link
        href={`mailto:${DATA.contact.email}`}
        className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-4 py-2.5 text-sm font-medium shadow-sm hover:opacity-90 transition-all duration-200 hover:shadow-md"
      >
        <Send className="size-4" />
        Get in touch
      </Link>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:shadow-md hover:bg-muted ${isOpen ? 'bg-muted' : ''}`}
        >
          About
          <ChevronDown className={`size-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute left-0 top-full mt-2 w-48 rounded-xl border border-border bg-background p-1 shadow-lg transition-all duration-200 origin-top-left z-50 ${
            isOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
          }`}
        >
          <div className="flex flex-col">
            <Link
              href="/introduction"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
            >
              <User className="size-4" />
              Introduction
            </Link>
            <Link
              href="/notes"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
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
