import { getContentById } from '@/lib/content';
import AboutClient from './AboutClient';

export const metadata = {
  title: 'About',
  description: 'Learn more about Michael Napoli - AI & Web3 Full-Stack Developer with expertise in React, Next.js, React Native, Flutter, Laravel, Python, AI chatbots/agents, and blockchain integrations. Background, skills, and professional journey.',
  keywords: ['about', 'Michael Napoli', 'AI web3 full stack developer', 'AI chatbot developer', 'AI agent developer', 'Web3 developer', 'Solidity developer', 'React developer', 'Next.js developer', 'biography', 'skills'],
  openGraph: {
    title: 'About | Michael Napoli',
    description: 'Learn more about Michael Napoli - AI & Web3 Full-Stack Developer building SaaS MVPs and production-ready systems.',
    url: 'https://digindominic.me/about',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Michael Napoli',
    description: 'Learn more about Michael Napoli - AI & Web3 Full-Stack Developer.',
  },
  alternates: {
    canonical: 'https://digindominic.me/about',
  },
};

export default async function AboutPage() {
  const content = await getContentById('about', 'about');

  return <AboutClient content={content} />;
}
