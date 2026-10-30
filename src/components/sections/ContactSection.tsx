'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, Copy, Check, Send, Github, Linkedin, ExternalLink, AlertCircle } from 'lucide-react';

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
        setStatusMessage(data.message || 'Message sent successfully. I will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '', _hp: '' });
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Failed to send message. Please reach out directly via email.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network interruption. Please copy the email address and write directly.');
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
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-subtle font-sans text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-primary transition-colors"
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
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-subtle font-sans text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-primary transition-colors"
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
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineering Internship Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-subtle font-sans text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-primary transition-colors"
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
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-bg-elevated border border-border-subtle font-sans text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-primary transition-colors resize-none"
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
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-primary text-bg-primary font-heading text-sm font-bold tracking-wide hover:bg-accent-secondary disabled:opacity-50 transition-colors shadow-md"
                >
                  {status === 'submitting' ? (
                    <span>Sending...</span>
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
