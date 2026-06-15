import classNames from 'classnames';
import {FC, memo, PropsWithChildren, ReactNode} from 'react';

import {deckSlideCount} from '../../data/deck';
import DeckFooter from './DeckFooter';
import ScrollHint from './ScrollHint';

interface SlideProps {
  id: string;
  slideNumber: number;
  variant?: 'default' | 'muted';
  className?: string;
  hideFooter?: boolean;
  showScrollHint?: boolean;
  scrollHintProminent?: boolean;
  isLastSlide?: boolean;
  /** Optional full-bleed layer rendered behind slide content (e.g. a video hero). */
  background?: ReactNode;
}

const Slide: FC<PropsWithChildren<SlideProps>> = memo(
  ({
    id,
    slideNumber,
    children,
    variant = 'default',
    className,
    hideFooter = false,
    showScrollHint = true,
    scrollHintProminent = false,
    isLastSlide = false,
    background,
  }) => (
    <section
      aria-label={`Slide ${slideNumber}`}
      className={classNames(
        'deck-slide-frame',
        !background && variant === 'default' && 'bg-deck-bg',
        !background && variant === 'muted' && 'bg-deck-surface',
        className,
      )}
      data-deck-slide
      id={id}>
      {/* Full-bleed background layer (e.g. video hero) */}
      {background && <div className="absolute inset-0 z-0 overflow-hidden">{background}</div>}

      {/* Bottom fade + next-slide peek — always visible except on last slide (skipped behind a background) */}
      {!isLastSlide && !background && (
        <div
          aria-hidden="true"
          className="deck-no-print pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-28 bg-gradient-to-t from-deck-accent/[0.07] via-white/70 to-transparent"
        />
      )}

      <ScrollHint
        label={scrollHintProminent ? 'Scroll to explore the deck' : 'Scroll for next slide'}
        prominent={scrollHintProminent}
        visible={showScrollHint && !isLastSlide}
      />

      <div className="relative z-[2] mx-auto flex h-full w-full max-w-[86rem] flex-col px-6 py-8 sm:px-10 sm:py-10 md:max-h-full md:overflow-hidden lg:px-14">
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto md:overflow-hidden">{children}</div>
        {!hideFooter && <DeckFooter slideNumber={slideNumber} totalSlides={deckSlideCount} />}
      </div>
    </section>
  ),
);

Slide.displayName = 'Slide';
export default Slide;
