'use client';

import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Orbit, Sparkles, Terminal, FileDown } from 'lucide-react';
import HeroConstellation from '@/components/3d/HeroConstellation';
import TerminalBadge from '@/components/ui/TerminalBadge';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { soundFx } from '@/lib/sound';

interface HeroSectionProps {
  onOpenCosmos: () => void;
}

export default function HeroSection({ onOpenCosmos }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-grid-pattern"
    >
      {/* Editorial Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 border-x border-border-subtle/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Top Technical Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-border-subtle/80 font-mono text-xs text-text-muted">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-accent-primary">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-ping" />
              <span>SYS_READY // DFN_INDEX: {PERSONAL_INFO.fieldIndex}</span>
            </span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">GEO: {PERSONAL_INFO.coordinates} (NOIDA_IN)</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-text-secondary">ACADEMIC CGPA: 8.54</span>
            <span>|</span>
            <span className="text-accent-secondary">B.TECH CSE (2025–2029)</span>
          </div>
        </div>

        {/* Main Grid: Editorial Identity + 3D Constellation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & Intent (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2">
              <TerminalBadge variant="accent" dot>
                {PERSONAL_INFO.status}
              </TerminalBadge>
            </div>

            {/* Giant Editorial Heading */}
            <div className="space-y-1">
              <span className="font-mono text-xs text-accent-secondary tracking-widest uppercase">
                // SYSTEM_IDENTITY: PORTFOLIO_V2.6
              </span>
              <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-7xl tracking-tighter text-text-primary uppercase leading-[0.95]">
                UTKARSH
                <span className="block text-accent-primary text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                  KUSHWAHA
                </span>
              </h1>
            </div>

            {/* Sub-headline Professional Identity */}
            <div className="font-mono text-sm sm:text-base text-accent-secondary flex flex-wrap items-center gap-x-2 gap-y-1 font-medium">
              <span>Computer Science Student</span>
              <span className="text-text-muted">/</span>
              <span>Software Developer</span>
              <span className="text-text-muted">/</span>
              <span>Problem Solver</span>
            </div>

            {/* Authentic Introduction */}
            <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.intro}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-accent-primary text-bg-primary font-mono text-xs sm:text-sm font-bold tracking-wide hover:bg-accent-secondary transition-all shadow-lg shadow-accent-primary/10"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded border border-border-strong bg-bg-secondary hover:border-accent-primary text-text-primary hover:text-accent-primary font-mono text-xs sm:text-sm tracking-wide transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>CONNECT WITH ME</span>
              </a>

              <button
                onClick={() => {
                  soundFx.playBeacon();
                  onOpenCosmos();
                }}
                className="inline-flex items-center gap-2 px-4 py-3 rounded border border-accent-primary/40 bg-accent-primary/10 hover:bg-accent-primary/20 text-accent-primary font-mono text-xs sm:text-sm tracking-wide transition-all"
                title="Enter Experimental 3D Cosmos Space"
              >
                <Orbit className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
                <span>ENTER 3D COSMOS</span>
              </button>
            </div>

            {/* Social & Verification Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-text-muted">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="flex items-center gap-1.5 hover:text-accent-primary transition-colors py-1"
              >
                <Github className="w-4 h-4" />
                <span>github.com/utkarshkushwaha159</span>
              </a>

              <span className="hidden sm:inline text-border-strong">•</span>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="flex items-center gap-1.5 hover:text-accent-primary transition-colors py-1"
              >
                <Linkedin className="w-4 h-4 text-[#0077B5]" />
                <span>linkedin.com/in/utkarsh-kk</span>
              </a>

              <span className="hidden sm:inline text-border-strong">•</span>

              <a
                href="/resume"
                onClick={() => soundFx.playClick()}
                className="flex items-center gap-1.5 hover:text-accent-primary transition-colors py-1 text-accent-secondary"
              >
                <FileDown className="w-4 h-4" />
                <span>Formal Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Signature 3D Interactive Constellation (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md sm:max-w-lg rounded-2xl border border-border-subtle bg-bg-secondary/40 backdrop-blur-sm p-2 corner-bracket">
              {/* Subtle Corner Telemetry */}
              <div className="absolute top-3 left-3 z-20 font-mono text-[10px] text-text-muted">
                THREE_JS // WEBGL_PARTICLE_CORE
              </div>
              <div className="absolute top-3 right-3 z-20 font-mono text-[10px] text-accent-primary/70">
                ACTIVE_ROTATION: 60FPS
              </div>

              {/* 3D Canvas */}
              <HeroConstellation />
            </div>
          </div>
        </div>

        {/* Quick Highlights Counter Bar */}
        <div className="mt-14 pt-8 border-t border-border-subtle grid grid-cols-2 md:grid-cols-4 gap-4">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div key={i} className="p-4 rounded border border-border-subtle bg-bg-secondary/30">
              <div className="font-mono text-[11px] text-text-muted uppercase mb-1">{stat.label}</div>
              <div className="font-heading font-black text-xl sm:text-2xl text-accent-primary">
                {stat.value}
              </div>
              <div className="font-sans text-xs text-text-secondary mt-0.5">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
