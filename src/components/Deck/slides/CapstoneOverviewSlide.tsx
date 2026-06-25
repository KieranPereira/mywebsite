import {FC, memo, ReactNode, useCallback, useEffect, useRef, useState} from 'react';

import {Project} from '../../../data/dataDef';
import {DeckSlideMeta} from '../../../data/deck';
import SectionLabel from '../../UI/SectionLabel';
import Slide from '../Slide';

interface CapstoneOverviewSlideProps {
  slide: DeckSlideMeta;
  project: Project;
  isActive: boolean;
  isLastSlide?: boolean;
  showScrollHint?: boolean;
}

/**
 * Bespoke layout for the UCL capstone: a left-rail live demo anchors the slide
 * while the right side walks through goal → problem → pipeline → proof in four bands.
 */
const CapstoneOverviewSlide: FC<CapstoneOverviewSlideProps> = memo(
  ({slide, project, isActive, isLastSlide = false, showScrollHint = true}) => (
    <Slide id={slide.id} isLastSlide={isLastSlide} showScrollHint={showScrollHint} slideNumber={slide.number}>
      <div className="flex h-full min-h-0 flex-1 flex-col gap-2 md:flex-row md:gap-4 lg:gap-5">
        {/* ── Left rail: live demo + headline result ── */}
        <div className="flex min-h-0 shrink-0 flex-col gap-2 md:w-[26%] lg:w-[24%]">
          <ClickableVideo
            isActive={isActive}
            label="Play with sound"
            poster="/UCLCapstone/narration-poster.jpg"
            src="/UCLCapstone/narration-demo.mp4"
          />
          <p className="text-center text-[10px] leading-snug text-deck-muted lg:text-[11px]">
            Real-time narration: <Em>80% confidence gate</Em>, highest-priority sign first, no repeats within 10s.
          </p>

          <div className="shrink-0 rounded-xl border border-deck-accent/40 bg-deck-accent-muted/40 px-3 py-2">
            <p className="text-sm font-bold leading-snug text-deck-text lg:text-base">
              <span className="text-deck-accent">84.4% mAP</span> · <span className="text-deck-accent">0.81 F1</span>
            </p>
            <p className="mt-0.5 text-[11px] leading-snug text-deck-muted">
              Beat Meta&apos;s benchmark on a harder <Em>global, 63-class</Em> dataset, 4.0 GPA capstone.
            </p>
          </div>

          <div className="grid shrink-0 grid-cols-2 gap-1.5">
            <MiniStat label="Inference" value="~15.5 FPS" />
            <MiniStat label="Unseen test" value="0.711 F1" />
          </div>
        </div>

        {/* ── Right: title + three narrative bands ── */}
        <div className="flex min-h-0 flex-1 flex-col gap-2">
          <header className="shrink-0">
            <SectionLabel>{project.deckSectionLabel ?? 'UCL Capstone · Individual Project'}</SectionLabel>
            <h2 className="text-lg font-bold leading-tight text-deck-text sm:text-xl lg:text-2xl">{project.title}</h2>
          </header>

          {/* Band 1 — The problem */}
          <div className="grid min-h-0 flex-[4] grid-cols-1 gap-2 md:grid-cols-12 md:gap-3">
            <div className="flex min-h-0 flex-col justify-center md:col-span-5">
              <p className="text-sm font-bold leading-snug text-deck-text sm:text-base">
                The drivers most at risk are the ones{' '}
                <span className="text-deck-accent">missing the signs</span>.
              </p>
              <ul className="mt-1.5 space-y-1">
                <Bullet tight>
                  Young drivers are <Em>32%</Em> of those killed or seriously injured; risk climbs again past 70.
                </Bullet>
                <Bullet tight>
                  <Em>44%</Em> forget common sign meanings; inattention drives <Em>56%</Em> of road deaths.
                </Bullet>
                <Bullet tight>
                  Driver-assist tech exists, but is priced out of the used cars these groups actually buy.
                </Bullet>
                <Bullet prominent>
                  I delivered a <Accent>low-cost</Accent> notification system, providing <Accent>audio alerts</Accent> of
                  oncoming traffic signs, to <Accent>improve road safety</Accent>.
                </Bullet>
              </ul>
            </div>

            <figure className="relative flex min-h-0 flex-col overflow-hidden rounded-xl border border-deck-border bg-white p-1.5 md:col-span-7">
              <img
                alt="Bar chart: UK car drivers killed or seriously injured per million population by age, peaking at ages 20-29"
                className="min-h-0 w-full flex-1 object-contain"
                src="/UCLCapstone/problem-age-stats.png"
              />
              <figcaption className="absolute bottom-2 right-2 rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-deck-accent shadow-sm">
                Peak risk: ages 20-29
              </figcaption>
            </figure>
          </div>

          <hr aria-hidden="true" className="shrink-0 border-0 border-t border-deck-border" />

          {/* Band 2 — Methodology + dataset journey */}
          <div className="flex min-h-0 flex-[5] flex-col gap-2">
            <div className="grid min-h-0 flex-1 grid-cols-1 gap-2 md:grid-cols-12 md:gap-3">
              <div className="flex min-h-0 flex-col md:col-span-3">
                <PhaseTag color="method">Methodology</PhaseTag>
                <p className="mt-1 text-sm font-bold leading-snug text-deck-text sm:text-base">
                  10-stage custom CNN using <Em>YOLOv5</Em> in <Em>PyTorch</Em>:
                </p>
                <ul className="mt-1.5 space-y-1">
                  <Bullet tight>Dataset cleaning &amp; manipulation</Bullet>
                  <Bullet tight>Model architecture tuning and hyperparameter optimization</Bullet>
                  <Bullet tight>Live testing, robustness testing</Bullet>
                </ul>
              </div>

              <MethodologyFlowchart />
            </div>

            <div className="grid shrink-0 grid-cols-2 gap-1.5 sm:grid-cols-4">
              <CompactStat label="Training images" value="100k" />
              <CompactStat label="Raw sign classes" value="401" />
              <CompactStat label="GPU hours post-opt" value="270" />
              <CompactStat label="Hyperparams tuned" value="31" />
            </div>
          </div>

          <hr aria-hidden="true" className="shrink-0 border-0 border-t-2 border-deck-accent/70" />

          {/* Band 3 — Training proof + robustness */}
          <div className="grid min-h-0 flex-[6] grid-cols-1 gap-2 md:grid-cols-12 md:gap-3">
            <div className="flex min-h-0 flex-col md:col-span-7">
              <PhaseTag color="results">Trained to state-of-the-art</PhaseTag>
              <figure className="mt-1 flex min-h-0 flex-1 flex-col rounded-xl border-2 border-deck-accent/30 bg-white p-2">
                <img
                  alt="Line chart of maximum F1 score versus epoch for each pipeline stage, with the final model crossing the state-of-the-art threshold"
                  className="min-h-0 w-full flex-1 object-contain"
                  src="/UCLCapstone/training-f1-curve.png"
                />
                <figcaption className="mt-1 text-[10px] leading-snug text-deck-muted sm:text-[11px]">
                  Each preprocessing stage lifted F1 (<Em>0.32 → 0.41 → 0.75</Em>); genetic-algorithm hyperparameter tuning
                  pushed the final model past the SOTA threshold to <Em>0.81 F1</Em>.
                </figcaption>
              </figure>
            </div>

            <div className="flex min-h-0 flex-col md:col-span-5">
              <PhaseTag color="results">Robust to the real world</PhaseTag>
              <div className="mt-1 flex min-h-0 flex-1 flex-col gap-2">
                <figure className="flex min-h-0 flex-1 flex-col rounded-xl border border-deck-border bg-white p-1.5">
                  <img
                    alt="Stop sign progressively occluded from 0 to 75 percent, showing the model detects it up to 50 percent obstruction"
                    className="min-h-0 w-full flex-1 object-contain"
                    src="/UCLCapstone/obstruction-test.png"
                  />
                  <figcaption className="mt-1 text-center text-[10px] leading-snug text-deck-muted">
                    Occlusion test: detected up to <Em>50%</Em> obstruction
                  </figcaption>
                </figure>

                <ul className="shrink-0 space-y-0.5">
                  <Bullet tight>Reads signs with up to 50% obstruction from foliage, dirt or vehicles.</Bullet>
                  <Bullet tight>Holds up in fog, rain and snow, sharper in low light.</Bullet>
                  <Bullet tight>
                    <Em>0.711 F1</Em> on <Em>7,783</Em> unseen images, barely below training.
                  </Bullet>
                </ul>
              </div>
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

const Accent: FC<{children: ReactNode}> = ({children}) => (
  <span className="font-semibold text-deck-accent">{children}</span>
);

const Bullet: FC<{children: ReactNode; tight?: boolean; prominent?: boolean}> = ({
  children,
  tight = false,
  prominent = false,
}) => (
  <li
    className={`leading-snug text-deck-text ${
      prominent ? 'mt-1 text-sm font-semibold' : `flex gap-2 ${tight ? 'text-[10px] lg:text-[11px]' : 'text-xs sm:text-sm'}`
    }`}>
    {!prominent && <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />}
    <span>{children}</span>
  </li>
);

type PhaseColor = 'method' | 'results';

const PHASE_STYLES: Record<PhaseColor, string> = {
  method: 'bg-teal-600/10 text-teal-800 ring-teal-600/25',
  results: 'bg-deck-accent/10 text-deck-accent ring-deck-accent/30',
};

const PhaseTag: FC<{children: ReactNode; color: PhaseColor}> = ({children, color}) => (
  <span
    className={`inline-flex w-fit rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ring-1 sm:text-[11px] ${PHASE_STYLES[color]}`}>
    {children}
  </span>
);

const MiniStat: FC<{label: string; value: string}> = ({label, value}) => (
  <div className="rounded-lg border border-deck-border bg-deck-surface px-2 py-1.5 text-center">
    <p className="text-[9px] font-bold uppercase tracking-wide text-deck-muted">{label}</p>
    <p className="text-xs font-extrabold text-deck-accent">{value}</p>
  </div>
);

const CompactStat: FC<{label: string; value: string}> = ({label, value}) => (
  <div className="rounded-lg border border-deck-border bg-deck-surface px-2 py-1 text-center">
    <p className="text-xs font-extrabold leading-none text-deck-accent sm:text-sm">{value}</p>
    <p className="mt-0.5 text-[8px] font-semibold uppercase leading-tight tracking-wide text-deck-muted sm:text-[9px]">
      {label}
    </p>
  </div>
);

const FLOW_PHASE_STYLES = {
  prep: 'text-blue-700',
  model: 'text-orange-700',
  test: 'text-green-700',
} as const;

type FlowPhase = keyof typeof FLOW_PHASE_STYLES;

const FlowPhaseLabel: FC<{phase: FlowPhase; children: ReactNode}> = ({phase, children}) => (
  <p
    className={`text-right text-[8px] font-bold uppercase leading-tight tracking-wide sm:text-[9px] lg:text-[10px] ${FLOW_PHASE_STYLES[phase]}`}>
    {children}
  </p>
);

const FlowDownArrow: FC<{className?: string}> = ({className}) => (
  <svg
    aria-hidden="true"
    className={`h-3 w-3 text-deck-muted ${className ?? ''}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 20 20">
    <path d="M10 3v14M10 17l-4-4M10 17l4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MethodologyFlowchart: FC = () => (
  <figure className="flex min-h-0 flex-1 items-stretch justify-center gap-1.5 overflow-hidden rounded-xl border border-deck-border bg-white p-1.5 sm:p-2 md:col-span-9 lg:gap-2.5">
    <div className="flex w-[4.25rem] shrink-0 flex-col sm:w-[5rem] lg:w-[5.5rem]">
      <div className="flex flex-[34] items-center justify-end pr-0.5">
        <FlowPhaseLabel phase="prep">Data prep</FlowPhaseLabel>
      </div>
      <div className="flex flex-none items-center justify-end pr-1.5">
        <FlowDownArrow />
      </div>
      <div className="flex flex-[33] items-center justify-end pr-0.5">
        <FlowPhaseLabel phase="model">Model Development</FlowPhaseLabel>
      </div>
      <div className="flex flex-none items-center justify-end pr-1.5">
        <FlowDownArrow />
      </div>
      <div className="flex flex-[33] items-center justify-end pr-0.5">
        <FlowPhaseLabel phase="test">Testing &amp; Narration Integration</FlowPhaseLabel>
      </div>
    </div>

    <img
      alt="Methodology flowchart: dataset selection, manipulation, augmentation, background elimination, model architecture, hyperparameter optimisation, final training, then scenario, large-dataset and narration testing"
      className="h-full w-auto min-h-0 max-w-full object-contain"
      src="/UCLCapstone/methodology-flowchart.png"
    />
  </figure>
);

const PlayIcon: FC<{className?: string}> = ({className}) => (
  <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.79-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z" />
  </svg>
);

interface ClickableVideoProps {
  src: string;
  poster: string;
  label: string;
  isActive: boolean;
}

/** Poster + play button that plays the clip with sound on click; resets when the slide leaves view. */
const ClickableVideo: FC<ClickableVideoProps> = ({src, poster, label, isActive}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || isActive) return;
    video.pause();
    video.currentTime = 0;
    setPlaying(false);
  }, [isActive]);

  const handlePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    setPlaying(true);
    video.muted = false;
    void video.play().catch(() => undefined);
  }, []);

  return (
    <div className="group relative flex max-h-[38vh] min-h-[140px] flex-1 items-center justify-center overflow-hidden rounded-xl border-2 border-deck-accent/30 bg-black md:max-h-none">
      <video
        className="max-h-full min-h-0 w-full object-contain"
        controls={playing}
        onEnded={() => setPlaying(false)}
        playsInline
        poster={poster}
        preload="metadata"
        ref={videoRef}
        src={src}
      />
      {!playing && (
        <button
          aria-label={`Play narration demo, ${label}`}
          className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-black/25 transition hover:bg-black/10"
          onClick={handlePlay}
          type="button">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg ring-1 ring-black/5 transition group-hover:scale-105">
            <PlayIcon className="ml-0.5 h-5 w-5 text-deck-accent" />
          </span>
          <span className="rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white">{label}</span>
        </button>
      )}
    </div>
  );
};

CapstoneOverviewSlide.displayName = 'CapstoneOverviewSlide';
export default CapstoneOverviewSlide;
