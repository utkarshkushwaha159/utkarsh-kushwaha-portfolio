'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import TerminalBadge from '@/components/ui/TerminalBadge';
import { HACKATHONS_DATA } from '@/data/portfolioData';
import { Award, Info, Cpu, CheckCircle2 } from 'lucide-react';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 lg:py-28 border-t border-border-subtle bg-bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Honors"
          title="Achievements &amp; Hackathons"
          description="Competitive hackathons, system architecture proposals, and open-source milestones."
        />

        {/* Verification Note */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl border border-border-subtle bg-bg-secondary/80 flex items-start gap-3.5">
          <Info className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
          <div className="text-xs font-sans text-text-secondary leading-relaxed">
            <span className="font-semibold text-text-primary mr-1">Hackathon Finalist Profile:</span>
            Tracked finalist participations include the <strong>Smart India Hackathon 2026</strong> (selected among Top 45 of 350+ teams at NIET Internal Selection), <strong>IntrusionX Cybersecurity Hackathon</strong>, and <strong>Paytm Build for India AI Hackathon</strong>. (Final verified count: 3× / 4× finalist pending final portfolio reconciliation).
          </div>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
          {HACKATHONS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-2xl border border-border-subtle bg-bg-secondary flex flex-col justify-between shadow-xl hover:border-accent-primary/60 transition-all duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <TerminalBadge variant="accent">
                    {item.period}
                  </TerminalBadge>
                  {item.team && (
                    <span className="font-sans text-xs text-text-muted">
                      Team: <span className="text-text-primary font-medium">{item.team}</span>
                    </span>
                  )}
                </div>

                {/* Title & Event */}
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-primary mb-1">
                  {item.title}
                </h3>
                <div className="font-sans text-xs text-accent-primary font-semibold mb-2">
                  {item.achievement}
                </div>
                <div className="font-sans text-xs text-text-muted mb-4">
                  {item.event}
                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Concept Architecture Breakdown */}
                {item.conceptHighlights && (
                  <div className="mb-5 p-4 rounded-xl bg-bg-elevated/40 border border-border-subtle space-y-2">
                    <div className="font-heading text-xs font-semibold text-text-primary flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-accent-primary" />
                      <span>Proposed Architectural Highlights</span>
                    </div>
                    {item.conceptHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-sans text-text-muted">
                        <span className="text-accent-primary font-bold mt-0.5">•</span>
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
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-bg-elevated border border-border-subtle text-text-secondary"
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
