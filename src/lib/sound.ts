// Subtle procedural sound synthesizer using Web Audio API
class SoundManager {
  private ctx: AudioContext | null = null;
  private enabled: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('dfn_sound_enabled');
      this.enabled = stored === 'true';
    }
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public toggle(): boolean {
    this.enabled = !this.enabled;
    if (typeof window !== 'undefined') {
      localStorage.setItem('dfn_sound_enabled', String(this.enabled));
    }
    if (this.enabled) {
      this.playBeep(880, 0.05, 'sine');
    }
    return this.enabled;
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playClick() {
    if (!this.enabled) return;
    this.playBeep(1200, 0.015, 'triangle', 0.03);
  }

  public playSelect() {
    if (!this.enabled) return;
    this.playBeep(640, 0.03, 'sine', 0.04);
  }

  public playBeacon() {
    if (!this.enabled) return;
    this.playBeep(1760, 0.08, 'sine', 0.02);
  }

  private playBeep(freq: number, duration: number, type: OscillatorType = 'sine', gainVal = 0.05) {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio might be blocked until user gesture, ignore silently
    }
  }
}

export const soundFx = new SoundManager();
