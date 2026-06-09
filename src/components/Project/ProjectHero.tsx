import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {Project, ProjectLink} from '../../data/dataDef';
import Button from '../UI/Button';
import StatBadge from '../UI/StatBadge';
import Tag from '../UI/Tag';

const LinkIconMap: Record<ProjectLink['type'], FC<{className?: string}>> = {
  github: CodeBracketIcon,
  demo: PlayCircleIcon,
  deck: DocumentTextIcon,
  external: ArrowTopRightOnSquareIcon,
};

/**
 * Top of a project detail page: title, caption, the big hero stat, tech tags,
 * and the CTA link buttons (GitHub / demo / deck).
 */
const ProjectHero: FC<{project: Project}> = memo(({project}) => {
  const {title, caption, heroStat, techTags, links} = project;

  return (
    <div className="flex flex-col gap-y-6 border-b border-neutral-800 pb-8">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        <p className="text-lg text-neutral-300">{caption}</p>
      </div>

      <StatBadge size="lg" stat={heroStat} />

      {techTags && techTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {techTags.map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      )}

      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {links.map((link, index) => (
            <Button
              Icon={LinkIconMap[link.type]}
              external
              href={link.href}
              key={link.href}
              variant={index === 0 ? 'primary' : 'secondary'}>
              {link.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
});

ProjectHero.displayName = 'ProjectHero';
export default ProjectHero;
