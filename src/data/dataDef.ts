import {StaticImageData} from 'next/image';
import {FC, ForwardRefExoticComponent, SVGProps} from 'react';

import {IconProps} from '../components/Icon/Icon';

export interface HomepageMeta {
  title: string;
  description: string;
  ogImageUrl?: string;
  twitterCardType?: 'summary' | 'summary_large';
  twitterTitle?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterDomain?: string;
  twitterUrl?: string;
  twitterDescription?: string;
  twitterImageUrl?: string;
}

/**
 * Hero section
 */
export interface Hero {
  imageSrc: string | StaticImageData;
  name: string;
  description: JSX.Element;
  actions: HeroActionItem[];
}

interface HeroActionItem {
  href?: string;
  text: string;
  primary?: boolean;
  Icon?: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
  download?: boolean;
  onClick?: () => void;
}

/**
 * Skills section
 *
 * Skills are rendered as grouped tags/chips (no numeric levels).
 */
export interface Skill {
  name: string;
  /** Core skills render with emphasized chips on the About slide. */
  core?: boolean;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

/**
 * Projects section
 *
 * The whole project system is data-driven. To add a project, append a typed
 * `Project` object to `src/data/projects.tsx` — no JSX/layout work required
 * (the optional `deepDive` is the only field that accepts rich JSX content).
 */

// A single quantified headline shown large at the top of a project.
export interface HeroStat {
  value: string; // e.g. "23% faster", "$1.2M+", "100k+ images"
  label: string; // e.g. "than Boston Dynamics' Spot"
}

export interface ProjectLink {
  type: 'github' | 'demo' | 'deck' | 'external';
  label: string; // e.g. "View code", "Watch demo", "Pitch deck"
  href: string;
}

// Optional collapsible deep-dive section (migrated from the old long pages).
export interface DeepDiveSection {
  heading: string;
  body: JSX.Element; // rich content allowed here (lists, paragraphs, images)
}

export interface ProjectMedia {
  type: 'video' | 'image' | 'document';
  src: string | StaticImageData;
  poster?: string | StaticImageData;
  /** Shown on document frames, e.g. "Pitch deck" or "Full report". */
  label?: string;
}

export interface Project {
  slug: string; // e.g. "taflab" -> /portfolio/taflab
  title: string;
  caption: string; // ONE punchy hook line (the "attract them in" line)
  heroStat: HeroStat; // the big bold number
  media: ProjectMedia;
  tldr?: string; // 1–2 sentence plain-English summary
  highlights?: string[]; // 3–4 skimmable bullet outcomes
  techTags?: string[]; // e.g. ["ROS2", "C++", "Kalman Filter"]
  links?: ProjectLink[];
  deepDive?: DeepDiveSection[]; // optional; rendered collapsed by default
  external?: string; // if set, the card links straight out (no detail page)
  featured?: boolean;
  subtitle?: string; // optional explicit slide subtitle (else use caption)
  /** Blue deck header above the title (e.g. lab name · project type). */
  deckSectionLabel?: string;
  gallery?: ProjectMedia[]; // optional extra images/clips in the visual block
  achievement?: string; // optional override for the bottom achievement line
}

/**
 * Deck / slide-deck content (homepage presentation layer).
 */
export interface DeckData {
  kicker: string;
  name: string;
  coverBio: JSX.Element;
  /** About-slide intro, one entry per paragraph. */
  aboutIntro: string[];
  contactTagline: string;
  /** Company/school logos shown on About slide — paths relative to /public */
  experienceLogos: {name: string; src: string}[];
  /** Skill/tool logos shown on About slide — paths relative to /public */
  skillLogos: {name: string; src: string}[];
}

/**
 * Resume section
 */
export interface TimelineItem {
  date: string;
  location: string;
  title: string;
  content: JSX.Element; // existing detailed bullets (now collapsible)
  imageSrc?: string;
  caption?: string; // NEW: one-line hook
  tldr?: string | JSX.Element; // NEW: 1-sentence summary shown before details (JSX allows bolded key phrases)
}

/**
 * Contact section
 */
export interface ContactSection {
  headerText?: string;
  description: string;
  items: ContactItem[];
}

export const ContactType = {
  Email: 'Email',
  Github: 'Github',
  LinkedIn: 'LinkedIn',
} as const;

export type ContactType = (typeof ContactType)[keyof typeof ContactType];

export interface ContactItem {
  type: ContactType;
  text: string;
  href?: string;
}

export interface ContactValue {
  Icon: FC<IconProps> | ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
  srLabel: string;
}

/**
 * Social items
 */
export interface Social {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}
