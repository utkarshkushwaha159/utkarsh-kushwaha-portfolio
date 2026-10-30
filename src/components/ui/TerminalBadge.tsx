import React from 'react';
import { cn } from '@/lib/utils';

interface TerminalBadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'secondary' | 'muted';
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
    secondary: 'border-border-subtle text-text-secondary bg-bg-secondary',
    muted: 'border-border-subtle text-text-muted bg-bg-primary',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-full border transition-colors',
        variantStyles[variant],
        className
      )}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />}
      {children}
    </span>
  );
}
