'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { PERSONAL_INFO, AREAS_OF_INTEREST, EDUCATION_DATA } from '@/data/portfolioData';
import { GraduationCap, Code2, Sparkles, Target, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 border-t border-border-subtle bg-bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Background"
          title="About Me"
          description="A Computer Science undergraduate combining rigorous academic training with practical software engineering and collaborative development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 font-sans text-sm sm:text-base text-text-secondary leading-relaxed">
              {PERSONAL_INFO.aboutExtended.map((para, idx) => (
                <p key={idx} className="p-4 rounded-xl bg-bg-secondary/40 border border-border-subtle hover:border-border-strong transition-colors">
                  {para}
                </p>
              ))}
            </div>

            {/* Core Values / Goals */}
            <div className="pt-2">
              <h3 className="font-heading font-semibold text-sm text-text-primary mb-3.5 flex items-center gap-2">
                <Target className="w-4 h-4 text-accent-primary" />
                <span>Engineering Philosophy &amp; Goals</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-border-subtle bg-bg-elevated/40">
                  <div className="font-heading font-semibold text-sm text-text-primary mb-1">
                    Structured Development
                  </div>
                  <div className="font-sans text-xs text-text-secondary leading-relaxed">
                    Prioritizing clean object-oriented design, test-driven validation, and relational database integrity over quick shortcuts.
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border-subtle bg-bg-elevated/40">
                  <div className="font-heading font-semibold text-sm text-text-primary mb-1">
                    Open Collaboration
                  </div>
                  <div className="font-sans text-xs text-text-secondary leading-relaxed">
                    Actively participating in open-source projects (GSSoC 2026), peer code reviews, and national hackathons.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Summary & Technical Interests (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Academic Information Card */}
            <div className="p-6 sm:p-7 rounded-2xl border border-border-subtle bg-bg-secondary shadow-lg">
              <div className="flex items-center gap-3 pb-4 border-b border-border-subtle mb-5">
                <div className="p-2.5 rounded-xl bg-accent-primary/10 text-accent-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-text-primary">
                    Academic Background
                  </h4>
                  <span className="text-xs text-text-muted">
                    B.Tech Computer Science &amp; Engineering
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs font-sans">
                <div>
                  <span className="text-text-muted block text-[11px] uppercase tracking-wider mb-0.5">Institution</span>
                  <span className="text-text-primary font-medium text-sm">Noida Institute of Engineering &amp; Technology (NIET)</span>
                  <span className="text-text-secondary block text-xs mt-0.5">Affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU Lucknow)</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-bg-elevated border border-border-subtle">
                    <span className="text-text-muted block text-[11px] mb-0.5">Academic Score</span>
                    <span className="font-heading font-bold text-lg text-accent-primary">8.54 CGPA</span>
                  </div>
                  <div className="p-3 rounded-xl bg-bg-elevated border border-border-subtle">
                    <span className="text-text-muted block text-[11px] mb-0.5">Expected Graduation</span>
                    <span className="font-heading font-bold text-lg text-text-primary">2029</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas of Interest Grid */}
            <div className="p-6 rounded-2xl border border-border-subtle bg-bg-secondary/40">
              <h4 className="font-heading font-semibold text-sm text-text-primary mb-3.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-primary" />
                <span>Areas of Interest</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {AREAS_OF_INTEREST.map((area) => (
                  <span
                    key={area}
                    className="font-sans text-xs px-3 py-1.5 rounded-full bg-bg-elevated border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary/40 transition-colors"
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
