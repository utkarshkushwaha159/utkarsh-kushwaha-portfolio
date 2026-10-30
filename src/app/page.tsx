'use client';

import React from 'react';
import Navbar from '@/components/navigation/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/navigation/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary selection:bg-accent-primary selection:text-bg-primary">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
