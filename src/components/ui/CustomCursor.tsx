'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Only enable if pointer is fine (mouse, not touchscreen)
    const media = window.matchMedia('(pointer: fine)');
    setIsFinePointer(media.matches);

    if (!media.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.classList.contains('cursor-pointer');
        setIsPointer(!!isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <>
      {/* Precision Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isPointer
              ? 'w-3 h-3 bg-accent-primary ring-4 ring-accent-primary/20'
              : 'w-2 h-2 bg-accent-primary'
          }`}
        />
      </div>

      {/* Trailing Reticle */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-transform duration-200 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      >
        <div
          className={`rounded-full border border-accent-primary/40 transition-all duration-300 ${
            isPointer ? 'w-10 h-10 border-accent-primary/80 bg-accent-primary/5' : 'w-7 h-7'
          }`}
        />
      </div>
    </>
  );
}
