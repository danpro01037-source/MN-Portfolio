import { getContentByType } from '@/lib/content';
import ProjectsClient from './ProjectsClient';

export const metadata = {
  title: 'Projects',
  description: 'Browse my portfolio of AI-powered web applications, Web3 features, mobile apps, React/Next.js projects, AI chatbots/agents, Laravel backends, Python tools, and SaaS MVPs.',
  keywords: ['portfolio', 'projects', 'web applications', 'web3', 'blockchain', 'Solidity', 'Ethers.js', 'mobile apps', 'React', 'Next.js', 'React Native', 'Flutter', 'Laravel', 'Python', 'AI chatbots', 'AI agents', 'SaaS MVP', 'full stack'],
  openGraph: {
    title: 'Projects | Michael Napoli',
    description: 'Browse my portfolio of AI-powered web applications, Web3 integrations, mobile apps, and development work.',
    url: 'https://digindominic.me/projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Michael Napoli',
    description: 'Browse my portfolio of AI-powered web applications, mobile apps, and development work.',
  },
  alternates: {
    canonical: 'https://digindominic.me/projects',
  },
};

export default async function ProjectsPage() {
  const projects = await getContentByType('projects');

  return <ProjectsClient projects={projects} />;
}
