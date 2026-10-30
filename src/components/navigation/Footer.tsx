'use client';

import React from 'react';
import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { soundFx } from '@/lib/sound';

export default function Footer() {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border-subtle bg-bg-primary py-12 text-xs font-mono text-text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-border-subtle">
          {/* Identity & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-text-primary font-heading font-black text-base uppercase">
              <span className="w-2 h-2 rounded-full bg-accent-primary" />
              <span>Utkarsh Kushwaha — Digital Field Notes</span>
            </div>
            <p className="font-sans text-xs text-text-secondary leading-relaxed max-w-md">
              An empirical developer portfolio cataloging software engineering architectures, algorithmic explorations, hackathon prototypes, and open-source contributions.
            </p>
            <div className="text-[11px] text-text-muted">
              LOC: {PERSONAL_INFO.location} · {PERSONAL_INFO.coordinates}
            </div>
          </div>

          {/* Direct Navigation */}
          <div className="space-y-2">
            <div className="font-bold uppercase tracking-wider text-text-primary text-[11px]">
              Index Directory
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#about" onClick={() => soundFx.playClick()} className="hover:text-accent-primary transition-colors">
                  // 01. About Me
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => soundFx.playClick()} className="hover:text-accent-primary transition-colors">
                  // 02. Skills Matrix
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => soundFx.playClick()} className="hover:text-accent-primary transition-colors">
                  // 03. Project Archive
                </a>
              </li>
              <li>
                <a href="#experience" onClick={() => soundFx.playClick()} className="hover:text-accent-primary transition-colors">
                  // 04. Experience
                </a>
              </li>
              <li>
                <a href="#achievements" onClick={() => soundFx.playClick()} className="hover:text-accent-primary transition-colors">
                  // 05. Hackathons
                </a>
              </li>
              <li>
                <Link href="/resume" onClick={() => soundFx.playClick()} className="text-accent-secondary hover:text-accent-primary transition-colors">
                  // Printable Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Deployment */}
          <div className="space-y-2">
            <div className="font-bold uppercase tracking-wider text-text-primary text-[11px]">
              Engineering Nodes
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-2 hover:text-accent-primary transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-2 hover:text-accent-primary transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0077B5]" />
                  <span>LinkedIn Network</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-2 hover:text-accent-primary transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-accent-primary" />
                  <span>Direct Dispatch</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Metadata & Return to top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} Utkarsh Kushwaha. Engineered with Next.js, TypeScript, Three.js &amp; Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-accent-primary font-bold">RELEASE: DFN-2026.PROD</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-text-secondary hover:text-accent-primary transition-colors"
            >
              <span>TOP OF FIELD NOTES</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
