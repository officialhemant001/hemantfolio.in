"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { Download, FileText, X } from "lucide-react";
import Link from "next/link";

export default function ResumeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-y-6 w-full">
      <BlurFade delay={0.04 * 13}>
        <h2 className="text-xl font-bold">Resume & Details</h2>
      </BlurFade>
      
      <BlurFade delay={0.04 * 14}>
        <div className="relative overflow-hidden border rounded-xl p-8 bg-card/20 backdrop-blur-sm shadow-sm group hover:border-primary/50 transition-colors">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h3 className="text-2xl font-bold flex items-center justify-center md:justify-start gap-2">
                <FileText className="size-6 text-primary" /> 
                Professional Resume
              </h3>
              <p className="text-muted-foreground max-w-md">
                View my comprehensive professional experience, technical skills, and educational background. ATS-friendly format.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-all active:scale-95 w-full sm:w-auto"
              >
                <FileText className="size-4" />
                View Resume
              </button>
              
              <Link
                href="/typs.pdf"
                target="_blank"
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-muted transition-all active:scale-95 w-full sm:w-auto group/download"
              >
                <Download className="size-4 group-hover/download:translate-y-0.5 transition-transform" />
                Download PDF
              </Link>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Resume Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl h-[85vh] bg-card border rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b bg-muted/30">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <FileText className="size-5" />
                Hemant_Sonkar_Resume.pdf
              </h3>
              <div className="flex items-center gap-2">
                <Link
                  href="/typs.pdf"
                  target="_blank"
                  download
                  className="p-2 hover:bg-muted rounded-md transition-colors text-muted-foreground hover:text-foreground"
                  title="Download"
                >
                  <Download className="size-5" />
                </Link>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-muted rounded-md transition-colors text-muted-foreground hover:text-foreground"
                  title="Close"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>
            
            {/* Modal Body (PDF Viewer) */}
            <div className="flex-1 w-full bg-muted/10 overflow-hidden relative">
              <iframe 
                src="/typs.pdf#view=FitH" 
                className="w-full h-full border-none"
                title="Resume PDF"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
