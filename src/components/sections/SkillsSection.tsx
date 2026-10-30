'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import TerminalBadge from '@/components/ui/TerminalBadge';
import { SKILLS_DATA } from '@/data/portfolioData';
import { Terminal, Code, Globe, Database, Wrench, Check } from 'lucide-react';
import { soundFx } from '@/lib/sound';

type CategoryFilter = 'All' | 'Programming' | 'Web Development' | 'Computer Science' | 'Tools & Platforms';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const categories: { label: CategoryFilter; icon: React.ComponentType<{ className?: string }> }[] = [
    { label: 'All', icon: Terminal },
    { label: 'Programming', icon: Code },
    { label: 'Web Development', icon: Globe },
    { label: 'Computer Science', icon: Database },
    { label: 'Tools & Platforms', icon: Wrench },
  ];

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 border-t border-border-subtle bg-bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02/07"
          tag="TECHNICAL_CAPABILITIES"
          title="Interactive Skills Index"
          description="Categorized technical competencies grounded in deterministic system engineering, algorithmic foundations, and modern web interfaces. Transparently cataloged without fabricated proficiency percentages."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-border-subtle">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => {
                  soundFx.playClick();
                  setActiveCategory(cat.label);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded font-mono text-xs tracking-wider transition-all ${
                  isActive
                    ? 'bg-accent-primary text-bg-primary font-bold shadow-md shadow-accent-primary/20'
                    : 'bg-bg-secondary text-text-secondary border border-border-subtle hover:border-accent-primary/50 hover:text-text-primary'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label.toUpperCase()}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded ${isActive ? 'bg-bg-primary/20 text-bg-primary' : 'bg-bg-elevated text-text-muted'}`}>
                  {cat.label === 'All'
                    ? SKILLS_DATA.length
                    : SKILLS_DATA.filter((s) => s.category === cat.label).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill === skill.name;
            return (
              <div
                key={skill.name}
                onClick={() => {
                  soundFx.playSelect();
                  setSelectedSkill(isSelected ? null : skill.name);
                }}
                className={`group relative p-4 rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-accent-primary bg-bg-secondary shadow-lg shadow-accent-primary/5'
                    : 'border-border-subtle bg-bg-secondary/40 hover:border-border-strong hover:bg-bg-secondary'
                }`}
              >
                {/* Header: Skill Name & Category Badge */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-text-primary group-hover:text-accent-primary transition-colors">
                    {skill.name}
                  </h3>
                  {skill.isKey && (
                    <span className="font-mono text-[9px] text-accent-primary uppercase px-1.5 py-0.5 rounded border border-accent-primary/30 bg-accent-primary/10">
                      CORE
                    </span>
                  )}
                </div>

                {/* Practical Focus Area */}
                <p className="font-mono text-xs text-text-muted group-hover:text-text-secondary transition-colors leading-relaxed">
                  {skill.focus}
                </p>

                {/* Category tag */}
                <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-[10px] font-mono text-text-muted">
                  <span>{skill.category}</span>
                  <span className="text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    FIELD_VERIFIED ✓
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clarification banner */}
        <div className="mt-8 p-3 rounded border border-border-subtle bg-bg-secondary/30 flex items-center gap-3 font-mono text-xs text-text-muted">
          <Terminal className="w-4 h-4 text-accent-primary shrink-0" />
          <span>
            NOTE: Skills are evaluated on hands-on practical implementation across projects, open-source pull requests, and coursework rather than arbitrary percentage ratings.
          </span>
        </div>
      </div>
    </section>
  );
}
