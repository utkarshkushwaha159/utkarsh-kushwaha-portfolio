'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import TerminalBadge from '@/components/ui/TerminalBadge';
import { EDUCATION_DATA } from '@/data/portfolioData';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 lg:py-28 border-t border-border-subtle bg-bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academics"
          title="Education"
          description="Foundational training in Computer Science & Engineering maintaining high academic discipline."
        />

        {/* Academic Card */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-border-subtle bg-bg-secondary p-7 sm:p-10 shadow-2xl">
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-subtle">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-accent-primary/10 text-accent-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <TerminalBadge variant="accent">
                  Current Enrollment
                </TerminalBadge>
                <div className="text-xs text-text-muted mt-1 font-sans">
                  Batch: 2025 – 2029 (Expected)
                </div>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="sm:text-right">
              <span className="text-xs text-text-muted block uppercase tracking-wider mb-0.5">Cumulative CGPA</span>
              <span className="font-heading font-extrabold text-3xl sm:text-4xl text-accent-primary">
                8.54 <span className="text-sm font-sans text-text-muted font-normal">/ 10.0</span>
              </span>
            </div>
          </div>

          {/* Institution & Degree */}
          <div className="mt-6 space-y-2">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary">
              {EDUCATION_DATA.degree}
            </h3>
            <div className="font-sans text-base text-text-primary font-medium">
              {EDUCATION_DATA.institution}
            </div>
            <div className="font-sans text-xs sm:text-sm text-text-secondary">
              {EDUCATION_DATA.university}
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-2 text-xs font-sans text-text-muted">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent-secondary" />
                <span>{EDUCATION_DATA.period}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-text-muted" />
                <span>Greater Noida, Uttar Pradesh, India</span>
              </span>
            </div>
          </div>

          {/* Academic Highlights */}
          <div className="mt-8 pt-6 border-t border-border-subtle space-y-3.5">
            <h4 className="font-heading font-semibold text-sm text-text-primary flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-accent-primary" />
              <span>Academic Highlights &amp; Coursework Focus</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EDUCATION_DATA.highlights.map((hl, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-bg-elevated/40 border border-border-subtle font-sans text-xs text-text-secondary leading-relaxed"
                >
                  <span className="text-accent-primary font-bold mr-2">•</span>
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
