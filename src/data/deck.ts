import {projects} from './projects';

export type DeckSlideKind = 'cover' | 'about' | 'project' | 'contact';

export interface DeckSlideMeta {
  id: string;
  kind: DeckSlideKind;
  label: string;
  number: number;
  slug?: string;
}

/**
 * Single source of truth for slide order, TOC, and PDF page sequence.
 * Cover → About → [one slide per project] → Contact
 */
export const buildDeckSlides = (): DeckSlideMeta[] => {
  const slides: Omit<DeckSlideMeta, 'number'>[] = [
    {id: 'cover', kind: 'cover', label: 'Cover'},
    {id: 'about', kind: 'about', label: 'About me'},
    ...projects.map(project => ({
      id: `project-${project.slug}`,
      kind: 'project' as const,
      label: project.title,
      slug: project.slug,
    })),
    {id: 'contact', kind: 'contact', label: 'Get in touch'},
  ];

  return slides.map((slide, index) => ({...slide, number: index + 1}));
};

export const deckSlides = buildDeckSlides();
export const deckSlideCount = deckSlides.length;
