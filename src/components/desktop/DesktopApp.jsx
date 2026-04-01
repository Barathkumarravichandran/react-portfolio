import React from 'react';
import DesktopHeader from './DesktopHeader';
import HeroSection from './HeroSection';
import ImpactBar from './ImpactBar';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import DesktopFooter from './DesktopFooter';

export default function DesktopApp() {
  return (
    <div className="text-on-surface">
      <DesktopHeader />
      <HeroSection />
      <ImpactBar />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <DesktopFooter />
    </div>
  );
}
