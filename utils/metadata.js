/**
 * Metadata generation utilities
 * Centralized metadata helpers for consistent SEO across pages
 */

import { SITE_CONFIG } from '@/constants/site';

/**
 * Generate base metadata for a page
 * @param {Object} options - Metadata options
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.path - Page path (e.g., '/about')
 * @param {string[]} options.keywords - SEO keywords
 * @param {string} options.type - OpenGraph type (default: 'website')
 * @param {string} options.image - Custom image path
 * @returns {Object} Next.js metadata object
 */
export function generateMetadata({
  title,
  description,
  path = '',
  keywords = [],
  type = 'website',
  image = SITE_CONFIG.image,
}) {
  const fullTitle = `${title} | ${SITE_CONFIG.name}`;
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_CONFIG.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Generate article metadata (for blog posts, projects)
 * @param {Object} options - Article metadata options
 * @param {string} options.title - Article title
 * @param {string} options.description - Article description
 * @param {string} options.path - Article path
 * @param {string} options.image - Article image
 * @param {string} options.publishedTime - ISO date string
 * @param {string[]} options.authors - Author names
 * @param {string[]} options.keywords - SEO keywords
 * @returns {Object} Next.js metadata object
 */
export function generateArticleMetadata({
  title,
  description,
  path,
  image,
  publishedTime,
  authors = [SITE_CONFIG.name],
  keywords = [],
}) {
  const fullTitle = `${title} | ${SITE_CONFIG.name}`;
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: 'article',
      publishedTime,
      authors,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: image ? [image] : [],
    },
    alternates: {
      canonical: url,
    },
  };
}

