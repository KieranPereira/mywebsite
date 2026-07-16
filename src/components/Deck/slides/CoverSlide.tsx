import {ArrowDownTrayIcon, ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useEffect, useRef, useState} from 'react';

import {deckData, resumePdfPath} from '../../../data/data';
import {DeckSlideMeta} from '../../../data/deck';
import Button from '../../UI/Button';
import Slide from '../Slide';

interface CoverSlideProps {
  slide: DeckSlideMeta;
  slides: DeckSlideMeta[];
  onNavigate: (index: number) => void;
  showDownloadPdf?: boolean;
  showScrollHint?: boolean;
  scrollHintProminent?: boolean;
}

/** How long the launch plays alone before the title content flies in. */
const REVEAL_MS = 5000;

/**
 * Full-bleed rocket-launch hero. Autoplays muted/looping; honours reduced-motion
 * by holding on the poster frame. A static poster is swapped in for print/PDF.
 * `dim` fades in the legibility overlays once the title content appears.
 */
const CoverHero: FC<{dim: boolean}> = memo(({dim}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Belt-and-suspenders: some browsers ignore the autoPlay attribute until play() is called.
    void videoRef.current?.play().catch(() => undefined);
  }, []);

  return (
    <div className="absolute inset-0">
      {/* Print/PDF fallback — static frame */}
      <Image
        alt="UCL Rocketry launch"
        className="deck-video-poster-print absolute inset-0 hidden h-full w-full object-cover"
        height={1920}
        src="/cover/rocket-poster.jpg"
        width={1080}
      />
      <video
        aria-hidden="true"
        autoPlay
        className="deck-video-print-hide h-full w-full object-cover animate-cover-zoom"
        loop
        muted
        playsInline
        poster="/cover/rocket-poster.jpg"
        preload="auto"
        ref={videoRef}>
        <source src="/cover/rocket-launch.mp4" type="video/mp4" />
      </video>
      {/* Legibility overlays — held back until the content reveals, so the launch plays clean first */}
      <div
        className={classNames(
          'absolute inset-0 transition-opacity duration-[1200ms] ease-out',
          dim ? 'opacity-100' : 'opacity-0',
        )}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />
      </div>
      {/* Print/PDF only — solid scrim so white text stays legible (CSS gradients are dropped when printing) */}
      <div className="deck-cover-print-scrim absolute inset-0 hidden" />
    </div>
  );
});
CoverHero.displayName = 'CoverHero';

const CoverSlide: FC<CoverSlideProps> = memo(
  ({slide, slides, onNavigate, showDownloadPdf = true, showScrollHint = true, scrollHintProminent = true}) => {
    const contents = slides.filter(s => s.id !== 'cover');
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
      // The launch plays alone first, then the title + contents fly in. This intro is
      // intentionally shown to everyone — it is the cover's core content, not decoration.
      const timer = window.setTimeout(() => setRevealed(true), REVEAL_MS);
      return () => window.clearTimeout(timer);
    }, []);

    useEffect(() => {
      // While holding on the launch, the cover fills the whole viewport and the deck
      // chrome is hidden (see .deck-cover-intro in globalStyles).
      const root = document.documentElement;
      root.classList.toggle('deck-cover-intro', !revealed);
      return () => root.classList.remove('deck-cover-intro');
    }, [revealed]);

    // Hidden until the reveal, then flies in. Keeps the launch as the only thing on screen first.
    const enter = (animation: string) => (revealed ? animation : 'opacity-0');

    return (
      <Slide
        background={<CoverHero dim={revealed} />}
        hideFooter={!revealed}
        id={slide.id}
        scrollHintProminent={scrollHintProminent}
        showScrollHint={showScrollHint && revealed}
        slideNumber={slide.number}>
        <div
          className={classNames(
            'grid h-full flex-1 grid-cols-1 gap-10 lg:grid-cols-[1fr,0.82fr] lg:items-center',
            !revealed && 'pointer-events-none',
          )}>
          {/* Identity — flies in after the launch */}
          <div className="text-white">
            <p
              className={classNames(
                'text-sm font-semibold uppercase tracking-[0.2em] text-blue-300 drop-shadow sm:text-base',
                enter('animate-cover-rise'),
              )}
              style={{animationDelay: '0.15s'}}>
              {deckData.kicker}
            </p>
            <h1
              className={classNames(
                'mt-3 text-5xl font-bold leading-[1.05] tracking-tight drop-shadow-xl sm:text-6xl lg:text-7xl',
                enter('animate-cover-rise'),
              )}
              style={{animationDelay: '0.3s'}}>
              Hi, I&rsquo;m <span className="text-white">Kieran</span>
            </h1>
            <p
              className={classNames(
                'mt-5 max-w-md text-base leading-relaxed text-neutral-200 drop-shadow sm:text-lg',
                enter('animate-cover-rise'),
              )}
              style={{animationDelay: '0.5s'}}>
              I build robots end to end: mechanical design, embedded hardware, control software, and the AI on top.
            </p>
            {showDownloadPdf && (
              <div
                className={classNames(
                  'deck-no-print mt-7 flex flex-wrap items-center gap-3',
                  enter('animate-cover-rise'),
                )}
                style={{animationDelay: '0.7s'}}>
                <Button Icon={ArrowDownTrayIcon} download href={resumePdfPath} variant="primary">
                  Download Resume
                </Button>
                <button
                  className="group inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  onClick={() => onNavigate(1)}
                  type="button">
                  Start exploring
                  <ChevronDownIcon className="h-4 w-4 motion-safe:animate-bounce" />
                </button>
              </div>
            )}
          </div>

          {/* Contents — flips in card by card, kept light + narrow so the launch stays visible behind it */}
          <div
            className={classNames(
              'ml-auto w-full max-w-md rounded-2xl border border-white/15 bg-white/5 p-5 shadow-2xl backdrop-blur-sm sm:p-6',
              enter('animate-cover-fade'),
            )}>
            <h2 className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-200 drop-shadow">Contents</h2>
            <p className="mb-3 text-xs text-neutral-200 drop-shadow">Click any section, or scroll through the deck.</p>
            <ol className="flex flex-col gap-0.5" style={{perspective: '900px'}}>
              {contents.map((entry, i) => {
                const realIndex = slides.findIndex(s => s.id === entry.id);
                return (
                  <li
                    className={classNames('origin-top', enter('animate-cover-flip'))}
                    key={entry.id}
                    style={{animationDelay: `${0.25 + i * 0.07}s`}}>
                    <button
                      className="flex w-full items-center gap-3 rounded-md px-2 py-1.5 text-left text-sm text-white drop-shadow transition-colors hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                      onClick={() => onNavigate(realIndex)}
                      type="button">
                      <span className="w-6 shrink-0 font-semibold text-blue-300">{entry.number}</span>
                      <span className="flex-1 truncate">{entry.label}</span>
                      <ChevronDownIcon className="h-3.5 w-3.5 -rotate-90 text-white/40" />
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Slide>
    );
  },
);

CoverSlide.displayName = 'CoverSlide';
export default CoverSlide;
