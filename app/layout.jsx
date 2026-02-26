import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/constants/site';

export const metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    SITE_CONFIG.name,
    'AI Web3 Full-Stack Developer',
    'AI Chatbot Developer',
    'AI Agent Developer',
    'React Developer',
    'Next.js Developer',
    'React Native Developer',
    'Flutter Developer',
    'Laravel Developer',
    'Python Developer',
    'SaaS MVP',
    'Voice Agent Developer',
    'LLM Integration',
    'RAG Pipelines',
    'Web3',
    'Blockchain',
    'Solidity',
    'Smart Contracts',
    'Ethers.js',
    'Wallet Authentication',
    'ERC-20',
    'ERC-721',
    'Portfolio',
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.image,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - AI Web3 Full-Stack Developer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.image],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    image: SITE_CONFIG.image,
    jobTitle: 'AI Web3 Full-Stack Developer',
    description: SITE_CONFIG.description,
    sameAs: [
      'https://github.com/coolpenguin-dev',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'React Native',
      'Flutter',
      'Python',
      'Laravel',
      'AI Chatbots',
      'AI Agents',
      'LLM Integration',
      'RAG Pipelines',
      'SaaS Development',
      'Mobile Development',
      'Web Development',
      'Web3',
      'Blockchain',
      'Solidity',
      'Smart Contracts',
      'Ethers.js',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.name,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/projects?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/android-chrome-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3B82F6" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
