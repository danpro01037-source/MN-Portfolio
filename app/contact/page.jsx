import { getContentById } from '@/lib/content';
import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Michael Napoli. Send a message or connect via email, phone, WhatsApp, Telegram, Discord, or social media for collaboration opportunities.',
  keywords: ['contact', 'Michael Napoli', 'hire developer', 'freelance', 'collaboration', 'get in touch', 'AI developer', 'AI agent developer', 'Web3 developer', 'full stack developer'],
  openGraph: {
    title: 'Contact | Michael Napoli',
    description: 'Get in touch with Michael Napoli for collaboration opportunities.',
    url: 'https://digindominic.me/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Michael Napoli',
    description: 'Get in touch with Michael Napoli for collaboration opportunities.',
  },
  alternates: {
    canonical: 'https://digindominic.me/contact',
  },
};

export default async function ContactPage() {
  const aboutContent = await getContentById('about', 'about');

  return <ContactClient aboutContent={aboutContent} />;
}
