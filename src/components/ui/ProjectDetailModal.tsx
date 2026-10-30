'use client';

import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Terminal, Cpu } from 'lucide-react';
import { Project } from '@/types/portfolio';
import TerminalBadge from './TerminalBadge';
import { soundFx } from '@/lib/sound';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-bg-primary/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg border border-border-strong bg-bg-secondary p-6 sm:p-8 shadow-2xl corner-bracket focus:outline-none"
        tabIndex={-1}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-border-subtle">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <TerminalBadge variant="accent" dot>
                {project.fieldCode}
              </TerminalBadge>
              <TerminalBadge variant="secondary">
                {project.category}
              </TerminalBadge>
            </div>
            <h2 id="modal-project-title" className="font-heading text-xl sm:text-2xl font-bold text-text-primary">
              {project.title}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-accent-secondary mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded border border-border-subtle text-text-muted hover:text-text-primary hover:border-accent-primary transition-colors focus:outline-none focus:ring-1 focus:ring-accent-primary"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="mt-6 space-y-6">
          {/* Executive Overview */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent-primary mb-2 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>// 01. Overview & Operational Scope</span>
            </h3>
            <p className="font-sans text-sm text-text-secondary leading-relaxed bg-bg-elevated/50 p-4 rounded border border-border-subtle">
              {project.summary}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded border border-red-900/30 bg-red-950/10">
              <h4 className="font-mono text-xs uppercase tracking-wider text-red-300 font-bold mb-2">
                Problem Statement
              </h4>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded border border-accent-primary/30 bg-accent-primary/5">
              <h4 className="font-mono text-xs uppercase tracking-wider text-accent-primary font-bold mb-2">
                Architectural Solution
              </h4>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                {project.proposedSolution}
              </p>
            </div>
          </div>

          {/* System Architecture Details */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent-primary mb-3 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>// 02. Engineering Specifications & Data Flow</span>
            </h3>
            <div className="space-y-2">
              {project.architectureDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded bg-bg-elevated/40 border border-border-subtle font-sans text-xs text-text-secondary"
                >
                  <span className="font-mono text-accent-primary font-bold mt-0.5">
                    {`[#0${idx + 1}]`}
                  </span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent-primary mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>// 03. Core Capabilities</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.keyFeatures.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded bg-bg-elevated/30 border border-border-subtle text-xs text-text-secondary font-sans"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted mb-2">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-bg-elevated border border-border-strong text-accent-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="mt-8 pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-xs text-text-muted">
            Status: Documented & Validated Field Note
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-3 py-2 rounded border border-border-subtle text-text-primary hover:border-accent-primary hover:text-accent-primary text-xs font-mono transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
                <ExternalLink className="w-3 h-3 text-text-muted" />
              </a>
            )}
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="px-4 py-2 rounded bg-accent-primary text-bg-primary hover:bg-accent-secondary text-xs font-mono font-bold transition-colors"
            >
              Close Record
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
