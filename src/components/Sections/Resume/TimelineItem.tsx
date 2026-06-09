import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';
import Collapsible from '../../UI/Collapsible';

/**
 * A single work/education entry. Shows caption + TLDR by default and expands to
 * the full bullet list via a collapsible toggle.
 */
const TimelineItemComponent: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, imageSrc, caption, tldr} = item;

  return (
    <div className="flex flex-col items-center pb-8 text-center last:pb-0 md:flex-row md:items-start md:text-left">
      {imageSrc && <img alt={`${title} logo`} className="company-logo mb-4 md:mb-0 md:mr-6" src={imageSrc} />}

      <div className="flex flex-col gap-y-1">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>

        {caption && <p className="mt-1 text-sm font-semibold text-orange-600">{caption}</p>}
        {tldr && <p className="text-sm text-neutral-700">{tldr}</p>}

        <Collapsible className="mt-2 text-left">
          <div className="prose prose-sm max-w-none text-neutral-700">{content}</div>
        </Collapsible>
      </div>
    </div>
  );
});

TimelineItemComponent.displayName = 'TimelineItemComponent';
export default TimelineItemComponent;
