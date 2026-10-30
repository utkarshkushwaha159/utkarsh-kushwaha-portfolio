import React from 'react';
import { cn } from '@/lib/utils';

interface TerminalBadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'secondary' | 'muted' | 'alert';
  className?: string;
  dot?: boolean;
}

export default function TerminalBadge({
  children,
  variant = 'accent',
  className,
  dot = false,
}: TerminalBadgeProps) {
  const variantStyles = {
    accent: 'border-accent-primary/30 text-accent-primary bg-accent-primary/10',
    secondary: 'border-border-strong text-text-secondary bg-bg-elevated',
    muted: 'border-border-subtle text-text-muted bg-bg-secondary/70',
    alert: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
  };

  const dotColors = {
    accent: 'bg-accent-primary',
    secondary: 'bg-accent-secondary',
    muted: 'bg-text-muted',
    alert: 'bg-amber-400',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide uppercase px-2.5 py-0.5 rounded border',
        variantStyles[variant],
        className
      )}
    >
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full animate-pulse', dotColors[variant])} />}
      {children}
    </span>
  );
}
