'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Printer, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, EXPERIENCES_DATA, HACKATHONS_DATA, EDUCATION_DATA } from '@/data/portfolioData';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary py-8 sm:py-12 print:bg-white print:text-black">
      {/* Top Action Nav (Hidden in print) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-text-muted hover:text-accent-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary text-bg-primary text-xs font-bold hover:bg-accent-secondary transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Resume Document Paper Container */}
      <article className="max-w-4xl mx-auto px-6 sm:px-12 py-10 sm:py-14 rounded-2xl border border-border-subtle bg-bg-secondary print:border-none print:p-0 print:bg-transparent shadow-2xl">
        {/* Header Block */}
        <header className="border-b border-border-subtle print:border-gray-300 pb-6 mb-6">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-primary print:text-black uppercase tracking-tight">
            Utkarsh Kushwaha
          </h1>
          <div className="font-sans text-sm text-accent-primary print:text-gray-700 font-semibold mt-1">
            B.Tech Computer Science &amp; Engineering Student · Software Developer · Problem Solver
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-text-muted print:text-gray-600 font-sans">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Greater Noida, Uttar Pradesh, India</span>
            </span>
            <span>•</span>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 hover:underline">
              <Mail className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <span>•</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <Linkedin className="w-3.5 h-3.5" />
              <span>linkedin.com/in/utkarsh-kk</span>
            </a>
            <span>•</span>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <Github className="w-3.5 h-3.5" />
              <span>github.com/utkarshkushwaha159</span>
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="font-heading text-xs uppercase tracking-wider text-accent-primary print:text-gray-900 font-bold border-b border-border-subtle print:border-gray-200 pb-1 mb-2">
            Summary
          </h2>
          <p className="font-sans text-xs sm:text-sm text-text-secondary print:text-gray-700 leading-relaxed">
            B.Tech CSE student (CGPA 8.54) with hands-on experience in software development, web technologies, and open-source collaboration. Proficient in Java, Python, C, and JavaScript with a strong foundation in Data Structures &amp; Algorithms and OOP. Track record of building end-to-end systems through internships, hackathons, job simulations, and independent projects.
          </p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="font-heading text-xs uppercase tracking-wider text-accent-primary print:text-gray-900 font-bold border-b border-border-subtle print:border-gray-200 pb-1 mb-2">
            Education
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
            <div>
              <div className="font-heading font-bold text-text-primary print:text-black">
                {EDUCATION_DATA.degree}
              </div>
              <div className="font-sans text-text-secondary print:text-gray-600">
                {EDUCATION_DATA.institution}, {EDUCATION_DATA.university}
              </div>
            </div>
            <div className="text-xs text-text-muted print:text-gray-500 sm:text-right mt-1 sm:mt-0">
              <div>{EDUCATION_DATA.period}</div>
              <div className="font-semibold text-accent-primary print:text-gray-900">CGPA: {EDUCATION_DATA.cgpa}</div>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="font-heading text-xs uppercase tracking-wider text-accent-primary print:text-gray-900 font-bold border-b border-border-subtle print:border-gray-200 pb-1 mb-2">
            Technical Skills
          </h2>
          <div className="space-y-1.5 font-sans text-xs print:text-gray-700">
            <div>
              <strong className="text-text-primary print:text-black">Languages: </strong>
              <span className="text-text-secondary print:text-gray-700">Java, Python, C, C++, JavaScript</span>
            </div>
            <div>
              <strong className="text-text-primary print:text-black">Web Development: </strong>
              <span className="text-text-secondary print:text-gray-700">HTML5, CSS3, JavaScript, Responsive Design, Frontend Development</span>
            </div>
            <div>
              <strong className="text-text-primary print:text-black">CS Fundamentals: </strong>
              <span className="text-text-secondary print:text-gray-700">Data Structures &amp; Algorithms, Object-Oriented Programming, DBMS, Computer Architecture</span>
            </div>
            <div>
              <strong className="text-text-primary print:text-black">Tools &amp; Platforms: </strong>
              <span className="text-text-secondary print:text-gray-700">Git, GitHub, VS Code, GDB, Flask, SQLite, Chart.js, Leaflet.js</span>
            </div>
            <div>
              <strong className="text-text-primary print:text-black">Areas of Interest: </strong>
              <span className="text-text-secondary print:text-gray-700">Software Engineering, Full-Stack Development, AI/ML, Cybersecurity, IoT, Cloud</span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="font-heading text-xs uppercase tracking-wider text-accent-primary print:text-gray-900 font-bold border-b border-border-subtle print:border-gray-200 pb-1 mb-3">
            Experience &amp; Simulations
          </h2>
          <div className="space-y-4">
            {EXPERIENCES_DATA.map((exp) => (
              <div key={exp.id}>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-heading font-bold text-text-primary print:text-black">
                      {exp.role}
                    </span>
                    <span className="text-text-muted print:text-gray-600"> | {exp.organization}</span>
                  </div>
                  <div className="text-xs text-text-muted print:text-gray-500">
                    {exp.period} · {exp.location}
                  </div>
                </div>
                <ul className="mt-1 space-y-1 list-disc list-inside text-xs text-text-secondary print:text-gray-700">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="font-heading text-xs uppercase tracking-wider text-accent-primary print:text-gray-900 font-bold border-b border-border-subtle print:border-gray-200 pb-1 mb-3">
            Projects
          </h2>
          <div className="space-y-4">
            {PROJECTS_DATA.map((p) => (
              <div key={p.id}>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <div className="font-heading font-bold text-text-primary print:text-black">
                    {p.title}
                  </div>
                  <div className="font-mono text-xs text-accent-secondary print:text-gray-600">
                    {p.technologies.slice(0, 4).join(', ')}
                  </div>
                </div>
                <p className="text-xs text-text-secondary print:text-gray-700 mt-0.5">
                  {p.summary}
                </p>
                <ul className="mt-1 space-y-0.5 list-disc list-inside text-xs text-text-muted print:text-gray-600">
                  {p.keyFeatures.slice(0, 2).map((kf, i) => (
                    <li key={i}>{kf}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Hackathons & Achievements */}
        <section>
          <h2 className="font-heading text-xs uppercase tracking-wider text-accent-primary print:text-gray-900 font-bold border-b border-border-subtle print:border-gray-200 pb-1 mb-3">
            Achievements &amp; Hackathons
          </h2>
          <div className="space-y-3 text-xs">
            {HACKATHONS_DATA.map((item) => (
              <div key={item.id}>
                <div className="flex flex-wrap items-center justify-between">
                  <strong className="text-text-primary print:text-black">{item.title}</strong>
                  <span className="text-text-muted print:text-gray-500">{item.achievement}</span>
                </div>
                <p className="text-text-secondary print:text-gray-700 mt-0.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
