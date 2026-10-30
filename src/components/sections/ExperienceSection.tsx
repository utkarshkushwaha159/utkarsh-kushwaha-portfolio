'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import TerminalBadge from '@/components/ui/TerminalBadge';
import { EXPERIENCES_DATA } from '@/data/portfolioData';
import { Briefcase, GitPullRequest, Award, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  const getBadgeType = (type: string) => {
    switch (type) {
      case 'internship':
        return { label: 'INTERNSHIP', variant: 'accent' as const, icon: Briefcase };
      case 'opensource':
        return { label: 'OPEN SOURCE PROGRAM', variant: 'secondary' as const, icon: GitPullRequest };
      case 'simulation':
        return { label: 'LEARNING SIMULATION (FORAGE)', variant: 'muted' as const, icon: Award };
      default:
        return { label: 'EXPERIENCE', variant: 'muted' as const, icon: Briefcase };
    }
  };

  return (
    <section id="experience" className="py-20 lg:py-28 border-t border-border-subtle bg-bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04/07"
          tag="CAREER_TIMELINE"
          title="Professional Experience & Contributions"
          description="Chronological engineering milestones encompassing organizational internships, open-source code contributions, and enterprise simulations."
        />

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l border-border-strong space-y-12 my-6">
          {EXPERIENCES_DATA.map((exp, idx) => {
            const badge = getBadgeType(exp.type);
            const Icon = badge.icon;
            return (
              <div key={exp.id} className="relative group">
                {/* Timeline node marker */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-6 h-6 rounded-full bg-bg-primary border-2 border-accent-primary flex items-center justify-center group-hover:scale-125 group-hover:bg-accent-primary transition-all duration-200">
                  <span className="w-2 h-2 rounded-full bg-accent-primary group-hover:bg-bg-primary" />
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-xl border border-border-subtle bg-bg-secondary/40 group-hover:border-border-strong group-hover:bg-bg-secondary transition-all shadow-lg corner-bracket">
                  {/* Top Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <TerminalBadge variant={badge.variant} dot>
                        <Icon className="w-3 h-3 mr-1 inline" />
                        {badge.label}
                      </TerminalBadge>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-text-muted">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-accent-secondary" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-text-muted" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Role & Org */}
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-text-primary group-hover:text-accent-primary transition-colors">
                    {exp.role}
                  </h3>
                  <div className="font-mono text-sm text-accent-secondary font-medium mb-4">
                    {exp.organization}
                  </div>

                  {/* Clarification Note for Job Simulation */}
                  {exp.credentialNote && (
                    <div className="p-3 mb-4 rounded border border-accent-primary/20 bg-accent-primary/5 font-mono text-xs text-accent-secondary flex items-start gap-2">
                      <span className="text-accent-primary font-bold">INFO:</span>
                      <span>{exp.credentialNote}</span>
                    </div>
                  )}

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.highlights.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack pills */}
                  <div className="pt-4 border-t border-border-subtle flex flex-wrap gap-2">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] px-2.5 py-1 rounded bg-bg-elevated border border-border-subtle text-text-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
