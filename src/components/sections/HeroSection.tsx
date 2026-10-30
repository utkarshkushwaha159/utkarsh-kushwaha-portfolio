'use client';

import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText, Code2, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import TerminalBadge from '@/components/ui/TerminalBadge';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-grid-subtle"
    >
      {/* Subtle radial glow overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-accent-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2">
              <TerminalBadge variant="accent" dot>
                {PERSONAL_INFO.status}
              </TerminalBadge>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-7xl tracking-tight text-text-primary uppercase leading-[0.96]">
                UTKARSH
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                  KUSHWAHA
                </span>
              </h1>
            </div>

            {/* Sub-headline Professional Identity */}
            <div className="font-sans text-base sm:text-lg text-text-secondary font-medium flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <span className="text-text-primary">Computer Science Student</span>
              <span className="text-accent-primary font-bold">·</span>
              <span className="text-text-primary">Software Developer</span>
              <span className="text-accent-primary font-bold">·</span>
              <span className="text-accent-primary font-semibold">Problem Solver</span>
            </div>

            {/* Introduction */}
            <p className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl">
              {PERSONAL_INFO.intro}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent-primary text-bg-primary font-heading text-sm font-bold tracking-wide hover:bg-accent-secondary transition-all shadow-lg shadow-accent-primary/10 hover:shadow-accent-primary/20"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border-subtle bg-bg-secondary hover:border-accent-primary text-text-primary hover:text-accent-primary font-heading text-sm font-semibold tracking-wide transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Connect With Me</span>
              </a>

              <a
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 text-sm font-medium transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-5 text-sm font-sans text-text-muted">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent-primary transition-colors py-1"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <span className="text-border-subtle">•</span>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent-primary transition-colors py-1"
              >
                <Linkedin className="w-4 h-4 text-accent-secondary" />
                <span>LinkedIn</span>
              </a>

              <span className="text-border-subtle">•</span>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 hover:text-accent-primary transition-colors py-1"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Sophisticated 2D Modern Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-border-subtle bg-bg-secondary p-6 sm:p-7 shadow-2xl cyan-glow">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="font-mono text-xs text-text-muted flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-accent-primary" />
                  <span>developer.profile.ts</span>
                </div>
              </div>

              {/* Code Snippet / Architectural Card Preview */}
              <div className="space-y-4 font-mono text-xs sm:text-sm">
                <div className="text-text-muted">
                  <span className="text-accent-primary">const</span> engineer = &#123;
                </div>

                <div className="pl-4 space-y-1.5 text-text-secondary">
                  <div>
                    <span className="text-text-muted">name:</span>{' '}
                    <span className="text-[#A9B8C0]">&apos;Utkarsh Kushwaha&apos;</span>,
                  </div>
                  <div>
                    <span className="text-text-muted">degree:</span>{' '}
                    <span className="text-accent-primary">&apos;B.Tech CSE @ NIET (AKTU)&apos;</span>,
                  </div>
                  <div>
                    <span className="text-text-muted">cgpa:</span>{' '}
                    <span className="text-accent-secondary font-bold">8.54</span>,
                  </div>
                  <div>
                    <span className="text-text-muted">languages:</span> [
                    <span className="text-text-primary">&apos;Java&apos;</span>,{' '}
                    <span className="text-text-primary">&apos;Python&apos;</span>,{' '}
                    <span className="text-text-primary">&apos;C/C++&apos;</span>,{' '}
                    <span className="text-text-primary">&apos;JavaScript&apos;</span>],
                  </div>
                  <div>
                    <span className="text-text-muted">hackathon:</span>{' '}
                    <span className="text-accent-primary">&apos;SIH 2026 Top 45 Finalist&apos;</span>,
                  </div>
                  <div>
                    <span className="text-text-muted">openSource:</span>{' '}
                    <span className="text-text-primary">&apos;GSSoC 2026 Contributor&apos;</span>
                  </div>
                </div>

                <div className="text-text-muted">&#125;;</div>
              </div>

              {/* Key Competency Indicators */}
              <div className="mt-6 pt-5 border-t border-border-subtle grid grid-cols-2 gap-3 text-xs font-sans">
                <div className="p-3 rounded-xl bg-bg-elevated/60 border border-border-subtle">
                  <span className="text-text-muted block text-[11px] mb-0.5">Core Focus</span>
                  <span className="font-semibold text-text-primary">Full-Stack &amp; Systems</span>
                </div>
                <div className="p-3 rounded-xl bg-bg-elevated/60 border border-border-subtle">
                  <span className="text-text-muted block text-[11px] mb-0.5">Academic Progress</span>
                  <span className="font-semibold text-accent-primary">Graduation 2029</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights Counter Bar */}
        <div className="mt-16 pt-8 border-t border-border-subtle grid grid-cols-2 md:grid-cols-4 gap-4">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div key={i} className="p-4 rounded-xl border border-border-subtle bg-bg-secondary/40">
              <div className="font-sans text-xs text-text-muted uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="font-heading font-bold text-xl sm:text-2xl text-accent-primary">
                {stat.value}
              </div>
              <div className="font-sans text-xs text-text-secondary mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
