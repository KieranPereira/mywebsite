import {PlayIcon} from '@heroicons/react/24/solid';
import {FC, memo, ReactNode, useEffect, useRef, useState} from 'react';

import {Project} from '../../../data/dataDef';
import {DeckSlideMeta} from '../../../data/deck';
import SectionLabel from '../../UI/SectionLabel';
import Slide from '../Slide';

interface ChargingHubSlideProps {
  slide: DeckSlideMeta;
  project: Project;
  isActive: boolean;
  isLastSlide?: boolean;
  showScrollHint?: boolean;
}

/**
 * Bespoke poster for the Undaunted charging hub & payload, told as two
 * matching before → after → how bands: the hub (plywood prototype → production
 * hub with a click-to-play door demo → how it shipped) and the payload
 * (strapped-on Ring doorbell → in-house CAD/field diptych → what I built).
 */
const ChargingHubSlide: FC<ChargingHubSlideProps> = memo(
  ({slide, project, isActive, isLastSlide = false, showScrollHint = true}) => (
    <Slide id={slide.id} isLastSlide={isLastSlide} showScrollHint={showScrollHint} slideNumber={slide.number}>
      <div className="flex h-full min-h-0 flex-1 flex-col gap-2">
        <header className="shrink-0">
          <SectionLabel className="text-xs">
            {project.deckSectionLabel ?? 'Undaunted · Charging Hub & Payload'}
          </SectionLabel>
          <h2 className="text-2xl font-bold leading-tight text-deck-text sm:text-3xl">{project.title}</h2>
          <p className="mt-1.5 text-sm font-bold leading-snug text-deck-accent sm:text-base">
            Plywood hubs that cooked the robots inside. A Ring doorbell strapped on for teleop. Prospects said
            &lsquo;prototype,&rsquo; and deals stalled.
          </p>
          <p className="mt-1 max-w-4xl text-xs leading-snug text-deck-text sm:text-sm">
            I helped design their replacements: a production hub, <Accent>140 in the field</Accent>, and an in-house
            payload that unlocked <Accent>$600k+ in dealflow</Accent>.
          </p>
        </header>

        {/* ── Band 1: the hub, before → after → how ── */}
        <BandLabel>The charging hub</BandLabel>
        <div className="grid min-h-0 flex-[5] grid-cols-1 gap-2 md:grid-cols-12 md:gap-3">
          {/* Before */}
          <article className="flex min-h-0 flex-col overflow-hidden rounded-xl border border-deck-border bg-white shadow-sm md:col-span-3">
            <MediaFrame>
              <img
                alt="The original plywood charging hub sitting on gravel beside a building"
                className="absolute inset-0 h-full w-full object-contain"
                src="/hub/hub-v1-plywood.jpg"
              />
              <BlurBackdrop src="/hub/hub-v1-plywood.jpg" />
            </MediaFrame>
            <div className="shrink-0 p-2.5">
              <CardHeading status={{label: '✗ Where we started', tone: 'amber'}} title="A plywood box" />
              <p className="mt-1 text-[11px] leading-snug text-deck-muted">
                Weather got in, heat built up, wires trailed everywhere.
              </p>
            </div>
          </article>

          {/* After: click-to-play door demo */}
          <article className="flex min-h-0 flex-col overflow-hidden rounded-xl border border-deck-border bg-white shadow-sm md:col-span-5">
            <VideoPanel
              alt="The production charging hub opening its door and the robot walking out"
              label="Watch it let the robot out · 0:35"
              poster="/hub/hub-door-poster.jpg"
              slideIsActive={isActive}
              src="/hub/hub-door-open.mp4"
            />
            <div className="shrink-0 p-2.5">
              <CardHeading status={{label: '✓ 140 in the field', tone: 'green'}} title="The production hub" />
              <p className="mt-1 text-[11px] leading-snug text-deck-muted">
                Weatherproof, AC-cooled, and the door opens itself for patrols.
              </p>
            </div>
          </article>

          {/* How it shipped */}
          <article className="flex min-h-0 flex-col rounded-xl border border-deck-border bg-white p-3 shadow-sm md:col-span-4">
            <h3 className="shrink-0 text-sm font-bold text-deck-text lg:text-[15px]">How it shipped</h3>
            <ul className="mt-1.5 flex flex-col gap-1.5">
              <Bullet>
                Worked with <Em>local manufacturers and contractors</Em> to hold a cadence of{' '}
                <Em>10 hubs built a week</Em>
              </Bullet>
              <Bullet>
                Architected a <Em>Raspberry Pi</Em> system using <Em>MQTT</Em> for remotely operated door controls
              </Bullet>
              <Bullet>
                <Em>Front-loaded feedback</Em> from early customers, manufacturers, field technicians and the sales team
                to lock design choices early
              </Bullet>
            </ul>
            <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-2">
              <Tag variant="metric">10 built / week</Tag>
              <Tag variant="spec">AC-cooled</Tag>
            </div>
          </article>
        </div>

        {/* ── Band 2: the payload, before → after → how ── */}
        <BandLabel>The payload</BandLabel>
        <div className="grid min-h-0 flex-[5] grid-cols-1 gap-2 md:grid-cols-12 md:gap-3">
          {/* Before */}
          <article className="flex min-h-0 flex-col overflow-hidden rounded-xl border border-deck-border bg-white shadow-sm md:col-span-3">
            <MediaFrame>
              <img
                alt="The quadruped with the original payload: a Ring doorbell camera strapped to its back"
                className="absolute inset-0 h-full w-full object-contain"
                src="/hub/payload-v1-ring.jpg"
              />
              <BlurBackdrop src="/hub/payload-v1-ring.jpg" />
            </MediaFrame>
            <div className="shrink-0 p-2.5">
              <CardHeading status={{label: '✗ Read as a prototype', tone: 'amber'}} title="Off-the-shelf parts" />
              <p className="mt-1 text-[11px] leading-snug text-deck-muted">
                A Ring doorbell handled teleop; prospects saw a prototype.
              </p>
            </div>
          </article>

          {/* After: CAD → deployed diptych */}
          <article className="flex min-h-0 flex-col overflow-hidden rounded-xl border border-deck-border bg-white shadow-sm md:col-span-5">
            <MediaFrame>
              <div className="absolute inset-0 z-[1] grid grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    alt="CAD model of the in-house payload integrated onto the quadruped"
                    className="absolute inset-0 h-full w-full object-contain"
                    src="/hub/payload-cad.png"
                  />
                  <CornerLabel>Designed in CAD</CornerLabel>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    alt="The in-house payload with speaker, cameras and lights, out on patrol"
                    className="absolute inset-0 h-full w-full object-contain"
                    src="/hub/payload-field.jpg"
                  />
                  <CornerLabel>On patrol</CornerLabel>
                </div>
              </div>
              <BlurBackdrop src="/hub/payload-field.jpg" />
            </MediaFrame>
            <div className="shrink-0 p-2.5">
              <CardHeading status={{label: '✓ $600k+ unlocked', tone: 'green'}} title="The in-house payload" />
              <p className="mt-1 text-[11px] leading-snug text-deck-muted">
                Driven from our own dashboard, and sleek enough to sell.
              </p>
            </div>
          </article>

          {/* What I built */}
          <article className="flex min-h-0 flex-col rounded-xl border border-deck-border bg-white p-3 shadow-sm md:col-span-4">
            <h3 className="shrink-0 text-sm font-bold text-deck-text lg:text-[15px]">What I built</h3>
            <ul className="mt-1.5 flex flex-col gap-1.5">
              <Bullet>
                Custom teleop on a <Em>Raspberry Pi</Em>: IMX cameras, microphone and amplified speaker streaming{' '}
                <Em>live video and two-way audio</Em> to our dashboard
              </Bullet>
              <Bullet>
                Designed a <Em>custom PCB</Em> driving MOSFETs for the white spotlight and blue patrol-light controls
              </Bullet>
              <Bullet>
                The sleek in-house design unlocked <Em>$600k+ in dealflow</Em> with Atlanta&rsquo;s largest multifamily
                businesses
              </Bullet>
            </ul>
          </article>
        </div>
      </div>
    </Slide>
  ),
);

/* ── Inline emphasis helpers ─────────────────────────────────────────────── */

const Em: FC<{children: ReactNode}> = ({children}) => (
  <strong className="font-semibold text-deck-text">{children}</strong>
);

const Accent: FC<{children: ReactNode}> = ({children}) => (
  <strong className="font-semibold text-deck-accent">{children}</strong>
);

const Bullet: FC<{children: ReactNode}> = ({children}) => (
  <li className="flex gap-2 text-xs leading-snug text-deck-text">
    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />
    <span>{children}</span>
  </li>
);

/** Tiny corner caption for one half of the CAD/field diptych. */
const CornerLabel: FC<{children: ReactNode}> = ({children}) => (
  <span className="absolute bottom-1.5 left-1.5 rounded-md bg-black/55 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white">
    {children}
  </span>
);

/** Uppercase band divider so the hub/payload two-part structure reads at a glance. */
const BandLabel: FC<{children: ReactNode}> = ({children}) => (
  <div className="flex shrink-0 items-center gap-2">
    <span className="rounded-full bg-deck-accent/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-deck-accent ring-1 ring-deck-accent/30">
      {children}
    </span>
    <hr aria-hidden="true" className="flex-1 border-0 border-t border-deck-border" />
  </div>
);

/* ── Card pieces ─────────────────────────────────────────────────────────── */

type StatusTone = 'green' | 'amber';

const STATUS_STYLES: Record<StatusTone, string> = {
  green: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  amber: 'bg-amber-50 text-amber-700 ring-amber-600/20',
};

const CardHeading: FC<{title: string; status: {label: string; tone: StatusTone}}> = ({title, status}) => (
  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
    <span className="text-sm font-bold text-deck-text lg:text-[15px]">{title}</span>
    <span
      className={`rounded-md px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ring-1 ${
        STATUS_STYLES[status.tone]
      }`}>
      {status.label}
    </span>
  </div>
);

const Tag: FC<{children: ReactNode; variant: 'metric' | 'spec'}> = ({children, variant}) => (
  <span
    className={`rounded-md px-2 py-0.5 font-mono text-[10px] font-semibold ${
      variant === 'metric'
        ? 'bg-deck-accent text-white'
        : 'bg-deck-surface font-medium text-deck-muted ring-1 ring-deck-border'
    }`}>
    {children}
  </span>
);

/** Media-panel chrome: dark stage, fixed height on mobile / fills the card on desktop. */
const MediaFrame: FC<{children: ReactNode}> = ({children}) => (
  <div className="relative h-40 shrink-0 overflow-hidden bg-neutral-900 md:h-auto md:min-h-[5.5rem] md:flex-1">
    {children}
  </div>
);

/** Blurred copy of the image behind the contained one, so panels read full-bleed without cropping the photo. */
const BlurBackdrop: FC<{src: string}> = ({src}) => (
  <img
    alt=""
    aria-hidden="true"
    className="absolute inset-0 -z-10 h-full w-full scale-110 object-cover opacity-40 blur-md"
    src={src}
  />
);

interface VideoPanelProps {
  src: string;
  poster: string;
  alt: string;
  label: string;
  slideIsActive: boolean;
}

/** Click-to-play video panel: no autoplay, a big play button over the poster, native controls once started. */
const VideoPanel: FC<VideoPanelProps> = ({src, poster, alt, label, slideIsActive}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  // Leaving the slide pauses the clip so it never plays off-screen.
  useEffect(() => {
    if (!slideIsActive) videoRef.current?.pause();
  }, [slideIsActive]);

  const handlePlay = () => {
    setStarted(true);
    void videoRef.current?.play().catch(() => setStarted(false));
  };

  return (
    <MediaFrame>
      <video
        aria-label={alt}
        className="absolute inset-0 h-full w-full object-contain"
        controls={started}
        onEnded={() => setStarted(false)}
        playsInline
        poster={poster}
        preload="metadata"
        ref={videoRef}
        src={src}
      />
      <BlurBackdrop src={poster} />

      {!started && (
        <button
          aria-label="Play video of the charging hub door opening"
          className="group absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-black/25 transition-colors hover:bg-black/35"
          onClick={handlePlay}
          type="button">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-deck-accent text-white shadow-lg ring-4 ring-white/40 transition-transform group-hover:scale-110">
            <PlayIcon className="ml-1 h-7 w-7" />
          </span>
          <span className="rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold text-white">{label}</span>
        </button>
      )}
    </MediaFrame>
  );
};

ChargingHubSlide.displayName = 'ChargingHubSlide';
export default ChargingHubSlide;
