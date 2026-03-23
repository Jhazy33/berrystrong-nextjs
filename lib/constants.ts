export const SITE_NAME = 'Berry Strong | Fitness Training | Plymouth';
export const SITE_URL = 'https://berrystrong.net';

export const NAVIGATION = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/berrystrong',
  instagram: 'https://instagram.com/berrystrong',
  twitter: 'https://twitter.com/berrystrong',
} as const;

export const CONTACT_INFO = {
  email: 'info@berrystrong.net',
  phone: '+44 1234 567890',
  location: 'Plymouth, UK',
} as const;
