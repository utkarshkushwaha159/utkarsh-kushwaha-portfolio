'use client';

import React from 'react';
import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border-subtle bg-bg-primary pt-16 pb-12 text-sm font-sans text-text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border-subtle">
          {/* COLUMN 1 — PERSONAL IDENTITY (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-accent-primary" />
              <span className="font-heading font-bold text-lg text-text-primary tracking-tight">
                UTKARSH KUSHWAHA
              </span>
            </div>
            <p className="font-sans text-sm text-text-secondary leading-relaxed max-w-sm">
              Computer Science undergraduate passionate about building technology-driven solutions to real-world problems. Focused on software development, algorithmic problem solving, and modern web engineering.
            </p>
          </div>

          {/* COLUMN 2 — QUICK NAVIGATION (4 cols) */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-text-primary">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>
                <a href="#about" className="hover:text-accent-primary transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-accent-primary transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-accent-primary transition-colors">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-accent-primary transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/resume" className="text-accent-secondary hover:text-accent-primary transition-colors font-medium">
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 — CONNECT (3 cols) */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-text-primary">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-text-secondary hover:text-accent-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-accent-secondary" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-text-secondary hover:text-accent-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2.5 text-text-secondary hover:text-accent-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-accent-primary" />
                  <span>Email Me</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div>
            © {new Date().getFullYear()} Utkarsh Kushwaha. All Rights Reserved. Designed &amp; Developed with care.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-text-secondary hover:text-accent-primary transition-colors font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
