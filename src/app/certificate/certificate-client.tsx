"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  ArrowLeft, Download, Maximize2, Minimize2, ZoomIn, ZoomOut,
  Award, Share2, Printer, ChevronLeft, ChevronRight, X, Eye, RefreshCw, ExternalLink
} from "lucide-react";
import { toast } from "sonner";
import { DATA } from "@/data/resume";

export default function CertificateClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const certId = searchParams.get("id");

  // State
  const [activeIdx, setActiveIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const viewerRef = useRef<HTMLDivElement>(null);

  // Sync index with search parameter
  useEffect(() => {
    if (certId) {
      const idx = DATA.certifications.findIndex((c) => c.id === certId);
      if (idx !== -1) {
        setActiveIdx(idx);
        setIsLightboxOpen(true);
      }
    }
  }, [certId]);

  const activeCert = DATA.certifications[activeIdx] || DATA.certifications[0];

  // Navigation handlers
  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const nextIdx = (activeIdx + 1) % DATA.certifications.length;
    setActiveIdx(nextIdx);
    router.replace(`/certificate?id=${DATA.certifications[nextIdx].id}`, { scroll: false });
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const prevIdx = (activeIdx - 1 + DATA.certifications.length) % DATA.certifications.length;
    setActiveIdx(prevIdx);
    router.replace(`/certificate?id=${DATA.certifications[prevIdx].id}`, { scroll: false });
  };

  // Zoom handlers
  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom((z) => Math.min(z + 25, 200));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom((z) => Math.max(z - 25, 50));
  };

  const handleResetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom(100);
  };

  // Lightbox close/open handlers
  const openLightbox = (idx: number) => {
    setActiveIdx(idx);
    setIsLightboxOpen(true);
    setZoom(100);
    router.replace(`/certificate?id=${DATA.certifications[idx].id}`, { scroll: false });
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setIsFullscreen(false);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    router.replace("/certificate", { scroll: false });
  };

  // Fullscreen handlers
  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!viewerRef.current) return;

    if (!document.fullscreenElement) {
      viewerRef.current.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(() => toast.error("Fullscreen mode is not supported by your browser."));
    } else {
      document.exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(() => {});
    }
  };

  // Track browser fullscreen exit events (e.g. pressing Esc key)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Action handlers
  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    const a = document.createElement("a");
    a.href = activeCert.pdfUrl;
    // Extract base name
    const filename = activeCert.pdfUrl.substring(activeCert.pdfUrl.lastIndexOf('/') + 1);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    toast.success(`Downloading ${activeCert.title}...`);
  };

  const handlePrint = (e: React.MouseEvent) => {
    e.stopPropagation();
    const printWindow = window.open(activeCert.pdfUrl);
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    } else {
      toast.error("Popup blocked! Please allow popups to print the certificate.");
    }
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/certificate?id=${activeCert.id}`;
    const shareData = {
      title: `${activeCert.title} - Hemant Sonkar`,
      text: `Check out my certification for ${activeCert.title} issued by ${activeCert.issuer}.`,
      url: shareUrl,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        toast.success("Certificate link shared successfully!");
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          toast.error("Error sharing certificate.");
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        toast.success("Certificate link copied to clipboard!");
      } catch (err) {
        toast.error("Could not copy link.");
      }
    }
  };

  return (
    <main className="min-h-dvh flex flex-col relative pb-20">
      <div className="mx-auto w-full max-w-3xl pt-6 space-y-8 px-2 sm:px-4">

        {/* Back navigation */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group font-semibold"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>

        {/* Header Title */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Award className="size-6 text-amber-500 animate-pulse" />
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Certifications Portfolio</h1>
          </div>
          <p className="text-sm text-muted-foreground font-semibold">
            Interactive portal displaying verified credentials, academic qualifications, and technical accomplishments.
          </p>
        </div>

        {/* Certificate Preview Gallery (Proper Preview First) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {DATA.certifications.map((cert, index) => (
            <div
              key={cert.id}
              onClick={() => openLightbox(index)}
              className={`group cursor-pointer relative flex flex-col justify-between p-6 border border-border/70 rounded-2xl bg-card hover:bg-muted/10 shadow-sm transition-all duration-300 overflow-hidden ${cert.hoverBorder} hover:-translate-y-1 hover:shadow-md`}
            >
              {/* Colored subtle gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />

              {/* Holographic style seal element for design premiumness */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full border-4 border-dashed border-border/20 group-hover:border-border/40 group-hover:scale-110 group-hover:rotate-45 transition-all duration-700 flex items-center justify-center">
                <Award className={`size-12 opacity-5 ${cert.iconColor} group-hover:opacity-20 transition-opacity`} />
              </div>

              <div className="z-10 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className={`w-10 h-10 rounded-xl bg-background border border-border/60 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <Award className={`size-5 ${cert.iconColor}`} />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-background border border-border/50 rounded-full shadow-xs">
                    {cert.date}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-base text-foreground leading-snug group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>

              {/* Preview CTA */}
              <div className="z-10 mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                <span className="flex items-center gap-1.5">
                  <Eye className="size-3.5" />
                  View Preview
                </span>
                <span className="underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Open Lightbox →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Interactive Lightbox Modal Viewer ───────────────────────── */}
        {isLightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex flex-col justify-between bg-black/85 backdrop-blur-md animate-in fade-in duration-300"
            onClick={closeLightbox}
          >
            {/* Lightbox Header Toolbar */}
            <div
              className="w-full bg-background/90 dark:bg-card/90 border-b border-border/40 p-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md backdrop-blur-md relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Active title and index */}
              <div className="flex items-center gap-3 min-w-0 self-start sm:self-center">
                <div className="p-2 border border-border/50 rounded-xl bg-muted/50 hidden sm:block shrink-0">
                  <Award className="size-5 text-amber-500 animate-pulse" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-sm font-bold text-foreground truncate leading-tight">
                    {activeCert.title}
                  </h2>
                  <p className="text-[10px] font-semibold text-muted-foreground">
                    Credential {activeIdx + 1} of {DATA.certifications.length} • {activeCert.issuer}
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-1 bg-muted/30 p-1 rounded-xl border border-border/40">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all cursor-pointer"
                  title="Previous Certificate"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <span className="text-[10px] font-mono font-bold px-2 text-muted-foreground select-none">
                  {activeIdx + 1} / {DATA.certifications.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-background/80 transition-all cursor-pointer"
                  title="Next Certificate"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>

              {/* Action Controls */}
              <div className="flex items-center gap-1 self-end sm:self-center">
                {/* Zoom controls */}
                <div className="flex items-center gap-0.5 border-r border-border/50 pr-1 mr-1">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoom <= 50}
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="size-3.5" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="px-2 py-1 rounded-md text-[10px] font-mono font-bold text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-all cursor-pointer"
                    title="Reset Zoom"
                  >
                    {zoom}%
                  </button>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoom >= 200}
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="size-3.5" />
                  </button>
                </div>

                {/* Print, share & Fullscreen */}
                <button
                  onClick={handlePrint}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-all cursor-pointer"
                  title="Print Certificate"
                >
                  <Printer className="size-3.5" />
                </button>
                <button
                  onClick={handleShare}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-all cursor-pointer"
                  title="Share Link"
                >
                  <Share2 className="size-3.5" />
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-all cursor-pointer"
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                >
                  {isFullscreen ? <Minimize2 className="size-3.5" /> : <Maximize2 className="size-3.5" />}
                </button>

                {/* Explicit download button */}
                <button
                  onClick={handleDownload}
                  className="ml-1 inline-flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground hover:bg-primary/95 text-[10px] font-bold rounded-lg shadow-sm transition-all active:scale-95 cursor-pointer"
                  title="Download File"
                >
                  <Download className="size-3" />
                  Download
                </button>

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-500/10 transition-all cursor-pointer"
                  title="Close Viewer"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            {/* Document Interactive Viewer Container */}
            <div
              ref={viewerRef}
              className="flex-1 w-full flex items-center justify-center p-3 sm:p-6 overflow-auto"
              onClick={closeLightbox}
            >
              {/* Scaling wrapper to support real CSS transforms */}
              <div
                className="relative bg-background dark:bg-card border border-border/40 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 w-full max-w-4xl h-[75vh] flex items-center justify-center"
                style={{
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: "center center",
                  maxHeight: "85vh",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={`${activeCert.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title={activeCert.title}
                  className="w-full h-full border-none"
                  loading="eager"
                  aria-label={`PDF viewer for ${activeCert.title}`}
                />
              </div>

              {/* Side Navigation Arrow Buttons (Desktop) */}
              <button
                onClick={handlePrev}
                className="fixed left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 hover:scale-105 active:scale-95 transition-all hidden md:flex cursor-pointer shadow-md"
                title="Previous"
              >
                <ChevronLeft className="size-6" />
              </button>

              <button
                onClick={handleNext}
                className="fixed right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/10 hover:scale-105 active:scale-95 transition-all hidden md:flex cursor-pointer shadow-md"
                title="Next"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>

            {/* Lightbox Footer Bar (controls layout validation) */}
            <div
              className="w-full bg-background/80 dark:bg-card/80 border-t border-border/30 p-2 text-center text-[10px] font-semibold text-muted-foreground select-none"
              onClick={(e) => e.stopPropagation()}
            >
              Certificate Viewer Portal • Drag or pinch to zoom • Use arrows to navigate
            </div>
          </div>
        )}

        {/* Fallback Section */}
        <div className="pt-6 border-t border-border/30 text-center space-y-2">
          <p className="text-xs text-muted-foreground font-semibold">
            Experiencing display issues? You can open the document directly or refresh the viewer:
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href={activeCert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-bold"
            >
              <ExternalLink className="size-3.5" />
              Open current PDF directly
            </Link>
            <span className="text-border">|</span>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-bold cursor-pointer"
            >
              <RefreshCw className="size-3.5 animate-spin-slow" />
              Refresh Viewer Page
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
