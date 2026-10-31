import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://utkarsh-kushwaha-portfolio.vercel.app';
const resumePdfPath = '/Utkarsh_Kushwaha_Resume.pdf';

export const metadata: Metadata = {
  title: 'Utkarsh Kushwaha Portfolio',
  description:
    'Academic and professional resume of Utkarsh Kushwaha, B.Tech Computer Science student at NIET (AKTU). Technical skills, software projects, experience, and hackathon achievements.',
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    title: 'Utkarsh Kushwaha Portfolio',
    description:
      'Academic and professional resume of Utkarsh Kushwaha, B.Tech Computer Science student at NIET (AKTU). Technical skills, software projects, experience, and hackathon achievements.',
    url: `${siteUrl}/resume`,
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Utkarsh Kushwaha Portfolio',
    description:
      'Academic and professional resume of Utkarsh Kushwaha, B.Tech Computer Science student at NIET (AKTU). Technical skills, software projects, experience, and hackathon achievements.',
  },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary py-6 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Top Action Bar — ONLY 'Back to Portfolio' and 'Download Resume' */}
        <header className="mb-6 flex items-center justify-between pb-5 border-b border-border-subtle">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-text-secondary hover:text-accent-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <a
            href={resumePdfPath}
            download="Utkarsh_Kushwaha_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-primary text-bg-primary hover:bg-accent-secondary text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-cyan-500/20"
            title="Download original one-page resume PDF"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </header>

        {/* Faithful One-Page Resume Paper Container */}
        <article className="bg-white text-[#111111] font-serif p-6 sm:p-10 md:p-12 rounded-lg shadow-2xl border border-gray-200 text-[13px] sm:text-[13.5px] leading-[1.38] print:p-0 print:border-none print:shadow-none">
          {/* Header Block */}
          <header className="text-center pb-3">
            <h1 className="font-serif font-bold text-2xl sm:text-3xl text-black tracking-wider uppercase mb-1">
              UTKARSH KUSHWAHA
            </h1>
            <div className="text-xs sm:text-[13px] text-gray-700 font-serif">
              Greater Noida, Uttar Pradesh, India
            </div>
            <div className="mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-[12.5px] text-gray-800 font-serif">
              <a
                href="mailto:hey.utkarsh.tech@gmail.com"
                className="text-gray-900 hover:underline"
              >
                hey.utkarsh.tech@gmail.com
              </a>
              <span>•</span>
              <a
                href="https://linkedin.com/in/utkarsh-kk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:underline"
              >
                linkedin.com/in/utkarsh-kk
              </a>
              <span>•</span>
              <a
                href="https://github.com/utkarshkushwaha159"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:underline"
              >
                github.com/utkarshkushwaha159
              </a>
            </div>
          </header>

          {/* Summary Section */}
          <section className="mt-3">
            <h2 className="font-serif font-bold text-sm sm:text-[14.5px] text-black border-b border-black pb-0.5 mb-1.5 uppercase tracking-wide">
              Summary
            </h2>
            <p className="text-justify text-gray-900">
              B.Tech CSE student (CGPA 8.54) with hands-on experience in software development, web technologies, and open-source collaboration. Proficient in Java, Python, C, and JavaScript with a strong foundation in Data Structures &amp; Algorithms and OOP. Track record of building end-to-end systems through internships, hackathons, job simulations, and independent projects.
            </p>
          </section>

          {/* Education Section */}
          <section className="mt-3.5">
            <h2 className="font-serif font-bold text-sm sm:text-[14.5px] text-black border-b border-black pb-0.5 mb-1.5 uppercase tracking-wide">
              Education
            </h2>
            <div className="space-y-0.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-serif">
                <span className="font-bold text-black">
                  Bachelor of Technology — Computer Science &amp; Engineering
                </span>
                <span className="text-gray-800 italic text-xs sm:text-[12.5px]">
                  Aug 2025 – May 2029 (Expected)
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-serif">
                <span className="text-gray-800">
                  Noida Institute of Engineering &amp; Technology (NIET), AKTU Lucknow
                </span>
                <span className="font-bold text-black text-xs sm:text-[12.5px]">
                  CGPA: 8.54
                </span>
              </div>
            </div>
          </section>

          {/* Technical Skills Section */}
          <section className="mt-3.5">
            <h2 className="font-serif font-bold text-sm sm:text-[14.5px] text-black border-b border-black pb-0.5 mb-1.5 uppercase tracking-wide">
              Technical Skills
            </h2>
            <div className="space-y-1 text-gray-900">
              <div>
                <strong className="font-bold text-black">Languages: </strong>
                <span>Java, Python, C, JavaScript</span>
              </div>
              <div>
                <strong className="font-bold text-black">Web Development: </strong>
                <span>HTML5, CSS3, JavaScript, Responsive Design, Frontend Development</span>
              </div>
              <div>
                <strong className="font-bold text-black">CS Fundamentals: </strong>
                <span>Data Structures &amp; Algorithms, Object-Oriented Programming, DBMS, Computer Architecture</span>
              </div>
              <div>
                <strong className="font-bold text-black">Tools &amp; Platforms: </strong>
                <span>Git, GitHub, VS Code, GDB, Flask, SQLite, Chart.js, Leaflet.js</span>
              </div>
              <div>
                <strong className="font-bold text-black">Areas of Interest: </strong>
                <span>Software Engineering, Full-Stack Development, AI/ML, Cybersecurity, IoT, Cloud</span>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mt-3.5">
            <h2 className="font-serif font-bold text-sm sm:text-[14.5px] text-black border-b border-black pb-0.5 mb-1.5 uppercase tracking-wide">
              Experience
            </h2>
            <div className="space-y-2.5">
              {/* Experience 1 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <span className="font-bold text-black">Web Development Intern</span>
                    <span className="text-gray-800"> | InAmigos Foundation (IAF)</span>
                  </div>
                  <span className="text-gray-800 italic text-xs sm:text-[12.5px]">
                    Noida, India | Jun 2026 – Jul 2026
                  </span>
                </div>
                <ul className="list-disc ml-5 mt-0.5 space-y-0.5 text-gray-900">
                  <li>Developed and maintained responsive web pages using HTML5 and CSS3, improving cross-device compatibility.</li>
                  <li>Enhanced website UI/UX, resulting in improved visual consistency and user experience across key pages.</li>
                  <li>Optimized website performance by auditing and refactoring existing content and page assets.</li>
                </ul>
              </div>

              {/* Experience 2 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <span className="font-bold text-black">Open Source Contributor</span>
                    <span className="text-gray-800"> | GirlScript Summer of Code (GSSoC) 2026</span>
                  </div>
                  <span className="text-gray-800 italic text-xs sm:text-[12.5px]">
                    Remote | May 2026 – Jul 2026
                  </span>
                </div>
                <ul className="list-disc ml-5 mt-0.5 space-y-0.5 text-gray-900">
                  <li>Contributed to real-world open-source repositories on GitHub — fixed bugs and shipped new features across multiple projects.</li>
                  <li>Built and improved frontend components in HTML, CSS, and JavaScript following open-source best practices.</li>
                  <li>Collaborated with project maintainers via GitHub issues, pull requests, and code reviews; practiced Git-based version control.</li>
                  <li>Improved project documentation and added test coverage to increase overall code quality.</li>
                </ul>
              </div>

              {/* Experience 3 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <span className="font-bold text-black">Technology Job Simulation</span>
                    <span className="text-gray-800"> | Deloitte Australia (Forage)</span>
                  </div>
                  <span className="text-gray-800 italic text-xs sm:text-[12.5px]">
                    Virtual | Oct 2026
                  </span>
                </div>
                <ul className="list-disc ml-5 mt-0.5 space-y-0.5 text-gray-900">
                  <li>Completed a Deloitte Australia Technology job simulation involving hands-on coding and development tasks.</li>
                  <li>Wrote a proposal for building a dashboard.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mt-3.5">
            <h2 className="font-serif font-bold text-sm sm:text-[14.5px] text-black border-b border-black pb-0.5 mb-1.5 uppercase tracking-wide">
              Projects
            </h2>
            <div className="space-y-2.5">
              {/* Project 1 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="font-bold text-black">
                    Digital Complaint Management System (DCMS)
                  </span>
                  <span className="text-gray-800 italic text-xs sm:text-[12.5px]">
                    Python, OOP, SQLite
                  </span>
                </div>
                <ul className="list-disc ml-5 mt-0.5 space-y-0.5 text-gray-900">
                  <li>Designed and built a full-featured complaint management system applying core OOP principles (encapsulation, inheritance, polymorphism).</li>
                  <li>Produced comprehensive documentation covering architecture, UML class diagrams, and test cases (30+ pages).</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="font-bold text-black">
                    Watt’s Off — Energy Consumption Anomaly Detection
                  </span>
                  <span className="text-gray-800 italic text-xs sm:text-[12.5px]">
                    Python, Flask, SQLite, JavaScript, Chart.js, Leaflet.js
                  </span>
                </div>
                <ul className="list-disc ml-5 mt-0.5 space-y-0.5 text-gray-900">
                  <li>Built an energy-monitoring platform that detects abnormal usage patterns using Python-based statistical anomaly detection.</li>
                  <li>Integrated geographic data visualization via Leaflet.js and real-time dashboards via Chart.js for citizen and officer portals.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="font-bold text-black">
                    ATM Transaction Logging &amp; Cash Flow Tracking System
                  </span>
                  <span className="text-gray-800 italic text-xs sm:text-[12.5px]">
                    Java, OOP, DBMS
                  </span>
                </div>
                <ul className="list-disc ml-5 mt-0.5 space-y-0.5 text-gray-900">
                  <li>Developed a transaction management application supporting real-time logging, cash-flow analytics, and audit reporting.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="font-bold text-black">
                    IoT Smoke &amp; Fire Detection System
                  </span>
                  <span className="text-gray-800 italic text-xs sm:text-[12.5px]">
                    Python, IoT, Embedded Systems
                  </span>
                </div>
                <ul className="list-disc ml-5 mt-0.5 space-y-0.5 text-gray-900">
                  <li>Designed a real-time hazard detection system monitoring smoke/fire sensors with automated alert generation.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Achievements & Hackathons Section */}
          <section className="mt-3.5">
            <h2 className="font-serif font-bold text-sm sm:text-[14.5px] text-black border-b border-black pb-0.5 mb-1.5 uppercase tracking-wide">
              Achievements &amp; Hackathons
            </h2>
            <div className="space-y-1.5 text-gray-900">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <span className="font-bold text-black">
                    • Smart India Hackathon 2026 (SIH) — Team DoraByte
                  </span>
                  <span className="text-gray-800 italic text-xs sm:text-[12.5px]">
                    Selected Team, NIET Internal SIH 2026
                  </span>
                </div>
                <p className="ml-4 mt-0.5 text-gray-800">
                  Designed an AI-powered real-time Stress &amp; Trauma Assessment Module using NLP, Speech Analytics, and Emotion AI. Proposed a Stress Vulnerability Index (SVI) categorizing users into distress levels; included a Silent Distress Mode for discreet access.
                </p>
              </div>

              <div>
                <span className="font-bold text-black">• IntrusionX — Cybersecurity Hackathon: </span>
                <span className="text-gray-900">
                  Competed across AI/ML security, web, blockchain, cloud, and IoT security tracks.
                </span>
              </div>

              <div>
                <span className="font-bold text-black">• Paytm Build for India AI Hackathon: </span>
                <span className="text-gray-900">
                  Explored AI-driven tracks on merchant growth, financial journeys, and autonomous AI.
                </span>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
