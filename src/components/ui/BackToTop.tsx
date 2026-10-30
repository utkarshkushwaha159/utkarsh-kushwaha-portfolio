'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full border border-border-subtle bg-bg-secondary/90 backdrop-blur-md text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-all duration-200 shadow-xl focus:outline-none focus:ring-2 focus:ring-accent-primary/40"
      aria-label="Back to top"
      title="Return to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
