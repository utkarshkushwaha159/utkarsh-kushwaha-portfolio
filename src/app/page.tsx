'use client';

import React, { useState } from 'react';
import Navbar from '@/components/navigation/Navbar';
import CommandPalette from '@/components/navigation/CommandPalette';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/navigation/Footer';
import DeveloperCosmosModal from '@/components/3d/DeveloperCosmosModal';

export default function HomePage() {
  const [cosmosOpen, setCosmosOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary selection:bg-accent-primary selection:text-bg-primary">
      {/* Top Navbar */}
      <Navbar
        onOpenCosmos={() => setCosmosOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <HeroSection onOpenCosmos={() => setCosmosOpen(true)} />
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

      {/* Experimental 3D Cosmos Modal */}
      <DeveloperCosmosModal
        isOpen={cosmosOpen}
        onClose={() => setCosmosOpen(false)}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onNavigateToSection={handleNavigateToSection}
      />
    </div>
  );
}
