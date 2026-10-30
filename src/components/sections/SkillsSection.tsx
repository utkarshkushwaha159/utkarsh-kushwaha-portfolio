'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { SKILLS_DATA } from '@/data/portfolioData';
import { Terminal, Code, Globe, Database, Wrench, Layers } from 'lucide-react';

type CategoryFilter = 'All' | 'Programming' | 'Web Development' | 'Computer Science' | 'Tools & Platforms';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const categories: { label: CategoryFilter; icon: React.ComponentType<{ className?: string }> }[] = [
    { label: 'All', icon: Layers },
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
          badge="Expertise"
          title="Technical Skills"
          description="A structured overview of programming languages, foundational computer science disciplines, web technologies, and developer tooling."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-border-subtle">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-accent-primary text-bg-primary font-semibold shadow-md shadow-accent-primary/10'
                    : 'bg-bg-secondary text-text-secondary border border-border-subtle hover:border-accent-primary/50 hover:text-text-primary'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-bg-primary/20 text-bg-primary' : 'bg-bg-elevated text-text-muted'}`}>
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
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-xl border border-border-subtle bg-bg-secondary/40 hover:bg-bg-secondary hover:border-accent-primary/50 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-base text-text-primary group-hover:text-accent-primary transition-colors">
                    {skill.name}
                  </h3>
                  {skill.isKey && (
                    <span className="font-mono text-[10px] text-accent-primary uppercase px-2 py-0.5 rounded-full border border-accent-primary/30 bg-accent-primary/10 font-medium">
                      Core
                    </span>
                  )}
                </div>

                <p className="font-sans text-xs text-text-muted group-hover:text-text-secondary transition-colors leading-relaxed">
                  {skill.focus}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border-subtle/80 flex items-center justify-between text-[11px] text-text-muted font-sans">
                <span>{skill.category}</span>
                <span className="text-accent-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
