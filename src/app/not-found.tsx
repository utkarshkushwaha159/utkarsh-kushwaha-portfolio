'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Terminal, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full p-8 rounded-2xl border border-border-strong bg-bg-secondary corner-bracket shadow-2xl space-y-6">
        <div className="inline-flex p-3 rounded-full bg-red-950/30 border border-red-500/30 text-red-400">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-accent-primary uppercase tracking-widest block">
            // ERROR_CODE: 404_SECTOR_NOT_FOUND
          </span>
          <h1 className="font-heading font-extrabold text-3xl text-text-primary uppercase">
            Unmapped Field Record
          </h1>
          <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed">
            The telemetry coordinate or field note you requested does not exist in the Utkarsh Kushwaha Digital Field Notes repository.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded bg-accent-primary text-bg-primary font-mono text-xs font-bold hover:bg-accent-secondary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO BASE MATRIX</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
