'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import TerminalBadge from '@/components/ui/TerminalBadge';
import { EDUCATION_DATA } from '@/data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 lg:py-28 border-t border-border-subtle bg-bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06/07"
          tag="ACADEMIC_FOUNDATION"
          title="Formal Education & Academic Standing"
          description="Structured university coursework in Computer Science & Engineering maintaining high academic discipline."
        />

        {/* Academic Card */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-border-strong bg-bg-secondary p-6 sm:p-10 shadow-2xl corner-bracket">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-subtle">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-bg-elevated border border-border-subtle text-accent-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <TerminalBadge variant="accent" dot>
                  CURRENT ENROLLMENT
                </TerminalBadge>
                <div className="font-mono text-xs text-text-muted mt-1">
                  BATCH: 2025 – 2029 (EXPECTED)
                </div>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="text-right">
              <span className="font-mono text-xs text-text-muted block uppercase">Cumulative Score</span>
              <span className="font-heading font-black text-3xl sm:text-4xl text-accent-primary">
                8.54 <span className="text-sm font-mono text-text-muted">/ 10.0</span>
              </span>
            </div>
          </div>

          {/* Institution & Degree */}
          <div className="mt-6 space-y-2">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-text-primary">
              {EDUCATION_DATA.degree}
            </h3>
            <div className="font-mono text-base text-accent-secondary font-medium">
              {EDUCATION_DATA.institution}
            </div>
            <div className="font-sans text-xs sm:text-sm text-text-muted">
              {EDUCATION_DATA.university}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs text-text-muted">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent-primary" />
                <span>{EDUCATION_DATA.period}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-text-muted" />
                <span>{EDUCATION_DATA.location}</span>
              </span>
            </div>
          </div>

          {/* Academic Highlights */}
          <div className="mt-8 pt-6 border-t border-border-subtle space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-accent-primary flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>// Academic Highlights & Coursework Milestones</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EDUCATION_DATA.highlights.map((hl, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-lg bg-bg-elevated/40 border border-border-subtle font-sans text-xs text-text-secondary leading-relaxed"
                >
                  <span className="text-accent-primary font-mono mr-1.5">›</span>
                  {hl}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
