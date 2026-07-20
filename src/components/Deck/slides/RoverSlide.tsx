import {PlayIcon} from '@heroicons/react/24/solid';
import {FC, memo, ReactNode, useEffect, useRef, useState} from 'react';

import {Project} from '../../../data/dataDef';
import {DeckSlideMeta} from '../../../data/deck';
import SectionLabel from '../../UI/SectionLabel';
import Slide from '../Slide';

interface RoverSlideProps {
  slide: DeckSlideMeta;
  project: Project;
  isActive: boolean;
  isLastSlide?: boolean;
  showScrollHint?: boolean;
}

/**
 * Bespoke "build-iterations" poster for the Undaunted security rover: three
 * upright cards read left to right as a timeline (toy → our chassis → go-kart
 * platform), each with a tall media panel on top — the first is a
 * click-to-play video — and an accent outcome bar underneath.
 */
const RoverSlide: FC<RoverSlideProps> = memo(
  ({slide, project, isActive, isLastSlide = false, showScrollHint = true}) => (
    <Slide id={slide.id} isLastSlide={isLastSlide} showScrollHint={showScrollHint} slideNumber={slide.number}>
      <div className="flex h-full min-h-0 flex-1 flex-col gap-2.5">
        <header className="shrink-0">
          <SectionLabel className="text-xs">
            {project.deckSectionLabel ?? 'Autonomous Security Rover · Build Iterations'}
          </SectionLabel>
          <h2 className="text-2xl font-bold leading-tight text-deck-text sm:text-3xl">{project.title}</h2>
          <p className="mt-2 text-sm font-bold leading-snug text-deck-accent sm:text-base">
            Our quadrupeds ran out of battery in two hours: too short to cover large estates, depots and warehouses.
          </p>
          <p className="mt-1.5 max-w-3xl text-xs leading-snug text-deck-text sm:text-sm">
            Three builds in five months: a <Em>converted toy</Em> proved the idea, <Em>our own chassis</Em> broke in the
            field, and a <Em>go-kart platform</Em> became the{' '}
            <Accent>largest security-rover fleet in the Southeast.</Accent>
          </p>
        </header>

        {/* Three iteration cards, read left to right */}
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-2 md:grid-cols-3 md:gap-3">
          {ITERATIONS.map(iteration => (
            <IterationCard key={iteration.number} {...iteration} slideIsActive={isActive} />
          ))}
        </div>

        {/* Outcome bar */}
        <ResultBar />
      </div>
    </Slide>
  ),
);

/* ── Inline emphasis helpers (declared before the data that uses them) ───── */

const Em: FC<{children: ReactNode}> = ({children}) => (
  <strong className="font-semibold text-deck-text">{children}</strong>
);

const Accent: FC<{children: ReactNode}> = ({children}) => (
  <strong className="font-semibold text-deck-accent">{children}</strong>
);

/* ── Iteration data ─────────────────────────────────────────────────────── */

type StatusTone = 'green' | 'amber';

interface IterationTag {
  label: string;
  variant: 'metric' | 'spec';
}

interface IterationMedia {
  kind: 'image' | 'video';
  src: string;
  alt: string;
  poster?: string;
}

interface Iteration {
  number: string;
  media: IterationMedia;
  title: string;
  month: string;
  status: {label: string; tone: StatusTone};
  bullets: ReactNode[];
  tags: IterationTag[];
}

const ITERATIONS: Iteration[] = [
  {
    number: '01',
    media: {
      kind: 'video',
      src: '/rover/iter1-drive.mp4',
      poster: '/rover/iter1-drive-poster.jpg',
      alt: 'The converted kids ATV driving a patrol route in a car park',
    },
    title: 'A converted kids’ ATV',
    month: 'Month 0–1',
    status: {label: '✓ Proved the concept', tone: 'green'},
    bullets: [
      <>Stripped a kids&rsquo; ride-on ATV down to its motors and used it as a rolling test bed</>,
      <>
        Replaced the stock controller with our own <Em>dual H-bridge</Em> board for skid-steer (tank) drive
      </>,
      <>
        Drove it remotely over <Em>LiveKit</Em>, through an LTE modem we specced and fitted ourselves
      </>,
    ],
    tags: [
      {label: 'Patrolling in 1 month', variant: 'metric'},
      {label: '6 deterred in month one', variant: 'metric'},
      {label: '1080p · 160° FOV', variant: 'spec'},
    ],
  },
  {
    number: '02',
    media: {
      kind: 'image',
      src: '/rover/iter2-chassis.jpg',
      alt: 'Our own aluminium-extrusion chassis with the electronics box on top',
    },
    title: 'Our own chassis',
    month: 'Month 2–4',
    status: {label: '✗ Where it broke', tone: 'amber'},
    bullets: [
      <>
        Designed and built our own <Em>aluminium-extrusion</Em> chassis, mostly from Amazon parts
      </>,
      <>
        Four hub motors on <Em>VESCs</Em>; iterated from 4WD tank drive to 2WD front-pivot steering
      </>,
      <>
        At our weight the frame <Em>flexed</Em> and the wheels lost alignment; the geometry didn&rsquo;t hold up
      </>,
    ],
    tags: [
      {label: '20 mph · 9 hr runtime', variant: 'metric'},
      {label: '4× VESC · 56 V', variant: 'spec'},
      {label: '1.7 kWh LiFePO₄', variant: 'spec'},
    ],
  },
  {
    number: '03',
    media: {
      kind: 'image',
      src: '/rover/iter3-ackerman.png',
      alt: 'The go-kart-style rover with suspension and Ackerman steering, out on patrol',
    },
    title: 'Go-kart architecture',
    month: 'Month 4–6',
    status: {label: '✓ The fix', tone: 'green'},
    bullets: [
      <>
        Rebuilt on a proven go-kart platform: real <Em>suspension</Em> and <Em>Ackerman steering</Em>
      </>,
      <>Moved fabrication to a manufacturer, cutting per-unit cost by about 60%</>,
      <>
        Repairs mostly stopped: <Em>96% uptime</Em> across 18 properties, 56+ intruders deterred
      </>,
    ],
    tags: [
      {label: '≈60% cheaper per unit', variant: 'metric'},
      {label: '96% uptime', variant: 'metric'},
      {label: '56+ deterred', variant: 'metric'},
    ],
  },
];

const RESULTS: {value: string; label: string; accent?: boolean}[] = [
  {value: '5 mo', label: 'From toy to deployed product'},
  {value: '20+', label: 'Rovers deployed across Atlanta'},
  {value: '96%', label: 'Fleet uptime'},
  {value: '#1', label: 'Security-rover fleet in the Southeast', accent: true},
];

/* ── Pieces ─────────────────────────────────────────────────────────────── */

const STATUS_STYLES: Record<StatusTone, string> = {
  green: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  amber: 'bg-amber-50 text-amber-700 ring-amber-600/20',
};

const IterationCard: FC<Iteration & {slideIsActive: boolean}> = ({
  number,
  media,
  title,
  month,
  status,
  bullets,
  tags,
  slideIsActive,
}) => (
  <article className="flex min-h-0 flex-col overflow-hidden rounded-xl border border-deck-border bg-white shadow-sm">
    {/* Media panel: the full photo/video on a blurred backdrop, never cropped */}
    {media.kind === 'video' ? (
      <VideoPanel media={media} number={number} slideIsActive={slideIsActive} />
    ) : (
      <MediaFrame number={number}>
        <img alt={media.alt} className="absolute inset-0 h-full w-full object-contain" src={media.src} />
        <BlurBackdrop src={media.src} />
      </MediaFrame>
    )}

    {/* Text */}
    <div className="flex shrink-0 flex-col p-3">
      <div className="mb-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="text-sm font-bold text-deck-text lg:text-[15px]">{title}</span>
        <span className="rounded-full bg-deck-surface px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-deck-muted ring-1 ring-deck-border">
          {month}
        </span>
        <span
          className={`rounded-md px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ring-1 ${
            STATUS_STYLES[status.tone]
          }`}>
          {status.label}
        </span>
      </div>

      <ul className="mb-2 flex flex-col gap-1">
        {bullets.map((bullet, index) => (
          <li className="flex gap-2 text-xs leading-snug text-deck-text" key={index}>
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-1.5">
        {tags.map(tag => (
          <Tag key={tag.label} variant={tag.variant}>
            {tag.label}
          </Tag>
        ))}
      </div>
    </div>
  </article>
);

/** Shared media-panel chrome: dark stage, iteration number badge, fixed height on mobile / fills the card on desktop. */
const MediaFrame: FC<{number: string; children: ReactNode}> = ({number, children}) => (
  <div className="relative h-44 shrink-0 overflow-hidden bg-neutral-900 md:h-auto md:min-h-[8rem] md:flex-1">
    {children}
    <span className="absolute left-2.5 top-2.5 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-deck-accent text-sm font-extrabold text-white shadow-md">
      {number}
    </span>
  </div>
);

/** Blurred copy of the image behind the contained one, so the panel reads full-bleed without cropping the photo. */
const BlurBackdrop: FC<{src: string}> = ({src}) => (
  <img
    alt=""
    aria-hidden="true"
    className="absolute inset-0 -z-10 h-full w-full scale-110 object-cover opacity-40 blur-md"
    src={src}
  />
);

/** Click-to-play video panel: no autoplay, a big play button over the poster, native controls once started. */
const VideoPanel: FC<{media: IterationMedia; number: string; slideIsActive: boolean}> = ({
  media,
  number,
  slideIsActive,
}) => {
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
    <MediaFrame number={number}>
      <video
        aria-label={media.alt}
        className="absolute inset-0 h-full w-full object-contain"
        controls={started}
        onEnded={() => setStarted(false)}
        playsInline
        poster={media.poster}
        preload="metadata"
        ref={videoRef}
        src={media.src}
      />
      {media.poster && <BlurBackdrop src={media.poster} />}

      {!started && (
        <button
          aria-label="Play video of the first rover driving"
          className="group absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-black/25 transition-colors hover:bg-black/35"
          onClick={handlePlay}
          type="button">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-deck-accent text-white shadow-lg ring-4 ring-white/40 transition-transform group-hover:scale-110">
            <PlayIcon className="ml-1 h-7 w-7" />
          </span>
          <span className="rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold text-white">
            Watch it drive · 0:07
          </span>
        </button>
      )}
    </MediaFrame>
  );
};

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

const ResultBar: FC = () => (
  <div className="grid shrink-0 grid-cols-2 gap-2 rounded-xl border border-deck-accent/40 bg-deck-accent-muted/40 p-2.5 sm:grid-cols-4 sm:p-3">
    {RESULTS.map(result => (
      <div className="rounded-lg border border-deck-border bg-white/70 px-2 py-2 text-center" key={result.label}>
        <p
          className={`text-base font-extrabold leading-none sm:text-lg ${
            result.accent ? 'text-deck-accent' : 'text-deck-text'
          }`}>
          {result.value}
        </p>
        <p className="mt-1 text-[9px] font-semibold uppercase leading-tight tracking-wide text-deck-muted sm:text-[10px]">
          {result.label}
        </p>
      </div>
    ))}
  </div>
);

RoverSlide.displayName = 'RoverSlide';
export default RoverSlide;
