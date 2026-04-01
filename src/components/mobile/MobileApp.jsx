import React from 'react';
import MobileHeader from './MobileHeader';
import MobileHero from './MobileHero';
import MobileExperience from './MobileExperience';
import MobileSkills from './MobileSkills';
import MobileProjects from './MobileProjects';
import MobileAchievements from './MobileAchievements';
import MobileContact from './MobileContact';
import MobileFooter from './MobileFooter';
import BottomNav from './BottomNav';

export default function MobileApp() {
  return (
    <div className="text-on-surface">
      <MobileHeader />
      <main>
        <MobileHero />
        <MobileExperience />
        <MobileSkills />
        <MobileProjects />
        <MobileAchievements />
        <MobileContact />
      </main>
      <MobileFooter />
      <BottomNav />
    </div>
  );
}
