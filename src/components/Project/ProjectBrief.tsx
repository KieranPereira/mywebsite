import {CheckCircleIcon} from '@heroicons/react/24/solid';
import {FC, memo} from 'react';

import {Project} from '../../data/dataDef';
import ProjectMediaView from './ProjectMediaView';

/**
 * The one-screen brief: TLDR + the 3–4 highlight bullets + primary media.
 * Designed to fit on one screen on desktop without scrolling.
 */
const ProjectBrief: FC<{project: Project}> = memo(({project}) => {
  const {tldr, highlights, media, title} = project;

  return (
    <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-2 lg:items-center">
      <div className="flex flex-col gap-y-5">
        {tldr && <p className="text-base leading-relaxed text-neutral-200 sm:text-lg">{tldr}</p>}
        {highlights && highlights.length > 0 && (
          <ul className="flex flex-col gap-y-3">
            {highlights.map(highlight => (
              <li className="flex items-start gap-x-3" key={highlight}>
                <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-500" />
                <span className="text-sm text-neutral-200 sm:text-base">{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="overflow-hidden rounded-xl bg-neutral-800 shadow-lg ring-1 ring-neutral-700">
        <ProjectMediaView alt={title} className="h-full w-full object-cover" media={media} priority />
      </div>
    </div>
  );
});

ProjectBrief.displayName = 'ProjectBrief';
export default ProjectBrief;
