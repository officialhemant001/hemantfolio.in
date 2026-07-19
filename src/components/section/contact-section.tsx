"use client";

import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA, SOCIAL_LINKS } from "@/data/resume";
import { useState } from "react";
import { toast } from "sonner";
import {
  Send, MapPin, Mail, Phone, Github, Linkedin, Instagram,
  FileText, Award, FolderOpen, Globe, Facebook, CheckCircle
} from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    // Direct input validation
    if (!name || name.trim().length < 2) {
      toast.error("Please enter a valid name (at least 2 characters).");
      setIsSubmitting(false);
      return;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    if (!message || message.trim().length < 5) {
      toast.error("Please enter a valid message (at least 5 characters).");
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);
      toast.success("Message sent successfully!", {
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      toast.error("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      name: "Email",
      icon: Mail,
      href: `mailto:${SOCIAL_LINKS.email}`,
      isExternal: false,
      value: SOCIAL_LINKS.email,
    },
    {
      name: "Phone",
      icon: Phone,
      href: `tel:${SOCIAL_LINKS.phone}`,
      isExternal: false,
      value: SOCIAL_LINKS.phone,
    },
    {
      name: "GitHub",
      icon: Github,
      href: SOCIAL_LINKS.github,
      isExternal: true,
      value: "github.com/officialhemant001",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: SOCIAL_LINKS.linkedin,
      isExternal: true,
      value: "linkedin.com/in/hemantsonkar001",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: SOCIAL_LINKS.facebook,
      isExternal: true,
      value: "facebook.com/hemantsonkar001",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: SOCIAL_LINKS.instagram,
      isExternal: true,
      value: "@hemant_.112",
    },
    {
      name: "Resume",
      icon: FileText,
      href: "/Lucknow Resu.pdf",
      isExternal: true,
      value: "Download Latest Resume",
    },
    {
      name: "Certificate",
      icon: Award,
      href: "/certificate",
      isExternal: false,
      value: "View Certificates Viewer",
    },
    {
      name: "Projects",
      icon: FolderOpen,
      href: "/projects",
      isExternal: false,
      value: "Explore All Projects",
    },
  ];

  return (
    <div className="border border-border/60 rounded-xl p-6 md:p-10 relative overflow-hidden bg-card/10 backdrop-blur-xs">
      <div className="absolute -top-4 border border-border/80 bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2 shadow-xs">
        <span className="text-primary-foreground text-xs font-semibold uppercase tracking-wider">Contact</span>
      </div>

      <div className="absolute inset-0 top-0 left-0 right-0 h-[30%] rounded-xl overflow-hidden pointer-events-none">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
        {/* Contact Info & Links */}
        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="max-w-[400px] text-muted-foreground text-sm leading-relaxed font-semibold">
              I&apos;m currently available for freelance work and full-time opportunities. Let&apos;s connect!
            </p>
          </div>

          {/* Grid of All Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-200 group p-2 rounded-xl border border-border/40 bg-background/50 hover:bg-muted/50 hover:shadow-xs"
                  aria-label={link.name}
                >
                  <div className="p-2 border border-border/50 rounded-lg bg-background/80 group-hover:bg-primary/10 transition-colors shrink-0">
                    <Icon className="size-4 group-hover:text-primary transition-colors duration-200" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 group-hover:text-foreground/70 transition-colors leading-none mb-0.5">
                      {link.name}
                    </span>
                    <span className="block text-xs font-semibold text-foreground/80 truncate">
                      {link.value}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3 text-muted-foreground mt-2 pl-1">
            <div className="p-2 border border-border/50 rounded-lg bg-background/50">
              <MapPin className="size-4" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">{DATA.location}</span>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 p-6 border border-border/60 rounded-xl bg-card/30 backdrop-blur-md shadow-xs relative"
        >
          {isSuccess && (
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xs z-20 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300 rounded-xl">
              <CheckCircle className="size-12 text-emerald-500 mb-3 animate-bounce" />
              <h3 className="text-lg font-bold text-foreground mb-1">Message Sent!</h3>
              <p className="text-xs text-muted-foreground max-w-[240px] font-medium leading-relaxed">
                Thank you for your message. I will read it and respond within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="mt-4 px-4 py-2 border border-border rounded-lg text-xs font-bold hover:bg-muted transition-colors cursor-pointer"
              >
                Send another message
              </button>
            </div>
          )}

          <div className="space-y-1.5">
            <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className="w-full px-3.5 py-2 border border-border rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              className="w-full px-3.5 py-2 border border-border rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="How can I help you?"
              className="w-full px-3.5 py-2 border border-border rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground shadow-xs hover:bg-primary/95 transition-all active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed group cursor-pointer"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              <>
                Send Message
                <Send className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
