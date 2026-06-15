import {CheckCircleIcon} from '@heroicons/react/24/solid';
import {FC, memo} from 'react';

import {Project} from '../../data/dataDef';
import SectionLabel from '../UI/SectionLabel';
import ProjectMediaView from './ProjectMediaView';

const ProjectBrief: FC<{project: Project}> = memo(({project}) => {
  const {tldr, highlights, media, title} = project;

  return (
    <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-2 lg:items-start">
      <div className="flex flex-col gap-y-5">
        {tldr && (
          <div>
            <SectionLabel>Overview</SectionLabel>
            <p className="mt-2 text-base leading-relaxed text-deck-text">{tldr}</p>
          </div>
        )}
        {highlights && highlights.length > 0 && (
          <div>
            <SectionLabel>Key Contributions</SectionLabel>
            <ul className="mt-3 flex flex-col gap-y-3">
              {highlights.map(highlight => (
                <li className="flex items-start gap-x-3" key={highlight}>
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-deck-accent" />
                  <span className="text-sm text-deck-text sm:text-base">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="overflow-hidden rounded-xl border border-deck-border bg-deck-surface shadow-sm">
        <ProjectMediaView alt={title} className="h-full w-full object-cover" media={media} priority />
      </div>
    </div>
  );
});

ProjectBrief.displayName = 'ProjectBrief';
export default ProjectBrief;
