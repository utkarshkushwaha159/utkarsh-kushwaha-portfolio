'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full p-8 rounded-2xl border border-border-subtle bg-bg-secondary shadow-2xl space-y-6">
        <div className="font-heading font-extrabold text-6xl text-accent-primary">
          404
        </div>

        <div className="space-y-2">
          <h1 className="font-heading font-bold text-2xl text-text-primary">
            Page Not Found
          </h1>
          <p className="font-sans text-sm text-text-secondary leading-relaxed">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-full bg-accent-primary text-bg-primary font-heading text-sm font-bold hover:bg-accent-secondary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
