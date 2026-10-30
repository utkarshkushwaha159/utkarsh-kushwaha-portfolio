import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  className,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 sm:mb-16', centered && 'text-center max-w-3xl mx-auto', className)}>
      {badge && (
        <div className={cn('inline-flex items-center gap-2 mb-3.5', centered && 'justify-center')}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
          <span className="font-mono text-xs tracking-wider text-accent-primary uppercase font-medium">
            {badge}
          </span>
        </div>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 font-sans text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
