'use client';

import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '@/types/portfolio';
import TerminalBadge from './TerminalBadge';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-bg-primary/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border-subtle bg-bg-secondary p-6 sm:p-8 shadow-2xl focus:outline-none"
        tabIndex={-1}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-border-subtle">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <TerminalBadge variant="accent">
                {project.category}
              </TerminalBadge>
            </div>
            <h2 id="modal-project-title" className="font-heading text-xl sm:text-2xl font-bold text-text-primary">
              {project.title}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-text-secondary mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg border border-border-subtle text-text-muted hover:text-text-primary hover:border-accent-primary transition-colors focus:outline-none focus:ring-1 focus:ring-accent-primary"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="mt-6 space-y-6">
          {/* Overview */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-text-primary mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-accent-primary" />
              <span>Project Overview</span>
            </h3>
            <p className="font-sans text-sm text-text-secondary leading-relaxed bg-bg-elevated/60 p-4 rounded-xl border border-border-subtle">
              {project.summary}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-border-subtle bg-bg-elevated/40">
              <h4 className="font-sans text-xs uppercase tracking-wider text-text-primary font-semibold mb-2">
                Problem Statement
              </h4>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-accent-primary/20 bg-accent-primary/5">
              <h4 className="font-sans text-xs uppercase tracking-wider text-accent-primary font-semibold mb-2">
                Proposed Solution
              </h4>
              <p className="font-sans text-xs text-text-secondary leading-relaxed">
                {project.proposedSolution}
              </p>
            </div>
          </div>

          {/* Architecture Details */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-text-primary mb-3">
              Architecture & System Flow
            </h3>
            <div className="space-y-2.5">
              {project.architectureDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-bg-elevated/40 border border-border-subtle font-sans text-xs text-text-secondary"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-text-primary mb-3">
              Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-bg-elevated/30 border border-border-subtle text-xs text-text-secondary"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent-primary mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-wider text-text-muted mb-2.5">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 rounded-full bg-bg-elevated border border-border-subtle text-accent-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="mt-8 pt-5 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-text-muted">
            Verified Project Record
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border-subtle text-text-primary hover:border-accent-primary hover:text-accent-primary text-xs font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-accent-primary text-bg-primary hover:bg-accent-secondary text-xs font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
