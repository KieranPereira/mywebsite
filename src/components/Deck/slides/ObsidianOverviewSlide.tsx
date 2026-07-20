import {PlayIcon} from '@heroicons/react/24/solid';
import {FC, memo, ReactNode, useCallback, useEffect, useRef, useState} from 'react';

import {Project} from '../../../data/dataDef';
import {DeckSlideMeta} from '../../../data/deck';
import SectionLabel from '../../UI/SectionLabel';
import Slide from '../Slide';

interface ObsidianOverviewSlideProps {
  slide: DeckSlideMeta;
  project: Project;
  isActive: boolean;
  isLastSlide?: boolean;
  showScrollHint?: boolean;
}

/**
 * Bespoke poster for Obsidian Performance Gear: the hand-built hardware and the
 * live weightlifting demo flank two product cards (swimming / weightlifting),
 * a FreeRTOS code strip showcases the firmware, and an NSF I-Corps validation
 * band closes the slide with the decision to walk away.
 */
const ObsidianOverviewSlide: FC<ObsidianOverviewSlideProps> = memo(
  ({slide, project, isActive, isLastSlide = false, showScrollHint = true}) => (
    <Slide id={slide.id} isLastSlide={isLastSlide} showScrollHint={showScrollHint} slideNumber={slide.number}>
      <div className="flex h-full min-h-0 flex-1 flex-col gap-2 lg:gap-2.5">
        <header className="shrink-0">
          <SectionLabel className="text-xs">
            {project.deckSectionLabel ?? 'UC Berkeley · Co-founder & CTO'}
          </SectionLabel>
          <h2 className="text-2xl font-bold leading-tight text-deck-text sm:text-3xl">{project.title}</h2>
          <p className="mt-1 text-sm font-bold leading-snug text-deck-accent sm:text-base">
            Bad form causes most training injuries, and you only find out once it hurts.
          </p>
          <p className="mt-1 max-w-4xl text-xs leading-snug text-deck-text sm:text-sm">
            We built <Em>two products</Em> on one embedded platform: a <Em>swimming coach</Em> and a{' '}
            <Em>weightlifting coach</Em> that buzz you back on form <Em>mid-exercise</Em>.
          </p>
        </header>

        {/* ── Band 1: hardware photo · two product cards · live demo ── */}
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-2 md:grid-cols-12 md:gap-3">
          <PhotoCard
            alt="Hand-soldered protoboard with an ESP32 Feather, MPU6050 IMU and two motor driver breakouts"
            caption="The swimming build&rsquo;s body unit, hand-soldered: ESP32 Feather, the body IMU and two motor drivers."
            spanClass="md:col-span-3"
            src="/obsidian/body-board.jpg"
          />

          {/* Centre: the two prototypes + how they were built */}
          <div className="flex min-h-0 flex-col justify-center gap-1 overflow-hidden md:col-span-5">
            <p className="shrink-0 text-sm font-bold leading-snug text-deck-text sm:text-base">
              One embedded platform, two coaches:
            </p>
            <ProductCard number="01" title="Swimming">
              <Bullet>
                IMUs on the <Em>head</Em> and <Em>body</Em>: keep the head <Em>streamlined</Em>, and buzz the moment
                body roll drifts from a swimmer&rsquo;s gait: correction <Em>mid-stroke</Em>.
              </Bullet>
            </ProductCard>
            <ProductCard number="02" title="Weightlifting">
              <Bullet>
                A sensor pod on the <Em>arm</Em> tracks lift angle through <Em>every rep</Em>, streamed live into our{' '}
                <Em>Python</Em> visualiser. Watch it on the right.
              </Bullet>
            </ProductCard>
            <div className="mt-4 min-h-0">
              <p className="shrink-0 text-sm font-bold leading-snug text-deck-text sm:text-base">How we built it:</p>
              <ul className="mt-0.5 space-y-1">
                <Bullet>
                  An <Em>ESP32</Em> reads two <Em>MPU6050 IMUs</Em> and drives four <Em>vibration motors</Em>.
                </Bullet>
                <Bullet>
                  <Em>FreeRTOS</Em> with four concurrent tasks: <Em>mutexes</Em>, <Em>queues</Em> and{' '}
                  <Em>task notifications</Em> keep sensing, feedback and telemetry in sync.
                </Bullet>
              </ul>
            </div>
          </div>

          <VideoCard
            caption={
              <>
                The weightlifting prototype live: our Python GUI tracking the arm through a lateral raise, streamed from
                the wearable.
              </>
            }
            label="Watch the live demo · 1:07"
            playLabel="Play the live weightlifting motion-tracking demo"
            poster="/obsidian/techdemo-poster.jpg"
            slideIsActive={isActive}
            spanClass="md:col-span-4"
            src="/obsidian/techdemo.mp4"
          />
        </div>

        {/* ── Architecture strip: how data flows through the system ── */}
        <ArchitectureStrip />

        {/* ── Band 2: I-Corps validation + the verdict ── */}
        <div className="grid shrink-0 grid-cols-1 gap-2 md:grid-cols-12 md:gap-3">
          <div className="flex min-h-0 flex-col justify-center md:col-span-7">
            <p className="text-sm font-bold leading-snug text-deck-text">
              Then we tested the <span className="text-deck-accent">business</span> as hard as the hardware:
            </p>
            <div className="mt-1.5 grid grid-cols-3 gap-1.5">
              <StatCell label="Customer interviews · NSF I-Corps" value="156" />
              <StatCell label="Signed letters of intent" value="2" />
              <StatCell label="Draper University accelerator offer" value="1" />
            </div>
            <p className="mt-1.5 text-[11px] leading-snug text-deck-muted sm:text-xs">
              Five Berkeley MEng founders: ex-SpaceX, Tesla, Lockheed Martin and Samsung R&amp;D.{' '}
              <a
                className="font-semibold text-deck-accent hover:underline"
                href="/obsidian/pitch-deck.pdf"
                rel="noopener noreferrer"
                target="_blank">
                Read the pitch deck →
              </a>
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-xl border border-deck-accent/40 bg-deck-accent-muted/40 px-3 py-2 md:col-span-5">
            <p className="text-sm font-bold leading-snug text-deck-text">
              <span className="text-deck-accent">And then we walked away.</span>
            </p>
            <p className="mt-0.5 text-[11px] leading-snug text-deck-text sm:text-xs">
              Customer discovery is meant to change your mind, and ours did: the evidence didn&rsquo;t support the
              business, so we called it before sunk cost could argue otherwise.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  ),
);

/* ── Inline pieces ──────────────────────────────────────────────────────── */

const Em: FC<{children: ReactNode}> = ({children}) => (
  <strong className="font-semibold text-deck-text">{children}</strong>
);

const Bullet: FC<{children: ReactNode}> = ({children}) => (
  <li className="flex gap-2 text-xs leading-snug text-deck-text sm:text-sm">
    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />
    <span>{children}</span>
  </li>
);

/** One prototype: numbered badge, name, and a couple of tight bullets. */
const ProductCard: FC<{number: string; title: string; children: ReactNode}> = ({number, title, children}) => (
  <article className="min-h-0 rounded-xl border border-deck-border bg-white px-2.5 py-1">
    <p className="flex items-center gap-1.5">
      <span className="rounded bg-deck-accent px-1.5 py-0.5 text-[9px] font-extrabold text-white">{number}</span>
      <span className="text-[10px] font-bold uppercase tracking-wide text-deck-text sm:text-[11px]">
        Prototype · {title}
      </span>
    </p>
    <ul className="mt-0.5 space-y-1">{children}</ul>
  </article>
);

const StatCell: FC<{value: string; label: string}> = ({value, label}) => (
  <div className="rounded-lg border border-deck-border bg-deck-surface px-2 py-1 text-center">
    <p className="text-base font-extrabold leading-none text-deck-accent">{value}</p>
    <p className="mt-0.5 text-[9px] font-semibold uppercase leading-tight tracking-wide text-deck-muted sm:text-[10px]">
      {label}
    </p>
  </div>
);

/* ── Architecture strip: the swimming build's dataflow ─────────────────── */

const FlowNode: FC<{title: string; sub: string; accent?: boolean; className?: string}> = ({
  title,
  sub,
  accent = false,
  className,
}) => (
  <div
    className={`flex min-w-[7rem] flex-col items-center justify-center rounded-lg border px-2 py-0.5 text-center ${
      accent ? 'border-deck-accent/50 bg-deck-accent-muted/30' : 'border-deck-border bg-deck-surface'
    } ${className ?? ''}`}>
    <p className="text-[10px] font-bold leading-tight text-deck-text lg:text-[11px]">{title}</p>
    <p className="text-[8px] leading-tight text-deck-muted lg:text-[9px]">{sub}</p>
  </div>
);

const FlowArrow: FC<{label: string}> = ({label}) => (
  <div className="flex min-w-[4.5rem] flex-1 flex-col items-center justify-center px-1">
    <p className="text-center text-[8px] font-semibold leading-tight text-deck-muted lg:text-[9px]">{label}</p>
    <svg
      aria-hidden="true"
      className="h-2.5 w-full text-deck-muted"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 60 10">
      <path d="M0 5h54M54 5l-5-3.5M54 5l-5 3.5" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} />
    </svg>
  </div>
);

/** One glance at the firmware: sensors in, FreeRTOS in the middle, haptics and telemetry out. */
const ArchitectureStrip: FC = () => (
  <div className="shrink-0 overflow-hidden rounded-xl border border-deck-border bg-white">
    <div className="flex items-center justify-between gap-2 border-b border-deck-border px-3 py-0.5">
      <p className="text-[9px] font-bold uppercase tracking-wide text-deck-muted sm:text-[10px]">
        System architecture · swimming build
      </p>
      <a
        className="shrink-0 text-[9px] font-semibold text-deck-accent hover:underline sm:text-[10px]"
        href="https://github.com/KieranPereira/235Project/tree/main/ESP32Project/swimming"
        rel="noopener noreferrer"
        target="_blank">
        View the firmware on GitHub →
      </a>
    </div>
    <div className="overflow-x-auto">
      <div className="flex min-w-[44rem] items-stretch gap-1 px-3 py-1">
        <FlowNode sub="head pitch + body roll" title="2× MPU6050 IMUs" />
        <FlowArrow label="shared I²C · mutex-guarded" />
        <FlowNode accent sub="4 tasks: sense ×2 · telemetry · command" title="ESP32 · FreeRTOS" />
        {/* Fork: haptics out (the product) and telemetry out (the demo) */}
        <div className="flex flex-[2] flex-col justify-center gap-0.5">
          <div className="flex items-stretch gap-1">
            <FlowArrow label="threshold breach → PWM" />
            <FlowNode sub="buzz the side that drifted" title="4× vibration motors" />
          </div>
          <div className="flex items-stretch gap-1">
            <FlowArrow label="queues → Bluetooth SPP" />
            <FlowNode sub="live view · commands back" title="Python GUI" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ── Media cards ────────────────────────────────────────────────────────── */

interface PhotoCardProps {
  src: string;
  alt: string;
  caption: ReactNode;
  spanClass: string;
}

/** Static photo on a blurred backdrop of itself, never cropped, with a caption underneath. */
const PhotoCard: FC<PhotoCardProps> = ({src, alt, caption, spanClass}) => (
  <figure
    className={`flex min-h-0 flex-col overflow-hidden rounded-xl border border-deck-border bg-white ${spanClass}`}>
    <div className="relative flex h-44 shrink-0 items-center justify-center overflow-hidden bg-neutral-900 md:h-auto md:min-h-[8rem] md:flex-1">
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-md"
        src={src}
      />
      <img alt={alt} className="relative h-full w-auto max-w-full object-contain" src={src} />
    </div>
    <figcaption className="shrink-0 px-2.5 py-1.5 text-[10px] leading-snug text-deck-muted lg:text-[11px]">
      {caption}
    </figcaption>
  </figure>
);

interface VideoCardProps {
  src: string;
  poster: string;
  label: string;
  playLabel: string;
  caption?: ReactNode;
  spanClass: string;
  slideIsActive: boolean;
}

/** Click-to-play video on a dark stage with a blurred backdrop; pauses and resets when the slide leaves view. */
const VideoCard: FC<VideoCardProps> = ({src, poster, label, playLabel, caption, spanClass, slideIsActive}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || slideIsActive) return;
    video.pause();
    video.currentTime = 0;
    setStarted(false);
  }, [slideIsActive]);

  const handlePlay = useCallback(() => {
    setStarted(true);
    void videoRef.current?.play().catch(() => setStarted(false));
  }, []);

  return (
    <figure
      className={`flex min-h-0 flex-col overflow-hidden rounded-xl border border-deck-border bg-white ${spanClass}`}>
      <div className="relative flex h-44 shrink-0 items-center justify-center overflow-hidden bg-neutral-900 md:h-auto md:min-h-[8rem] md:flex-1">
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-md"
          src={poster}
        />
        <video
          aria-label={playLabel}
          className={started ? 'relative max-h-full min-h-0 w-full object-contain' : 'hidden'}
          controls={started}
          onEnded={() => setStarted(false)}
          playsInline
          preload="metadata"
          ref={videoRef}
          src={src}
        />
        {/* Poster as a real image so it isn't letterboxed to the video's aspect ratio */}
        {!started && (
          <img alt="" className="relative h-auto max-h-full w-auto max-w-full object-contain" src={poster} />
        )}
        {!started && (
          <button
            aria-label={playLabel}
            className="group absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-black/10 transition-colors hover:bg-black/25"
            onClick={handlePlay}
            type="button">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-deck-accent text-white shadow-lg ring-4 ring-white/40 transition-transform group-hover:scale-110">
              <PlayIcon className="ml-1 h-6 w-6" />
            </span>
            <span className="rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold text-white">{label}</span>
          </button>
        )}
      </div>
      {caption && (
        <figcaption className="shrink-0 px-2.5 py-1.5 text-[10px] leading-snug text-deck-muted lg:text-[11px]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

ObsidianOverviewSlide.displayName = 'ObsidianOverviewSlide';
export default ObsidianOverviewSlide;
