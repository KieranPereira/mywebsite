import {FC, memo, ReactNode, useEffect, useRef} from 'react';

import {Project} from '../../../data/dataDef';
import {DeckSlideMeta} from '../../../data/deck';
import SectionLabel from '../../UI/SectionLabel';
import Slide from '../Slide';

interface RocketryOverviewSlideProps {
  slide: DeckSlideMeta;
  project: Project;
  isActive: boolean;
  isLastSlide?: boolean;
  showScrollHint?: boolean;
}

/**
 * Bespoke "poster" layout for the UCL Rocketry payload slide, mirroring the
 * hand-built PowerPoint mockup: a tall hero photo with the headline result
 * stacked beneath it runs down the left side, every other content block flows
 * to its right, and the founding story closes the slide as a callout.
 */
const RocketryOverviewSlide: FC<RocketryOverviewSlideProps> = memo(
  ({slide, project, isActive, isLastSlide = false, showScrollHint = true}) => (
    <Slide id={slide.id} isLastSlide={isLastSlide} showScrollHint={showScrollHint} slideNumber={slide.number}>
      <div className="flex h-full min-h-0 flex-1 flex-col gap-3 md:flex-row md:gap-4">
        {/* LEFT column: hero photo + the headline result, aligned to the photo's width */}
        <div className="flex min-h-0 shrink-0 flex-col gap-2 md:w-[23%]">
          <figure className="flex max-h-[40vh] min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-deck-border bg-white md:max-h-none">
            <img
              alt="Holding our competition rocket, with the CanSat payload nose section at the top"
              className="min-h-0 w-full flex-1 object-cover"
              src="/rocketry/rocketry-hero.jpg"
            />
            <figcaption className="px-2 py-1 text-center text-[11px] leading-snug text-deck-muted">
              Built entirely from scratch: we founded the team, then designed, built and flew this rocket in under a
              year.
            </figcaption>
          </figure>

          {/* Headline result, directly beneath the photo */}
          <div className="shrink-0 rounded-xl border border-deck-accent/40 bg-deck-accent-muted/40 px-3 py-2">
            <p className="text-sm font-bold leading-snug text-deck-text">
              <span className="text-deck-accent">2nd place</span> at the Mach22 national competition.
            </p>
            <p className="mt-0.5 text-[11px] leading-snug text-deck-muted sm:text-xs">
              Our inaugural entry, beating teams who&apos;d been building their rockets for up to 3 years.
            </p>
          </div>
        </div>

        {/* RIGHT: title + every other content block */}
        <div className="flex min-h-0 flex-1 flex-col gap-2">
          {/* Title */}
          <header className="shrink-0">
            <SectionLabel>{project.deckSectionLabel ?? 'UCL Rocketry · Head of Payload'}</SectionLabel>
            <h2 className="text-lg font-bold leading-tight text-deck-text sm:text-xl lg:text-2xl">{project.title}</h2>
          </header>

          {/* Top band: goal & key contributions + the design → build → deploy flow */}
          <div className="grid min-h-0 flex-[5] grid-cols-1 gap-2 md:grid-cols-12 md:gap-3 lg:gap-4">
            {/* Goal & key contributions */}
            <div className="flex min-h-0 flex-col justify-start md:col-span-5">
              <p className="text-sm font-bold leading-snug text-deck-text sm:text-base">The goal</p>
              <ul className="mt-1 space-y-1">
                <Bullet>
                  Build a <Em>CanSat</Em> that records <Em>360° footage</Em> of our rocket&apos;s flight.
                </Bullet>
                <Bullet>
                  Collect <Em>pollutant and atmospheric data</Em>: a rapid, recoverable alternative to{' '}
                  <Em>weather balloons</Em>.
                </Bullet>
              </ul>
              <p className="mt-2 text-sm font-bold leading-snug text-deck-text sm:text-base">Key contributions:</p>
              <ul className="mt-1 space-y-1">
                <Bullet>
                  Led a team of <Em>5 engineers</Em> to build a CanSat, launched to <Em>1.5 km</Em> and safely
                  recovered.
                </Bullet>
                <Bullet>
                  Owned the <Em>CAD designs</Em> and the mechanisms for <Em>parachute &amp; 360° camera deployment</Em>.
                </Bullet>
              </ul>
            </div>

            {/* Design → build → deploy flow */}
            <figure className="flex min-h-0 flex-col rounded-xl border border-deck-border bg-white p-2 md:col-span-7">
              <div className="flex min-h-0 flex-1 items-stretch justify-center gap-1 lg:gap-1.5">
                <FlowImg alt="CanSat payload CAD with recovery lifting eye" contain src="/rocketry/cansat-cad.png" />
                <FlowArrow />
                <FlowImg alt="Avionics stack and wiring packed inside the payload" src="/rocketry/avionics-bay.jpg" />
                <FlowArrow />
                <FlowVideo
                  alt="360° GoPro deployed and fixed inside the payload bay"
                  isActive={isActive}
                  poster="/rocketry/gopro-deployed.jpg"
                  src="/rocketry/gopro-deploy.mp4"
                />
              </div>
              <figcaption className="mt-1.5 text-center text-[11px] leading-snug text-deck-muted sm:text-xs">
                From CAD to flight hardware: the 360° GoPro, avionics stack and recovery gear packed into a 3D-printed
                shell.
              </figcaption>
            </figure>
          </div>

          {/* Divider */}
          <hr aria-hidden="true" className="shrink-0 border-0 border-t-2 border-deck-accent/70" />

          {/* Bottom band: the camera-stabilisation problem & spring-catch */}
          <div className="flex min-h-0 flex-[6] flex-col gap-1">
            <SectionLabel>
              The camera shook too hard to film, so we designed a spring-catch to stabilise it
            </SectionLabel>

            <div className="grid min-h-0 flex-1 grid-cols-1 gap-2 md:grid-cols-12 md:gap-3 lg:gap-4">
              {/* Problem & how it works */}
              <div className="flex min-h-0 flex-col justify-center md:col-span-4">
                <p className="text-xs leading-snug text-deck-text sm:text-sm">
                  Lab testing showed the camera would <Em>shake too violently</Em> for viable footage. We designed a{' '}
                  <Em>spring-catch mechanism</Em> that locks the GoPro steady once the payload deploys.
                </p>
                <ul className="mt-1.5 space-y-1">
                  <Bullet tight>
                    As the payload deploys, an <Em>outer tube</Em> displaces a spring…
                  </Bullet>
                  <Bullet tight>
                    …driving a <Em>stopper</Em> that catches and fixes the camera at <Em>45°</Em>.
                  </Bullet>
                  <Bullet tight>
                    <Em>Vibration-absorbing felt</Em> on the stopper soaks up the shake, giving a stable, usable 360°
                    shot.
                  </Bullet>
                </ul>
              </div>

              {/* Labeled CAD (left) + undeployed / deployed renders stacked (right) */}
              <div className="grid min-h-0 grid-cols-2 gap-2 md:col-span-8 lg:gap-3">
                <MechFigure
                  alt="CAD section of the spring-catch: a stopper and an outer tube that displaces the spring"
                  caption="The catch: a stopper and an outer tube that displaces the spring."
                  src="/rocketry/mechanism-labeled.png"
                />
                <div className="grid min-h-0 grid-rows-2 gap-2">
                  <MechFigure
                    alt="Spring-catch undeployed: the GoPro rests against the inner tube surface"
                    caption="Undeployed: GoPro resting on the inner tube surface."
                    src="/rocketry/mechanism-closeup.png"
                  />
                  <MechFigure
                    alt="Spring-catch deployed and mounted under the payload"
                    caption="Deployed: stoppers extended, camera fixed and stabilised at 45°."
                    src="/rocketry/mechanism-mounted.png"
                  />
                </div>
              </div>
            </div>

            {/* Proudest-project callout */}
            <div className="mt-1 shrink-0 rounded-xl border border-deck-accent/40 bg-deck-accent-muted/40 px-3 py-2">
              <p className="text-xs leading-snug text-deck-text sm:text-sm">
                <strong className="font-semibold text-deck-accent">My proudest project.</strong> I helped start UCL
                Rocketry independently after the university declined to back us. It has since grown into UCL&apos;s most
                successful engineering team, with podium finishes at Spaceport America and European competitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  ),
);

const Em: FC<{children: ReactNode}> = ({children}) => (
  <strong className="font-semibold text-deck-text">{children}</strong>
);

const Bullet: FC<{children: ReactNode; tight?: boolean}> = ({children, tight = false}) => (
  <li className={`flex gap-2 leading-snug text-deck-text ${tight ? 'text-xs' : 'text-xs sm:text-sm'}`}>
    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />
    <span>{children}</span>
  </li>
);

const FlowArrow: FC = () => (
  <svg
    aria-hidden="true"
    className="my-auto h-4 w-4 shrink-0 text-deck-accent"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 20 12">
    <path d="M1 6h16" strokeLinecap="round" />
    <path d="M13 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FlowImg: FC<{src: string; alt: string; contain?: boolean}> = ({src, alt, contain = false}) => (
  <div className="flex min-h-0 min-w-0 flex-1 items-center justify-center overflow-hidden rounded-lg bg-deck-surface">
    <img alt={alt} className={`max-h-full min-h-0 w-full ${contain ? 'object-contain p-1' : 'object-cover'}`} src={src} />
  </div>
);

interface FlowVideoProps {
  src: string;
  poster: string;
  alt: string;
  isActive: boolean;
}

/** Short clip that auto-plays when the slide is in view (matches the PowerPoint's embedded clip). */
const FlowVideo: FC<FlowVideoProps> = ({src, poster, alt, isActive}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div className="flex min-h-0 min-w-0 flex-1 items-center justify-center overflow-hidden rounded-lg bg-deck-surface">
      <video
        aria-label={alt}
        className="max-h-full min-h-0 w-full object-cover"
        loop
        muted
        playsInline
        poster={poster}
        preload="metadata"
        ref={videoRef}
        src={src}
      />
    </div>
  );
};

const MechFigure: FC<{src: string; alt: string; caption: string}> = ({src, alt, caption}) => (
  <figure className="flex min-h-0 flex-col rounded-xl border border-deck-border bg-white p-2">
    <img alt={alt} className="min-h-0 w-full flex-1 object-contain" src={src} />
    <figcaption className="mt-1 text-center text-[11px] leading-snug text-deck-muted">{caption}</figcaption>
  </figure>
);

RocketryOverviewSlide.displayName = 'RocketryOverviewSlide';
export default RocketryOverviewSlide;
