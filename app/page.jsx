import { getContentByType, getContentById } from '@/services/content.service';
import Hero from '@/components/sections/Hero';
import JourneyIntro from '@/components/sections/JourneyIntro';
import ImpactShowcase from '@/components/sections/ImpactShowcase';
import Toolkit from '@/components/sections/Toolkit';
import ScrollProgressIndicator from '@/components/common/ScrollProgressIndicator';
import CTASection from '@/components/sections/CTASection';
import { SITE_CONFIG, HOME_SECTIONS } from '@/constants/site';

export const metadata = {
  title: 'Michael Napoli | AI Web3 Full-Stack Developer | AI Chatbot/Agent | SaaS MVP',
  description: 'AI & Web3 Full-Stack Developer specializing in SaaS MVPs, AI chatbots/agents, and modern decentralized applications. I build scalable web and mobile systems with React, Next.js, React Native, Flutter, Laravel, and Pythonintegrating LLM workflows (agents, RAG, voice) and blockchain features into real products.',
  openGraph: {
    title: 'Michael Napoli | AI Web3 Full-Stack Developer | AI Chatbot/Agent | SaaS MVP',
    description: 'AI & Web3 Full-Stack Developer building SaaS MVPs, AI chatbots/agents, and decentralized app features with modern web/mobile stacks.',
    url: SITE_CONFIG.url,
    images: [SITE_CONFIG.image],
  },
};

export default async function HomePage() {
  const heroContent = await getContentById('hero', 'hero');
  const projects = await getContentByType('projects');
  const toolkitContent = await getContentById('toolkit', 'skills');

  // Calculate dynamic stats
  const projectCount = Math.max(30, projects.length);
  const skillsCount = toolkitContent?.metadata?.skills?.length || 0;
  const yearsExperience = new Date().getFullYear() - SITE_CONFIG.careerStartYear;

  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator sections={HOME_SECTIONS} />

      {/* Hero Section - Full viewport introduction */}
      <Hero content={heroContent} />

      {/* Journey Introduction - Stats and transition */}
      <JourneyIntro
        projectCount={projectCount}
        skillsCount={skillsCount}
        yearsExperience={yearsExperience}
      />

      {/* Impact Showcase - Featured projects with storytelling */}
      <ImpactShowcase projects={projects} />

      {/* Toolkit - Skills and technologies */}
      <Toolkit content={toolkitContent} />

      {/* Call to Action - Closing section */}
      <CTASection />
    </>
  );
}
