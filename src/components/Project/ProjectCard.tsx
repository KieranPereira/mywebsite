import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {FC, memo, PropsWithChildren} from 'react';

import {Project} from '../../data/dataDef';
import StatBadge from '../UI/StatBadge';
import ProjectMediaView from './ProjectMediaView';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

/**
 * Homepage project card. Shows media + title + caption + the hero stat badge.
 * Hovering reveals the TLDR. Clicking navigates to /portfolio/[slug], or
 * straight out to `external` if the project has no detail page.
 */
const ProjectCard: FC<ProjectCardProps> = memo(({project, priority = false}) => {
  const {slug, title, caption, heroStat, media, tldr, external} = project;

  const inner = (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-neutral-900 shadow-lg shadow-black/30 ring-1 ring-neutral-800 transition-transform duration-300 hover:-translate-y-1 hover:ring-accent-500">
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-800">
        <ProjectMediaView alt={title} className="h-full w-full object-cover" media={media} priority={priority} />
        {external && (
          <span className="absolute right-3 top-3 rounded-full bg-neutral-900/80 p-1.5 text-white">
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-y-3 p-5">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-neutral-300">{caption}</p>
        <div className="mt-auto pt-2">
          <StatBadge size="sm" stat={heroStat} />
        </div>
      </div>

      {tldr && (
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-y-3 bg-neutral-900/95 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-sm text-neutral-200">{tldr}</p>
          <span className="text-sm font-semibold text-accent-500">{external ? 'Open project →' : 'Read more →'}</span>
        </div>
      )}
    </article>
  );

  return (
    <CardLink external={external} slug={slug}>
      {inner}
    </CardLink>
  );
});

const CardLink: FC<PropsWithChildren<{slug: string; external?: string}>> = memo(({slug, external, children}) => {
  if (external) {
    return (
      <a className="block h-full" href={external} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    );
  }
  return (
    <Link className="block h-full" href={`/portfolio/${slug}`}>
      {children}
    </Link>
  );
});

ProjectCard.displayName = 'ProjectCard';
CardLink.displayName = 'CardLink';
export default ProjectCard;
