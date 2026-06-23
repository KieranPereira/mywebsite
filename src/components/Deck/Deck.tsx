import {FC, memo, useCallback, useMemo} from 'react';

import {education, experience} from '../../data/data';
import {buildDeckSlides} from '../../data/deck';
import {projects} from '../../data/projects';
import {useDeckKeyboard} from '../../hooks/useDeckKeyboard';
import {useDeckObserver} from '../../hooks/useDeckObserver';
import {useDeckScrollHint} from '../../hooks/useDeckScrollHint';
import DeckNav from './DeckNav';
import AboutSlide from './slides/AboutSlide';
import ContactSlide from './slides/ContactSlide';
import CoverSlide from './slides/CoverSlide';
import ExperienceSlide from './slides/ExperienceSlide';
import CaptainOverviewSlide from './slides/CaptainOverviewSlide';
import BladeRunnerOverviewSlide from './slides/BladeRunnerOverviewSlide';
import RocketryOverviewSlide from './slides/RocketryOverviewSlide';
import FieldTestingSlide from './slides/FieldTestingSlide';
import ProjectSlide from './slides/ProjectSlide';

const BESPOKE_PROJECT_SLIDES: Record<string, FC<Parameters<typeof ProjectSlide>[0]>> = {
  taflab: CaptainOverviewSlide,
  'captain-field-testing': FieldTestingSlide,
  'ucl-rocketry': RocketryOverviewSlide,
  bladerunner: BladeRunnerOverviewSlide,
};

interface DeckProps {
  showChrome?: boolean;
  showDownloadPdf?: boolean;
}

const Deck: FC<DeckProps> = memo(({showChrome = true, showDownloadPdf = true}) => {
  const slides = useMemo(() => buildDeckSlides(), []);
  const slideIds = useMemo(() => slides.map(slide => slide.id), [slides]);
  const lastIndex = slides.length - 1;

  const {activeIndex, scrollToIndex} = useDeckObserver('[data-deck-slide]');
  const {hasScrolled} = useDeckScrollHint(showChrome);

  const handleNavigate = useCallback(
    (index: number) => {
      scrollToIndex(index, slideIds);
    },
    [scrollToIndex, slideIds],
  );

  useDeckKeyboard({slideIds, activeIndex, onNavigate: handleNavigate, enabled: showChrome});

  const showHints = showChrome && !hasScrolled;

  return (
    <>
      {showChrome && (
        <DeckNav activeIndex={activeIndex} onNavigate={handleNavigate} slides={slides} totalSlides={slides.length} />
      )}
      <div className="deck-snap-container" data-deck-root>
        {slides.map((slide, index) => {
          const isLast = index === lastIndex;
          const hintProps = {isLastSlide: isLast, showScrollHint: showHints && !isLast};

          switch (slide.kind) {
            case 'cover':
              return (
                <CoverSlide
                  key={slide.id}
                  onNavigate={handleNavigate}
                  scrollHintProminent={showHints}
                  showDownloadPdf={showDownloadPdf}
                  showScrollHint={showHints}
                  slide={slide}
                  slides={slides}
                />
              );
            case 'about':
              return <AboutSlide key={slide.id} slide={slide} {...hintProps} />;
            case 'project': {
              const project = projects.find(p => p.slug === slide.slug);
              if (!project) return null;
              const isActive = slides[activeIndex]?.id === slide.id;
              const SlideComponent = BESPOKE_PROJECT_SLIDES[project.slug] ?? ProjectSlide;
              return (
                <SlideComponent isActive={isActive} key={slide.id} project={project} slide={slide} {...hintProps} />
              );
            }
            case 'experience':
              return (
                <ExperienceSlide
                  key={slide.id}
                  sections={[
                    {heading: 'Experience', items: experience},
                    {heading: 'Education', items: education},
                  ]}
                  slide={slide}
                  {...hintProps}
                />
              );
            case 'contact':
              return <ContactSlide isLastSlide key={slide.id} showDownloadPdf={showDownloadPdf} slide={slide} />;
            default:
              return null;
          }
        })}
      </div>
    </>
  );
});

Deck.displayName = 'Deck';
export default Deck;
