export interface PageInfo {
  title: string;
  description: string;
  slug: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
