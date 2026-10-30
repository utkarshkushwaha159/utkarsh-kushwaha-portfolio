'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function TypographicArtwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(media.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    media.addEventListener('change', handleMotionChange);
    return () => media.removeEventListener('change', handleMotionChange);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt calculation (max ±6 degrees)
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[440px] lg:max-w-[480px] mx-auto select-none"
      style={{ perspective: '1000px' }}
      aria-label="Artistic typographic monogram of Utkarsh Kushwaha initials UK"
    >
      {/* Outer Editorial Container with dynamic tilt */}
      <div
        className="relative rounded-3xl border border-border-subtle bg-bg-secondary/70 backdrop-blur-md p-6 sm:p-8 transition-transform duration-300 ease-out cyan-glow-subtle overflow-hidden"
        style={{
          transform: prefersReducedMotion
            ? 'none'
            : `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Background Editorial Watermark / Subtle Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="artwork-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="0.75" fill="#73DCE8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#artwork-grid)" />
          </svg>
        </div>

        {/* Top Editorial Labeling */}
        <div className="relative z-10 flex items-center justify-between pb-5 border-b border-border-subtle/70 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-accent-primary font-semibold tracking-wider uppercase text-[11px]">
              MONOGRAM // ARCHETYPE
            </span>
          </div>
          <span className="text-text-muted text-[11px] tracking-widest uppercase">
            UK · 2026
          </span>
        </div>

        {/* Central Monogram Artwork Viewport */}
        <div className="relative py-6 sm:py-8 flex items-center justify-center">
          <svg
            viewBox="0 0 400 360"
            className="w-full h-auto max-w-[360px] drop-shadow-2xl transition-all duration-500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Cyan Aash Linear Gradients */}
              <linearGradient id="cyanGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#73DCE8" />
                <stop offset="100%" stopColor="#42B9CC" />
              </linearGradient>

              <linearGradient id="cyanGradSecondary" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#42B9CC" />
                <stop offset="60%" stopColor="#73DCE8" />
                <stop offset="100%" stopColor="#202D37" />
              </linearGradient>

              <linearGradient id="glowLinear" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#73DCE8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#42B9CC" stopOpacity="0.2" />
              </linearGradient>

              {/* Shadow filter for depth */}
              <filter id="shadowDepth" x="-10%" y="-10%" width="130%" height="130%">
                <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#73DCE8" floodOpacity="0.15" />
              </filter>
            </defs>

            {/* Background Geometric Accent Rings */}
            <circle
              cx="200"
              cy="180"
              r="150"
              stroke="#30404A"
              strokeWidth="1"
              strokeDasharray="4 8"
              opacity="0.6"
            />
            <circle
              cx="200"
              cy="180"
              r="110"
              stroke="#30404A"
              strokeWidth="0.75"
              opacity="0.4"
            />

            {/* Subtle Crosshairs */}
            <line x1="200" y1="10" x2="200" y2="40" stroke="#73DCE8" strokeWidth="1" opacity="0.4" />
            <line x1="200" y1="320" x2="200" y2="350" stroke="#73DCE8" strokeWidth="1" opacity="0.4" />
            <line x1="10" y1="180" x2="40" y2="180" stroke="#73DCE8" strokeWidth="1" opacity="0.4" />
            <line x1="360" y1="180" x2="390" y2="180" stroke="#73DCE8" strokeWidth="1" opacity="0.4" />

            {/* ======================================================== */}
            {/* GLYPH 'U' — Left Structural Foundation                   */}
            {/* ======================================================== */}
            {/* Outer Silhouette & Solid Form */}
            <path
              d="M 65 60
                 L 115 60
                 L 115 190
                 C 115 235, 145 255, 185 255
                 L 185 295
                 C 120 295, 65 250, 65 190
                 Z"
              fill="url(#cyanGradPrimary)"
              filter="url(#shadowDepth)"
              className="transition-all duration-300"
              style={{
                opacity: isHovered ? 0.95 : 0.88,
              }}
            />

            {/* U Secondary Inner Hollow Arch */}
            <path
              d="M 125 60
                 L 155 60
                 L 155 180
                 C 155 205, 170 220, 195 220
                 L 195 245
                 C 150 245, 125 215, 125 180
                 Z"
              fill="#202D37"
              stroke="#30404A"
              strokeWidth="1"
            />

            {/* Precision Stroke Outline for U */}
            <path
              d="M 65 60
                 L 115 60
                 L 115 190
                 C 115 235, 145 255, 185 255
                 L 185 295
                 C 120 295, 65 250, 65 190
                 Z"
              stroke="#73DCE8"
              strokeWidth="1.5"
              strokeLinejoin="round"
              opacity="0.9"
            />

            {/* ======================================================== */}
            {/* GLYPH 'K' — Right Angular Interlocking Geometry          */}
            {/* ======================================================== */}
            {/* K Vertical Spine (Layered over U's right side) */}
            <rect
              x="195"
              y="60"
              width="45"
              height="235"
              rx="2"
              fill="#19232C"
              stroke="#73DCE8"
              strokeWidth="1.5"
            />

            {/* Inset Accent Strip inside K Vertical Spine */}
            <rect
              x="211"
              y="75"
              width="13"
              height="205"
              rx="1"
              fill="#202D37"
              opacity="0.8"
            />

            {/* K Upper Diagonal Arm (Rising dynamic wing) */}
            <path
              d="M 240 175
                 L 325 60
                 L 368 60
                 L 272 188
                 Z"
              fill="url(#cyanGradSecondary)"
              stroke="#73DCE8"
              strokeWidth="1.5"
              strokeLinejoin="round"
              className="transition-transform duration-300"
              style={{
                transform: isHovered ? 'translateY(-2px)' : 'none',
              }}
            />

            {/* K Lower Diagonal Arm (Anchoring angular wing) */}
            <path
              d="M 252 165
                 L 338 295
                 L 288 295
                 L 225 198
                 Z"
              fill="#202D37"
              stroke="#73DCE8"
              strokeWidth="1.5"
              strokeLinejoin="round"
              className="transition-transform duration-300"
              style={{
                transform: isHovered ? 'translateY(2px)' : 'none',
              }}
            />

            {/* Highlighted Intersecting Diamond Core */}
            <polygon
              points="240,175 260,195 240,215 220,195"
              fill="#73DCE8"
              opacity="0.95"
            />

            {/* Fine Technical Intersection Markers */}
            <circle cx="65" cy="60" r="3" fill="#73DCE8" />
            <circle cx="368" cy="60" r="3" fill="#73DCE8" />
            <circle cx="185" cy="295" r="3" fill="#73DCE8" />
            <circle cx="338" cy="295" r="3" fill="#73DCE8" />

            {/* Editorial Typographic Sub-watermark within SVG */}
            <text
              x="200"
              y="342"
              textAnchor="middle"
              fill="#788A94"
              fontSize="10"
              fontFamily="Space Grotesk, sans-serif"
              letterSpacing="7"
              fontWeight="600"
            >
              UTKARSH KUSHWAHA
            </text>
          </svg>
        </div>

        {/* Bottom Editorial Caption Bar */}
        <div className="relative z-10 pt-4 border-t border-border-subtle/70 flex items-center justify-between text-xs font-sans">
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm text-text-primary tracking-tight">
              Utkarsh Kushwaha
            </span>
            <span className="text-[11px] text-text-muted font-mono">
              B.Tech CSE · Software Developer
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-mono text-[10px] uppercase font-semibold">
            <span>Identity Mark</span>
          </div>
        </div>
      </div>
    </div>
  );
}
