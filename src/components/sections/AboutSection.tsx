'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import TerminalBadge from '@/components/ui/TerminalBadge';
import { PERSONAL_INFO, AREAS_OF_INTEREST } from '@/data/portfolioData';
import { Compass, GraduationCap, Code2, ShieldAlert, Cpu, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 border-t border-border-subtle bg-bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01/07"
          tag="ABOUT_ARCHIVE"
          title="Digital Field Notes & Engineering Ethos"
          description="Synthesizing academic computer science rigor with empirical software construction."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
              {PERSONAL_INFO.aboutExtended.map((para, idx) => (
                <p key={idx} className="p-4 rounded-lg bg-bg-secondary/40 border border-border-subtle hover:border-border-strong transition-colors">
                  {para}
                </p>
              ))}
            </div>

            {/* Core Philosophies */}
            <div className="pt-2">
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent-primary mb-3 flex items-center gap-2">
                <Compass className="w-4 h-4" />
                <span>// ENGINEERING PRINCIPLES</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded border border-border-subtle bg-bg-elevated/40">
                  <div className="font-mono text-xs font-bold text-text-primary mb-1">
                    Deterministic Architecture
                  </div>
                  <div className="font-sans text-xs text-text-muted">
                    Prioritizing clean OOP abstraction, verifiable data schemas, and edge-case resilience over quick fixes.
                  </div>
                </div>

                <div className="p-3.5 rounded border border-border-subtle bg-bg-elevated/40">
                  <div className="font-mono text-xs font-bold text-text-primary mb-1">
                    Continuous Open Source
                  </div>
                  <div className="font-sans text-xs text-text-muted">
                    Actively testing, reviewing, and contributing to community software via GirlScript Summer of Code.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Dossier / Academic Snapshot (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Academic Dossier Card */}
            <div className="p-6 rounded-xl border border-border-strong bg-bg-secondary corner-bracket shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle mb-4">
                <span className="font-mono text-xs text-accent-primary font-bold">
                  // CANDIDATE_DOSSIER
                </span>
                <span className="font-mono text-[10px] text-text-muted">
                  STATUS: VERIFIED
                </span>
              </div>

              <div className="space-y-4 text-xs font-sans">
                <div>
                  <span className="font-mono text-[11px] text-text-muted uppercase block">Full Name</span>
                  <span className="font-heading font-bold text-base text-text-primary">Utkarsh Kushwaha</span>
                </div>

                <div>
                  <span className="font-mono text-[11px] text-text-muted uppercase block">Academic Pursuit</span>
                  <span className="text-text-primary font-medium">B.Tech Computer Science & Engineering (2025–2029)</span>
                  <span className="text-accent-secondary block mt-0.5">Noida Institute of Engineering & Technology (NIET)</span>
                  <span className="text-text-muted text-[11px] block">Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU Lucknow)</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-2.5 rounded bg-bg-elevated border border-border-subtle">
                    <span className="font-mono text-[10px] text-text-muted uppercase block">Cumulative CGPA</span>
                    <span className="font-heading font-black text-lg text-accent-primary">8.54</span>
                  </div>
                  <div className="p-2.5 rounded bg-bg-elevated border border-border-subtle">
                    <span className="font-mono text-[10px] text-text-muted uppercase block">Base Location</span>
                    <span className="font-heading font-bold text-xs text-text-primary mt-1 block">Noida, UP, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas of Interest Grid */}
            <div className="p-6 rounded-xl border border-border-subtle bg-bg-secondary/40">
              <h4 className="font-mono text-xs uppercase tracking-wider text-text-secondary mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-accent-primary" />
                <span>Areas of Technical Focus</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {AREAS_OF_INTEREST.map((area) => (
                  <span
                    key={area}
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-bg-elevated border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary/40 transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
