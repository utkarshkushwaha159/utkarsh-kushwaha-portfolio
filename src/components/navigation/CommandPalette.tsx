'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, Layers, Briefcase, Award, GraduationCap, Mail, Copy, Check, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA } from '@/data/portfolioData';
import { soundFx } from '@/lib/sound';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onNavigateToSection,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or toggled
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
    }
  }, [isOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    soundFx.playBeacon();
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  const actions = [
    {
      label: 'Navigate to Projects Archive',
      category: 'Section',
      icon: Layers,
      action: () => onNavigateToSection('projects'),
    },
    {
      label: 'Navigate to Technical Skills',
      category: 'Section',
      icon: Search,
      action: () => onNavigateToSection('skills'),
    },
    {
      label: 'Navigate to Experience Timeline',
      category: 'Section',
      icon: Briefcase,
      action: () => onNavigateToSection('experience'),
    },
    {
      label: 'Navigate to Hackathons & Achievements',
      category: 'Section',
      icon: Award,
      action: () => onNavigateToSection('achievements'),
    },
    {
      label: 'Navigate to Academic Education',
      category: 'Section',
      icon: GraduationCap,
      action: () => onNavigateToSection('education'),
    },
    {
      label: 'Navigate to Contact & Inquiries',
      category: 'Section',
      icon: Mail,
      action: () => onNavigateToSection('contact'),
    },
    {
      label: 'View / Download Formal Resume',
      category: 'Document',
      icon: FileText,
      action: () => {
        router.push('/resume');
        onClose();
      },
    },
    {
      label: `Copy Email (${PERSONAL_INFO.email})`,
      category: 'Action',
      icon: copied ? Check : Copy,
      action: copyEmail,
    },
    {
      label: 'Open GitHub Profile (@utkarshkushwaha159)',
      category: 'Link',
      icon: ExternalLink,
      action: () => window.open(PERSONAL_INFO.github, '_blank'),
    },
    {
      label: 'Open LinkedIn Profile (/in/utkarsh-kk)',
      category: 'Link',
      icon: ExternalLink,
      action: () => window.open(PERSONAL_INFO.linkedin, '_blank'),
    },
  ];

  // Also include projects dynamically in search
  const projectActions = PROJECTS_DATA.map((p) => ({
    label: `${p.title} (${p.technologies.slice(0, 3).join(', ')})`,
    category: 'Project',
    icon: Layers,
    action: () => {
      onNavigateToSection('projects');
      onClose();
    },
  }));

  const allItems = [...actions, ...projectActions];
  const filtered = query.trim()
    ? allItems.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : allItems;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command search palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-bg-primary/80 backdrop-blur-md animate-in fade-in duration-150"
    >
      <div className="relative w-full max-w-xl rounded-lg border border-border-strong bg-bg-secondary shadow-2xl overflow-hidden corner-bracket">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-border-subtle bg-bg-elevated/40">
          <Search className="w-4 h-4 text-accent-primary mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, skills, field notes or actions..."
            className="w-full bg-transparent font-sans text-sm text-text-primary placeholder:text-text-muted focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-text-muted hover:text-text-primary mr-2"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <kbd className="hidden sm:inline font-mono text-[10px] text-text-muted bg-bg-secondary px-2 py-0.5 rounded border border-border-subtle">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-border-subtle/30">
          {filtered.length === 0 ? (
            <div className="p-6 text-center font-mono text-xs text-text-muted">
              No matching field records found for &quot;{query}&quot;
            </div>
          ) : (
            filtered.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    soundFx.playClick();
                    item.action();
                    if (item.category !== 'Action') {
                      onClose();
                    }
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded hover:bg-bg-elevated text-left group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded bg-bg-primary border border-border-subtle text-text-muted group-hover:text-accent-primary group-hover:border-accent-primary/40 transition-colors">
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-sans text-xs text-text-secondary group-hover:text-text-primary transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-text-muted uppercase px-1.5 py-0.5 rounded bg-bg-primary border border-border-subtle">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Bottom Status bar */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-border-subtle bg-bg-primary/60 font-mono text-[10px] text-text-muted">
          <span>Use ⌘K / Ctrl+K anywhere to activate</span>
          <span className="text-accent-primary">UTKARSH // FIELD_QUERY</span>
        </div>
      </div>
    </div>
  );
}
