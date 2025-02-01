import { FC, memo } from 'react';
import { TimelineItem } from '../../../data/dataDef';

const TimelineItemComponent: FC<{ item: TimelineItem }> = memo(({ item }) => {
  const { title, date, location, content, imageSrc } = item;

  return (
    <div className="flex flex-col md:flex-row items-center pb-8 text-center last:pb-0 md:text-left">
      {/* Left-aligned Larger Image */}
      {imageSrc && (
        <img src={imageSrc} alt={`${title} logo`} className="company-logo w-30 h-30 object-contain md:mr-6 mb-4 md:mb-0" />
      )}

      {/* Right-aligned Text */}
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
        {content}
      </div>
    </div>
  );
});


TimelineItemComponent.displayName = 'TimelineItemComponent';
export default TimelineItemComponent;
