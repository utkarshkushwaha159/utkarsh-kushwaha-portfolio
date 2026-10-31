import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Download, ExternalLink, FileText } from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://utkarsh-kushwaha-portfolio.vercel.app';
const resumePdfPath = '/Utkarsh_Kushwaha_Resume.pdf';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Official one-page resume of Utkarsh Kushwaha, B.Tech Computer Science student at NIET (AKTU). Software developer, hackathon finalist, and open-source contributor.',
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    title: 'Resume | Utkarsh Kushwaha Portfolio',
    description:
      'Official one-page resume of Utkarsh Kushwaha, B.Tech Computer Science student at NIET (AKTU).',
    url: `${siteUrl}/resume`,
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume | Utkarsh Kushwaha Portfolio',
    description:
      'Official one-page resume of Utkarsh Kushwaha, B.Tech Computer Science student at NIET (AKTU).',
  },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary py-6 sm:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Action Bar */}
        <header className="mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-5 border-b border-border-subtle">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-text-secondary hover:text-accent-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <a
              href={resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle bg-bg-secondary hover:border-accent-primary text-text-secondary hover:text-accent-primary text-xs font-semibold transition-all"
              title="Open original resume in a new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>

            <a
              href={resumePdfPath}
              download="Utkarsh_Kushwaha_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent-primary text-bg-primary hover:bg-accent-secondary text-xs font-bold transition-all shadow-md hover:shadow-cyan-500/20"
              title="Download original one-page resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>
        </header>

        {/* Page Identity Header */}
        <div className="mb-4 flex items-center justify-between text-xs text-text-muted">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-accent-primary" />
            <span className="font-heading font-semibold text-text-primary uppercase tracking-wider text-xs">
              Utkarsh Kushwaha — Official Resume (1 Page)
            </span>
          </div>
          <span className="hidden sm:inline font-mono text-[11px] text-text-muted">
            PDF · 42 KB
          </span>
        </div>

        {/* Embedded Original PDF Document Viewer */}
        <div className="relative w-full rounded-2xl border border-border-subtle bg-bg-secondary overflow-hidden shadow-2xl">
          <object
            data={`${resumePdfPath}#view=FitH`}
            type="application/pdf"
            className="w-full h-[78vh] min-h-[640px] block"
            aria-label="Utkarsh Kushwaha Original One-Page Resume PDF"
          >
            {/* Fallback for browsers / mobile webviews without inline PDF rendering */}
            <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center h-[78vh] min-h-[640px] bg-bg-secondary">
              <div className="w-16 h-16 rounded-2xl bg-bg-elevated border border-border-subtle flex items-center justify-center text-accent-primary mb-4 shadow-lg">
                <FileText className="w-8 h-8" />
              </div>
              <h2 className="font-heading text-lg sm:text-xl font-bold text-text-primary mb-2">
                Original One-Page Resume
              </h2>
              <p className="font-sans text-xs sm:text-sm text-text-secondary max-w-md mb-6 leading-relaxed">
                Your device or browser is set to handle PDFs externally. You can view or download the complete original document directly below.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border-subtle bg-bg-elevated hover:border-accent-primary text-text-primary hover:text-accent-primary text-xs font-semibold transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View in New Tab</span>
                </a>
                <a
                  href={resumePdfPath}
                  download="Utkarsh_Kushwaha_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-primary text-bg-primary hover:bg-accent-secondary text-xs font-bold transition-all shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Original PDF</span>
                </a>
              </div>
            </div>
          </object>
        </div>

        {/* Mobile Guidance Note */}
        <div className="mt-4 sm:hidden text-center">
          <p className="font-sans text-[11px] text-text-muted">
            Viewing on a mobile device? Use the buttons at the top to download or view the PDF in full screen.
          </p>
        </div>
      </div>
    </div>
  );
}
