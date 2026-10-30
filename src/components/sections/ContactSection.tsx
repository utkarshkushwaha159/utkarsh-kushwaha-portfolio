'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import TerminalBadge from '@/components/ui/TerminalBadge';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, Copy, Check, Send, Github, Linkedin, ExternalLink, Terminal, AlertCircle } from 'lucide-react';
import { soundFx } from '@/lib/sound';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _hp: '', // Honeypot anti-spam field
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    soundFx.playBeacon();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playClick();
    setStatus('submitting');
    setStatusMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setStatusMessage(data.message || 'Transmission received successfully. I will respond promptly.');
        setFormData({ name: '', email: '', subject: '', message: '', _hp: '' });
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Failed to dispatch transmission. Please email directly.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network interruption. Please copy the email address and write directly.');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-t border-border-subtle bg-bg-secondary/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="07/07"
          tag="DISPATCH_CHANNEL"
          title="Connect & Collaborate"
          description="Have an interesting engineering problem, software internship opportunity, or hackathon collaboration? Let's build something meaningful."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Inquiries & Profile Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl border border-border-strong bg-bg-secondary corner-bracket shadow-xl space-y-6">
              <div>
                <span className="font-mono text-xs text-accent-primary uppercase tracking-wider block mb-2">
                  // PRIMARY_ENDPOINT
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-text-primary tracking-tight">
                  &ldquo;Have an interesting problem? Let&apos;s build something meaningful.&rdquo;
                </h3>
                <p className="font-sans text-xs text-text-secondary mt-2 leading-relaxed">
                  Open to Software Engineering internships, AI/ML initiatives, open-source maintainership, and collaborative technical projects.
                </p>
              </div>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-lg bg-bg-elevated border border-border-subtle space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                  <span>DIRECT EMAIL</span>
                  <span className="text-accent-secondary">VERIFIED</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    onClick={() => soundFx.playClick()}
                    className="font-mono text-xs sm:text-sm text-text-primary hover:text-accent-primary transition-colors truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded border border-border-subtle bg-bg-secondary hover:border-accent-primary text-text-secondary hover:text-accent-primary font-mono text-xs transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-accent-primary" />
                        <span className="text-accent-primary">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* External Professional Links */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-xs text-text-muted uppercase tracking-wider block">
                  NETWORK NODES
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className="flex items-center justify-between p-3 rounded bg-bg-elevated/40 border border-border-subtle hover:border-[#0077B5]/60 hover:text-text-primary group transition-all"
                  >
                    <div className="flex items-center gap-2 font-mono text-xs text-text-secondary group-hover:text-text-primary">
                      <Linkedin className="w-4 h-4 text-[#0077B5]" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-accent-primary transition-colors" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className="flex items-center justify-between p-3 rounded bg-bg-elevated/40 border border-border-subtle hover:border-accent-primary/60 hover:text-text-primary group transition-all"
                  >
                    <div className="flex items-center gap-2 font-mono text-xs text-text-secondary group-hover:text-text-primary">
                      <Github className="w-4 h-4" />
                      <span>GitHub Archive</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-accent-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Transmission Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl border border-border-strong bg-bg-secondary corner-bracket shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle mb-6">
                <span className="font-mono text-xs text-accent-primary font-bold flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>// DIRECT_TRANSMISSION_FORM</span>
                </span>
                <span className="font-mono text-[10px] text-text-muted">
                  ENCRYPTED TLS PAYLOAD
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field (hidden from screen, catches bots) */}
                <input
                  type="text"
                  name="_hp"
                  value={formData._hp}
                  onChange={(e) => setFormData({ ...formData, _hp: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-name" className="block font-mono text-xs text-text-muted mb-1.5 uppercase">
                      Your Name / Organization <span className="text-accent-primary">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe or Acme Corp"
                      className="w-full px-3.5 py-2.5 rounded bg-bg-elevated border border-border-subtle font-sans text-xs text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-email" className="block font-mono text-xs text-text-muted mb-1.5 uppercase">
                      Email Address <span className="text-accent-primary">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full px-3.5 py-2.5 rounded bg-bg-elevated border border-border-subtle font-sans text-xs text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-subject" className="block font-mono text-xs text-text-muted mb-1.5 uppercase">
                    Inquiry Topic / Project Scope <span className="text-accent-primary">*</span>
                  </label>
                  <input
                    id="form-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g., Software Internship Inquiry / Hackathon Collaboration"
                    className="w-full px-3.5 py-2.5 rounded bg-bg-elevated border border-border-subtle font-sans text-xs text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="form-message" className="block font-mono text-xs text-text-muted mb-1.5 uppercase">
                    Message Payload <span className="text-accent-primary">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about the opportunity, engineering problem, or technical collaboration..."
                    className="w-full px-3.5 py-2.5 rounded bg-bg-elevated border border-border-subtle font-sans text-xs text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-primary transition-colors resize-none"
                  />
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-3 rounded bg-accent-primary/10 border border-accent-primary/40 text-accent-primary font-mono text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-3 rounded bg-red-950/20 border border-red-500/40 text-red-300 font-mono text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-accent-primary text-bg-primary font-mono text-xs font-bold tracking-wider hover:bg-accent-secondary disabled:opacity-50 transition-colors"
                >
                  {status === 'submitting' ? (
                    <span>DISPATCHING TRANSMISSION...</span>
                  ) : (
                    <>
                      <span>SEND DISPATCH</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
