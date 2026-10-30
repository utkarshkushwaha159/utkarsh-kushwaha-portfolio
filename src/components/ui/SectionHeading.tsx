import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  index: string;
  tag: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  index,
  tag,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-10 lg:mb-14', className)}>
      <div className="flex items-center gap-2 mb-3 font-mono text-xs text-accent-primary">
        <span className="text-accent-secondary font-bold">[{index}]</span>
        <span className="tracking-widest">// {tag}</span>
        <div className="h-px bg-border-subtle flex-1 ml-2 max-w-xs" />
      </div>
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary uppercase">
        {title}
      </h2>
      {description && (
        <p className="mt-3 font-sans text-sm sm:text-base text-text-secondary max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
