"use client";

import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { useState } from "react";
import { toast } from "sonner";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // For now, we just show a success toast since no backend is connected
    toast.success("Message sent successfully!", {
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="border rounded-xl p-6 md:p-10 relative overflow-hidden bg-card/10 backdrop-blur-sm">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2 shadow-sm">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      
      <div className="absolute inset-0 top-0 left-0 right-0 h-[40%] rounded-xl overflow-hidden pointer-events-none">
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
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="max-w-[400px] text-muted-foreground">
              I&apos;m currently available for freelance work and full-time opportunities. Let&apos;s connect!
            </p>
          </div>
          
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
              <div className="p-3 border rounded-lg bg-background/50 group-hover:bg-primary/10 transition-colors">
                <Mail className="size-5 group-hover:text-primary transition-colors" />
              </div>
              <Link href={`mailto:${DATA.contact.email}`} className="font-medium">
                {DATA.contact.email}
              </Link>
            </div>
            
            <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
              <div className="p-3 border rounded-lg bg-background/50 group-hover:bg-primary/10 transition-colors">
                <Phone className="size-5 group-hover:text-primary transition-colors" />
              </div>
              <Link href={`tel:${DATA.contact.tel}`} className="font-medium">
                {DATA.contact.tel}
              </Link>
            </div>
            
            <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
              <div className="p-3 border rounded-lg bg-background/50 group-hover:bg-primary/10 transition-colors">
                <MapPin className="size-5 group-hover:text-primary transition-colors" />
              </div>
              <span className="font-medium">{DATA.location}</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 border rounded-xl bg-card/30 backdrop-blur-md shadow-sm">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input 
              id="name"
              name="name"
              type="text" 
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 border rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input 
              id="email"
              name="email"
              type="email" 
              required
              placeholder="john@example.com"
              className="w-full px-4 py-2 border rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea 
              id="message"
              name="message"
              required
              rows={4}
              placeholder="How can I help you?"
              className="w-full px-4 py-2 border rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Sending...</span>
            ) : (
              <>
                Send Message
                <Send className="size-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
