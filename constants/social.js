/**
 * Social media links configuration
 * Centralized to avoid duplication across components
 */

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

/**
 * Primary social links (GitHub)
 * Used in Hero, CTASection, and other prominent locations
 */
export const PRIMARY_SOCIAL_LINKS = [
  { 
    href: 'https://github.com/coolpenguin-dev', 
    icon: faGithub, 
    label: 'GitHub' 
  },
];

/**
 * Extended social links (email and GitHub)
 * Used in Footer and Contact page
 */
export const EXTENDED_SOCIAL_LINKS = [
  { 
    href: 'mailto:dan.pro.01037@gmail.com', 
    icon: faEnvelope, 
    label: 'Email' 
  },
  { 
    href: 'https://github.com/coolpenguin-dev', 
    icon: faGithub, 
    label: 'GitHub' 
  },
];

/**
 * Contact information
 */
export const CONTACT_INFO = {
  phone: '+1 (202) 855-2321',
  email: 'dan.pro.01037@gmail.com',
};

/**
 * Footer-specific social links (uses different icon set)
 * Note: Footer uses different icon variants for consistency
 */
import { faGithub as faGithubSolid } from '@fortawesome/free-brands-svg-icons';

export const FOOTER_SOCIAL_LINKS = [
  { 
    icon: faEnvelope, 
    href: 'mailto:dan.pro.01037@gmail.com', 
    label: 'Email' 
  },
  { 
    icon: faGithubSolid, 
    href: 'https://github.com/coolpenguin-dev', 
    label: 'GitHub' 
  },
];

