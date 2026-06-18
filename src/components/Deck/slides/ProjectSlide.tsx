import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {Project, ProjectLink} from '../../../data/dataDef';
import {DeckSlideMeta} from '../../../data/deck';
import Button from '../../UI/Button';
import Chip from '../../UI/Chip';
import SectionLabel from '../../UI/SectionLabel';
import StatLine from '../../UI/StatLine';
import ProjectVisualBlock from '../ProjectVisualBlock';
import Slide from '../Slide';

const LinkIconMap: Record<ProjectLink['type'], FC<{className?: string}>> = {
  github: CodeBracketIcon,
  demo: PlayCircleIcon,
  deck: DocumentTextIcon,
  external: ArrowTopRightOnSquareIcon,
};

interface ProjectSlideProps {
  slide: DeckSlideMeta;
  project: Project;
  isActive: boolean;
  isLastSlide?: boolean;
  showScrollHint?: boolean;
}

const ProjectSlide: FC<ProjectSlideProps> = memo(
  ({slide, project, isActive, isLastSlide = false, showScrollHint = true}) => {
    const {title, caption, subtitle, deckSectionLabel, tldr, highlights, techTags, links, heroStat, achievement, external} =
      project;

    return (
      <Slide id={slide.id} isLastSlide={isLastSlide} showScrollHint={showScrollHint} slideNumber={slide.number}>
        <div className="flex h-full min-h-0 flex-1 flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Text column */}
          <div className="flex min-h-0 flex-col gap-3 lg:overflow-hidden">
            <header>
              {deckSectionLabel ? <SectionLabel>{deckSectionLabel}</SectionLabel> : null}
              <h2 className="text-2xl font-bold leading-tight text-deck-text sm:text-3xl">{title}</h2>
              <p className="mt-1 text-sm text-deck-muted sm:text-base">{subtitle ?? caption}</p>
            </header>

            {tldr && (
              <div>
                <SectionLabel>Overview</SectionLabel>
                <p className="mt-1 text-sm leading-relaxed text-deck-text sm:text-base">{tldr}</p>
              </div>
            )}

            {highlights && highlights.length > 0 && (
              <div className="min-h-0 flex-1">
                <SectionLabel>Key Contributions</SectionLabel>
                <ul className="mt-2 space-y-1.5">
                  {highlights.map(item => (
                    <li className="flex gap-2 text-sm text-deck-text" key={item}>
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {techTags && techTags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {techTags.map(tag => (
                  <Chip key={tag} label={tag} variant="outline" />
                ))}
              </div>
            )}

            {links && links.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {links.map((link, index) => (
                  <Button
                    Icon={LinkIconMap[link.type]}
                    external
                    href={external && link.type !== 'deck' ? external : link.href}
                    key={link.href}
                    variant={index === 0 ? 'primary' : 'secondary'}>
                    {link.label}
                  </Button>
                ))}
              </div>
            )}

            <div className="mt-auto space-y-2 pt-2">
              <StatLine achievement={achievement} stat={heroStat} />
              {external && (
                <a
                  className="inline-flex items-center gap-1 text-sm font-medium text-deck-accent hover:underline"
                  href={external}
                  rel="noopener noreferrer"
                  target="_blank">
                  View full project →
                </a>
              )}
            </div>
          </div>

          {/* Visual column — layout driven by media type */}
          <div className="min-h-0 flex-1">
            <ProjectVisualBlock isActive={isActive} project={project} />
          </div>
        </div>
      </Slide>
    );
  },
);

ProjectSlide.displayName = 'ProjectSlide';
export default ProjectSlide;
