'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import TerminalBadge from '@/components/ui/TerminalBadge';
import ProjectDetailModal from '@/components/ui/ProjectDetailModal';
import { PROJECTS_DATA } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';
import { ExternalLink, Github, ArrowUpRight, Terminal, Layers, Cpu, Database, Flame } from 'lucide-react';
import { soundFx } from '@/lib/sound';

type CategoryFilter = 'All' | 'Systems & OOP' | 'Data & Analytics' | 'IoT & Embedded';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: CategoryFilter[] = ['All', 'Systems & OOP', 'Data & Analytics', 'IoT & Embedded'];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const getProjectIcon = (cat: string) => {
    switch (cat) {
      case 'Systems & OOP':
        return Cpu;
      case 'Data & Analytics':
        return Database;
      case 'IoT & Embedded':
        return Flame;
      default:
        return Layers;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 border-t border-border-subtle bg-bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03/07"
          tag="PROJECT_ARCHIVE"
          title="Engineered Systems & Field Projects"
          description="Curated technical archive of practical software systems built with rigorous OOP paradigms, statistical data analysis, and hardware telemetry."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-border-subtle">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundFx.playClick();
                  setActiveCategory(cat);
                }}
                className={`px-3 py-1.5 rounded font-mono text-xs tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-accent-primary text-bg-primary font-bold shadow-md shadow-accent-primary/10'
                    : 'bg-bg-elevated text-text-secondary border border-border-subtle hover:border-accent-primary/40 hover:text-text-primary'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="font-mono text-xs text-text-muted">
            INDEXED_RECORDS: <span className="text-accent-primary font-bold">{filteredProjects.length}</span> / {PROJECTS_DATA.length}
          </div>
        </div>

        {/* Projects Editorial Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => {
            const IconComp = getProjectIcon(project.category);
            return (
              <div
                key={project.id}
                className="group relative rounded-xl border border-border-strong bg-bg-secondary p-6 sm:p-8 flex flex-col justify-between hover:border-accent-primary/60 transition-all duration-300 shadow-xl corner-bracket"
              >
                <div>
                  {/* Top Header Strip */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <TerminalBadge variant="accent">
                        {project.fieldCode}
                      </TerminalBadge>
                      <TerminalBadge variant="secondary">
                        {project.category}
                      </TerminalBadge>
                    </div>

                    <div className="p-2 rounded bg-bg-elevated border border-border-subtle text-accent-primary group-hover:scale-110 transition-transform">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-accent-secondary mt-1 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  {/* Key Highlights list */}
                  <div className="space-y-1.5 mb-6">
                    {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 font-sans text-xs text-text-muted">
                        <span className="text-accent-primary font-mono mt-0.5">•</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Section: Tech Tags & Trigger Buttons */}
                <div className="pt-5 border-t border-border-subtle mt-2 space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-bg-elevated border border-border-subtle text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => {
                        soundFx.playSelect();
                        setSelectedProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-accent-primary hover:text-accent-secondary transition-colors group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>INSPECT SPECIFICATIONS</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundFx.playClick()}
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-text-primary transition-colors"
                        title="View Project Source Repository on GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for deep dive */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
