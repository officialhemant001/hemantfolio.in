"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, Download, Maximize2, ZoomIn, ZoomOut,
  ExternalLink, Award, Share2, Printer
} from "lucide-react";
import { toast } from "sonner";

const CERTIFICATE_PDF = "/Techphile.tx";
const CERTIFICATE_TITLE = "Hemant Sonkar — Certificates";

export default function CertificateClient() {
  const [zoom, setZoom] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 25, 200));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 25, 50));
  const handleReset = () => setZoom(100);

  const handleFullscreen = () => {
    const el = document.documentElement;
    if (!document.fullscreenElement) {
      el.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = CERTIFICATE_PDF;
    a.download = "Techphile.tx";
    a.click();
  };

  const handlePrint = () => {
    // Open print dialog for the PDF
    const printWindow = window.open(CERTIFICATE_PDF);
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    } else {
      toast.error("Popup blocked! Please allow popups to print the certificate.");
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: "Hemant Sonkar - Certifications",
      text: "Check out Hemant Sonkar's professional qualifications and certificates.",
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        toast.success("Certificates shared successfully!");
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          toast.error("Error sharing page.");
        }
      }
    } else {
      // Fallback copy link to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Certificates page link copied to clipboard!");
      } catch (err) {
        toast.error("Could not copy link.");
      }
    }
  };

  return (
    <main className="min-h-dvh flex flex-col relative pb-20">
      <div className="mx-auto w-full max-w-2xl pt-6 space-y-6">

        {/* Back */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <Award className="size-5 text-amber-500" />
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Certifications Viewer</h1>
          </div>
          <p className="text-sm text-muted-foreground font-semibold">
            Professional accomplishments, course certificates, and academic achievements.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-3 p-3 rounded-xl border border-border/60 bg-card/60 backdrop-blur-xs shadow-xs">
          {/* Zoom controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={handleZoomOut}
              disabled={zoom <= 50}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut className="size-4" />
            </button>

            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-all min-w-[52px] text-center cursor-pointer"
              title="Reset Zoom"
              aria-label="Reset zoom"
            >
              {zoom}%
            </button>

            <button
              onClick={handleZoomIn}
              disabled={zoom >= 200}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn className="size-4" />
            </button>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1 flex-wrap">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-all cursor-pointer"
              title="Print Certificate"
              aria-label="Print certificate"
            >
              <Printer className="size-4" />
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-all cursor-pointer"
              title="Share Page"
              aria-label="Share page"
            >
              <Share2 className="size-4" />
            </button>

            <button
              onClick={handleFullscreen}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-all cursor-pointer"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              aria-label="Toggle fullscreen"
            >
              <Maximize2 className="size-4" />
            </button>

            <Link
              href={CERTIFICATE_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-all cursor-pointer"
              title="Open in new tab"
              aria-label="Open certificate in new tab"
            >
              <ExternalLink className="size-4" />
            </Link>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-bold text-foreground hover:bg-muted/60 hover:shadow-xs transition-all cursor-pointer"
              aria-label="Download certificate"
            >
              <Download className="size-3.5" />
              Download
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div
          className="rounded-2xl border border-border/60 overflow-hidden shadow-lg bg-muted/30 transition-all duration-300"
          style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top center" }}
        >
          <iframe
            src={`${CERTIFICATE_PDF}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            title={CERTIFICATE_TITLE}
            className="w-full"
            style={{ height: "700px", border: "none" }}
            aria-label="Certificate PDF viewer"
            loading="lazy"
          />
        </div>

        {/* Fallback */}
        <p className="text-center text-xs text-muted-foreground font-semibold">
          Certificate not displaying?{" "}
          <Link
            href={CERTIFICATE_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Open directly in browser
          </Link>
          {" "}or{" "}
          <button
            onClick={handleDownload}
            className="underline underline-offset-4 hover:text-foreground transition-colors cursor-pointer"
          >
            download it
          </button>
          .
        </p>

      </div>
    </main>
  );
}
