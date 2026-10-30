'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Orbit, Search, Menu, X, FileText } from 'lucide-react';
import SoundToggle from '@/components/ui/SoundToggle';
import { soundFx } from '@/lib/sound';

interface NavbarProps {
  onOpenCosmos: () => void;
  onOpenCommandPalette: () => void;
}

export default function Navbar({ onOpenCosmos, onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    soundFx.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border-subtle py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          onClick={() => soundFx.playClick()}
          className="group flex items-center gap-2.5 focus:outline-none focus:ring-1 focus:ring-accent-primary rounded"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-accent-primary animate-pulse group-hover:scale-125 transition-transform" />
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-sm sm:text-base tracking-wider text-text-primary uppercase group-hover:text-accent-primary transition-colors">
              Utkarsh Kushwaha
            </span>
            <span className="font-mono text-[10px] text-text-muted tracking-widest -mt-1">
              DIGITAL FIELD NOTES
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleNavClick}
              className="font-mono text-xs text-text-secondary hover:text-accent-primary transition-colors tracking-wide relative py-1 hover:after:w-full after:w-0 after:h-px after:bg-accent-primary after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          {/* 3D Cosmos Trigger */}
          <button
            onClick={() => {
              soundFx.playBeacon();
              onOpenCosmos();
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-accent-primary/40 bg-accent-primary/10 text-accent-primary hover:bg-accent-primary/20 text-xs font-mono transition-all group focus:outline-none focus:ring-1 focus:ring-accent-primary"
            title="Launch Interactive 3D Cosmos Mode"
          >
            <Orbit className="w-3.5 h-3.5 animate-spin group-hover:scale-110" style={{ animationDuration: '6s' }} />
            <span className="hidden sm:inline font-semibold">3D COSMOS</span>
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenCommandPalette();
            }}
            className="hidden md:flex items-center gap-2 px-2.5 py-1.5 rounded border border-border-subtle bg-bg-secondary/70 text-text-muted hover:text-text-primary hover:border-border-strong text-xs font-mono transition-colors focus:outline-none focus:ring-1 focus:ring-accent-primary"
            title="Search & Quick Actions (Ctrl+K / Cmd+K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="text-[11px]">SEARCH</span>
            <kbd className="text-[10px] bg-bg-elevated px-1 py-0.5 rounded border border-border-subtle text-text-secondary">
              ⌘K
            </kbd>
          </button>

          {/* Resume link */}
          <Link
            href="/resume"
            onClick={() => soundFx.playClick()}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 text-xs font-mono transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </Link>

          {/* Sound Toggle */}
          <SoundToggle />

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded border border-border-subtle text-text-secondary hover:text-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border-subtle bg-bg-secondary/95 backdrop-blur-xl px-4 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="font-mono text-[11px] text-text-muted uppercase tracking-wider mb-2">
            FIELD NAVIGATION
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="font-mono text-xs p-2.5 rounded bg-bg-elevated/50 border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary/40 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-border-subtle flex flex-col gap-2.5">
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(false);
                onOpenCommandPalette();
              }}
              className="flex items-center justify-between p-2.5 rounded bg-bg-elevated border border-border-subtle text-xs font-mono text-text-secondary"
            >
              <span className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-accent-primary" />
                <span>Command Search</span>
              </span>
              <kbd className="text-[10px] bg-bg-secondary px-1.5 py-0.5 rounded border border-border-subtle">
                ⌘K
              </kbd>
            </button>

            <Link
              href="/resume"
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-2.5 rounded bg-bg-elevated border border-border-subtle text-xs font-mono text-accent-primary font-semibold"
            >
              <FileText className="w-4 h-4" />
              <span>Full Resume Document</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
