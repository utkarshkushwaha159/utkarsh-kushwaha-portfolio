'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import TerminalBadge from '@/components/ui/TerminalBadge';
import ProjectDetailModal from '@/components/ui/ProjectDetailModal';
import { PROJECTS_DATA } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';
import { Github, ArrowUpRight, Cpu, Database, Flame, Layers } from 'lucide-react';

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
          badge="Work"
          title="Featured Projects"
          description="A selection of software projects focused on object-oriented system design, statistical energy anomaly detection, banking transaction logging, and hardware telemetry."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-border-subtle">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-accent-primary text-bg-primary font-semibold shadow-md shadow-accent-primary/10'
                    : 'bg-bg-elevated text-text-secondary border border-border-subtle hover:border-accent-primary/40 hover:text-text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-text-muted font-sans">
            Showing <span className="text-accent-primary font-semibold">{filteredProjects.length}</span> of {PROJECTS_DATA.length} projects
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
          {filteredProjects.map((project) => {
            const IconComp = getProjectIcon(project.category);
            return (
              <div
                key={project.id}
                className="group relative rounded-2xl border border-border-subtle bg-bg-secondary p-7 sm:p-8 flex flex-col justify-between hover:border-accent-primary/60 transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Top Header Strip */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <TerminalBadge variant="secondary">
                      {project.category}
                    </TerminalBadge>

                    <div className="p-2.5 rounded-xl bg-bg-elevated border border-border-subtle text-accent-primary group-hover:scale-105 transition-transform">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-primary group-hover:text-accent-primary transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-text-secondary mt-1 mb-4 font-medium">
                    {project.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="font-sans text-sm text-text-secondary leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  {/* Key Highlights list */}
                  <div className="space-y-2 mb-6">
                    {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 font-sans text-xs text-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{feat}</span>
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
                        className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-bg-elevated border border-border-subtle text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-primary hover:text-accent-secondary transition-colors"
                    >
                      <span>View Specifications</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary transition-colors"
                        title="View Project on GitHub"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
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
