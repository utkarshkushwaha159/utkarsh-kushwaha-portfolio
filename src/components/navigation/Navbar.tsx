'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['about', 'skills', 'projects', 'experience', 'achievements', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border-subtle py-3.5 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-accent-primary/40 rounded-lg p-1"
        >
          <span className="w-2 h-2 rounded-full bg-accent-primary group-hover:scale-125 transition-transform" />
          <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-text-primary group-hover:text-accent-primary transition-colors">
            UTKARSH KUSHWAHA
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive
                    ? 'text-accent-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Formal Resume link */}
          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-accent-primary/40 text-accent-primary bg-accent-primary/5 hover:bg-accent-primary hover:text-bg-primary text-xs font-semibold tracking-wide transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-border-subtle text-text-secondary hover:text-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/40"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border-subtle bg-bg-secondary/95 backdrop-blur-xl px-5 py-6 space-y-4 animate-in slide-in-from-top-3 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium p-3 rounded-lg bg-bg-elevated/40 border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary/40 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-border-subtle">
            <Link
              href="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full p-2.5 rounded-lg bg-accent-primary text-bg-primary text-sm font-semibold tracking-wide"
            >
              <FileText className="w-4 h-4" />
              <span>View Formal Resume</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
