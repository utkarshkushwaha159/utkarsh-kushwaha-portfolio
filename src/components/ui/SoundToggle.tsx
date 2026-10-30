'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundFx } from '@/lib/sound';

export default function SoundToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(soundFx.isEnabled());
  }, []);

  const handleToggle = () => {
    const newState = soundFx.toggle();
    setEnabled(newState);
  };

  return (
    <button
      onClick={handleToggle}
      className="group flex items-center gap-2 px-2.5 py-1.5 rounded border border-border-subtle bg-bg-secondary/60 text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 transition-colors focus:outline-none focus:ring-1 focus:ring-accent-primary"
      title={enabled ? 'Mute Interface Audio' : 'Enable Subtle Procedural Audio'}
      aria-label={enabled ? 'Mute Interface Audio' : 'Enable Subtle Procedural Audio'}
    >
      {enabled ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-accent-primary" />
          <span className="font-mono text-[11px] text-accent-primary hidden sm:inline">AUDIO: ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-text-muted group-hover:text-text-secondary" />
          <span className="font-mono text-[11px] text-text-muted hidden sm:inline">AUDIO: OFF</span>
        </>
      )}
    </button>
  );
}
