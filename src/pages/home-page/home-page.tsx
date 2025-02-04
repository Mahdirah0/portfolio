import { Header } from '@src/components';
import { HeroSection } from './sections/hero-section';
import { AboutSection } from './sections/about-section';
import { ProjectSection } from './sections/project-section';
import { FooterSection } from './sections/footer-section';
import { SkillsSection } from './sections/skills-section';

export const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <FooterSection />
    </div>
  );
};
