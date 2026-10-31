'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, Copy, Check, Send, Github, Linkedin, ExternalLink, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _hp: '', // Honeypot anti-spam
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side pre-validation
    const cleanName = formData.name.trim();
    const cleanEmail = formData.email.trim();
    const cleanSubject = formData.subject.trim();
    const cleanMessage = formData.message.trim();

    if (cleanName.length < 2) {
      setStatus('error');
      setStatusMessage('Please enter your full name (at least 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      setStatus('error');
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    if (cleanSubject.length < 3) {
      setStatus('error');
      setStatusMessage('Please enter a subject (at least 3 characters).');
      return;
    }

    if (cleanMessage.length < 10) {
      setStatus('error');
      setStatusMessage('Please provide a message with at least 10 characters.');
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          subject: cleanSubject,
          message: cleanMessage,
          _hp: formData._hp,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus('success');
        setStatusMessage(
          data.message || 'Thank you! Your message has been sent successfully. I will get back to you shortly.'
        );
        // Reset form ONLY on confirmed success
        setFormData({ name: '', email: '', subject: '', message: '', _hp: '' });
      } else {
        setStatus('error');
        setStatusMessage(
          data.error ||
            'Unable to deliver message at this time. Please send an email directly to hey.utkarsh.tech@gmail.com.'
        );
      }
    } catch {
      setStatus('error');
      setStatusMessage(
        'Network error encountered. Please check your connection or email hey.utkarsh.tech@gmail.com directly.'
      );
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-t border-border-subtle bg-bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Let's Connect"
          description="Have an interesting software project, internship opportunity, or engineering discussion? Feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Inquiries & Profile Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-2xl border border-border-subtle bg-bg-secondary shadow-xl space-y-6">
              <div>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary tracking-tight">
                  &ldquo;Have an interesting problem? Let&apos;s build something meaningful.&rdquo;
                </h3>
                <p className="font-sans text-sm text-text-secondary mt-3 leading-relaxed">
                  Open to software engineering internships, technical collaborations, and hackathon challenges.
                </p>
              </div>

              {/* Email Card with Copy button */}
              <div className="p-4 sm:p-5 rounded-xl bg-bg-elevated/70 border border-border-subtle space-y-3">
                <span className="text-xs text-text-muted font-sans block uppercase tracking-wider">
                  Direct Email
                </span>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-sans text-sm font-medium text-text-primary hover:text-accent-primary transition-colors truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border-subtle bg-bg-secondary hover:border-accent-primary text-text-secondary hover:text-accent-primary font-sans text-xs font-medium transition-colors shrink-0"
                    title="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-accent-primary" />
                        <span className="text-accent-primary font-semibold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* External Professional Links */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs text-text-muted font-sans uppercase tracking-wider block mb-2">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-bg-elevated/50 border border-border-subtle hover:border-accent-primary hover:text-text-primary group transition-all"
                  >
                    <div className="flex items-center gap-2.5 text-xs text-text-secondary group-hover:text-text-primary font-medium">
                      <Linkedin className="w-4 h-4 text-accent-secondary" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-accent-primary transition-colors" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-bg-elevated/50 border border-border-subtle hover:border-accent-primary hover:text-text-primary group transition-all"
                  >
                    <div className="flex items-center gap-2.5 text-xs text-text-secondary group-hover:text-text-primary font-medium">
                      <Github className="w-4 h-4" />
                      <span>GitHub Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-accent-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl border border-border-subtle bg-bg-secondary shadow-xl">
              <h4 className="font-heading font-bold text-lg text-text-primary mb-1">
                Send a Message
              </h4>
              <p className="font-sans text-xs text-text-secondary mb-6">
                Fill out the form below and I will respond to your message.
              </p>

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
                    <label htmlFor="form-name" className="block font-sans text-xs text-text-secondary mb-1.5 font-medium">
                      Your Name <span className="text-accent-primary">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      disabled={status === 'submitting'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-subtle font-sans text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-primary disabled:opacity-60 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-email" className="block font-sans text-xs text-text-secondary mb-1.5 font-medium">
                      Email Address <span className="text-accent-primary">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      disabled={status === 'submitting'}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-subtle font-sans text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-primary disabled:opacity-60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-subject" className="block font-sans text-xs text-text-secondary mb-1.5 font-medium">
                    Subject <span className="text-accent-primary">*</span>
                  </label>
                  <input
                    id="form-subject"
                    type="text"
                    required
                    disabled={status === 'submitting'}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Internship Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-subtle font-sans text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-primary disabled:opacity-60 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="form-message" className="block font-sans text-xs text-text-secondary mb-1.5 font-medium">
                    Message <span className="text-accent-primary">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    disabled={status === 'submitting'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-subtle font-sans text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-primary disabled:opacity-60 transition-colors resize-none"
                  />
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-3.5 rounded-xl bg-accent-primary/10 border border-accent-primary/40 text-accent-primary text-xs font-sans flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/40 text-red-300 text-xs font-sans flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-primary text-bg-primary font-heading text-sm font-bold tracking-wide hover:bg-accent-secondary disabled:opacity-50 transition-colors shadow-md cursor-pointer disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
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
