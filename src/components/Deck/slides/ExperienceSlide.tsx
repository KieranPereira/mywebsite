import Image from 'next/image';
import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';
import {DeckSlideMeta} from '../../../data/deck';
import SectionLabel from '../../UI/SectionLabel';
import Slide from '../Slide';

export interface ExperienceSection {
  heading: string;
  items: TimelineItem[];
}

interface ExperienceSlideProps {
  slide: DeckSlideMeta;
  sections: ExperienceSection[];
  showScrollHint?: boolean;
  isLastSlide?: boolean;
}

const ExperienceEntry: FC<{item: TimelineItem}> = memo(({item}) => (
  <div className="flex gap-4 border-b border-deck-border py-4 last:border-0">
    {item.imageSrc && (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center">
        <Image
          alt={item.location}
          className="max-h-10 w-auto object-contain"
          height={40}
          src={item.imageSrc}
          width={48}
        />
      </div>
    )}
    <div className="min-w-0 flex-1">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <h3 className="font-semibold text-deck-text">{item.title}</h3>
        <span className="text-xs text-deck-muted">
          {item.location} · {item.date}
        </span>
      </div>
      {item.caption && <p className="mt-0.5 text-sm font-medium text-deck-accent">{item.caption}</p>}
      {item.tldr && <p className="mt-0.5 text-sm text-deck-muted">{item.tldr}</p>}
    </div>
  </div>
));

ExperienceEntry.displayName = 'ExperienceEntry';

const ExperienceSlide: FC<ExperienceSlideProps> = memo(({slide, sections, showScrollHint, isLastSlide}) => (
  <Slide
    id={slide.id}
    isLastSlide={isLastSlide}
    showScrollHint={showScrollHint}
    slideNumber={slide.number}
    variant="muted">
    <div className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto">
      {sections.map(section => (
        <div key={section.heading}>
          <SectionLabel>{section.heading}</SectionLabel>
          <div className="mt-2">
            {section.items.map((item, index) => (
              <ExperienceEntry item={item} key={`${item.title}-${index}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </Slide>
));

ExperienceSlide.displayName = 'ExperienceSlide';
export default ExperienceSlide;
