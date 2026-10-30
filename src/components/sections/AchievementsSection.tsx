'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import TerminalBadge from '@/components/ui/TerminalBadge';
import { HACKATHONS_DATA } from '@/data/portfolioData';
import { Award, ShieldAlert, Sparkles, AlertTriangle, CheckCircle2, Cpu } from 'lucide-react';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 lg:py-28 border-t border-border-subtle bg-bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05/07"
          tag="COMPETITIVE_ENGINEERING"
          title="Hackathons & Innovation Milestones"
          description="High-velocity competitive hackathon milestones, architectural proposals, and open-source accolades."
        />

        {/* Prominent Verification & Discrepancy Audit Callout */}
        <div className="mb-10 p-5 rounded-xl border border-amber-500/30 bg-amber-500/5 corner-bracket">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1.5 font-mono text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-amber-300 uppercase tracking-wide">
                  [AUDIT_FLAG // HACKATHON_FINALIST_COUNT_VERIFICATION]
                </span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px]">
                  RECORD RECONCILIATION
                </span>
              </div>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                Resume headline references <strong className="text-text-primary">3× Hackathon Finalist</strong>, whereas LinkedIn profile summary lists <strong className="text-text-primary">Four-Time Hackathon Finalist</strong>. Key tracked competitions include <span className="text-accent-secondary">Smart India Hackathon 2026</span> (Top 45 / 350+ teams), <span className="text-accent-secondary">IntrusionX Cybersecurity Hackathon</span>, and <span className="text-accent-secondary">Paytm Build for India AI Hackathon</span>. The final verified statistic is actively flagged for author confirmation.
              </p>
            </div>
          </div>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {HACKATHONS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-xl border border-border-strong bg-bg-secondary flex flex-col justify-between shadow-xl hover:border-accent-primary/60 transition-all duration-300 corner-bracket"
            >
              <div>
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <TerminalBadge variant="accent">
                    {item.period}
                  </TerminalBadge>
                  {item.team && (
                    <span className="font-mono text-xs text-text-muted">
                      TEAM: <span className="text-accent-secondary font-bold">{item.team}</span>
                    </span>
                  )}
                </div>

                {/* Title & Event */}
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-text-primary mb-1">
                  {item.title}
                </h3>
                <div className="font-mono text-xs text-accent-primary font-semibold mb-3">
                  {item.achievement}
                </div>
                <div className="font-sans text-xs text-text-muted mb-4">
                  {item.event}
                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Concept Architecture Breakdown (For SIH & AI hackathons) */}
                {item.conceptHighlights && (
                  <div className="mb-5 p-4 rounded-lg bg-bg-elevated/40 border border-border-subtle space-y-2">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-accent-primary flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Proposed Architectural Highlights</span>
                    </div>
                    {item.conceptHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-sans text-text-muted">
                        <span className="text-accent-secondary mt-0.5">•</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Technologies / Tags */}
              {item.technologies && (
                <div className="pt-4 border-t border-border-subtle flex flex-wrap gap-1.5 mt-2">
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-bg-elevated border border-border-subtle text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
