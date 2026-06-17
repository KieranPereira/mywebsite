import {FC, memo, useState} from 'react';

import {Project} from '../../../data/dataDef';
import {DeckSlideMeta} from '../../../data/deck';
import SectionLabel from '../../UI/SectionLabel';
import Slide from '../Slide';

interface CaptainOverviewSlideProps {
  slide: DeckSlideMeta;
  project: Project;
  isActive: boolean;
  isLastSlide?: boolean;
  showScrollHint?: boolean;
}

/**
 * Bespoke "poster" layout for the CAPTAIN overview & ROS2 autonomy slide.
 *
 * Mirrors the hand-built PowerPoint mockup: a top band for the project
 * overview / problem statement, a divider, then a bottom band for sailing
 * dynamics copy and the ROS2 node architecture diagram.
 */
const CaptainOverviewSlide: FC<CaptainOverviewSlideProps> = memo(({slide, isLastSlide = false, showScrollHint = true}) => (
  <Slide id={slide.id} isLastSlide={isLastSlide} showScrollHint={showScrollHint} slideNumber={slide.number}>
    <div className="flex h-full min-h-0 flex-1 flex-col gap-2 lg:gap-3">
      {/* Title */}
      <header>
        <SectionLabel>Berkeley CAPTAIN · Project overview</SectionLabel>
        <h2 className="text-3xl font-bold text-deck-text sm:text-4xl">Autonomous Ocean-Sensor Swarm</h2>
      </header>

      {/* ── Top band: problem & solution ── */}
      <div className="grid min-h-0 flex-[5] grid-cols-1 gap-2 md:grid-cols-12 md:gap-3 lg:gap-4">
        {/* Left: energy-inefficient vs efficient path metaphor */}
        <figure className="flex min-h-0 flex-col rounded-xl border border-deck-border bg-white p-1.5 md:col-span-3">
          <img
            alt="Direct straight-line ship route versus wave-aware energy-efficient path"
            className="min-h-0 w-full flex-1 object-contain"
            src="/capstone/capstone-problem.jpg"
          />
        </figure>

        {/* Centre: headline problem / solution stat */}
        <div className="flex min-h-0 items-center md:col-span-4">
          <p className="text-base leading-relaxed text-deck-text sm:text-lg">
            Cargo ships waste ~30% of fuel fighting waves. We built a swarm of robot sailboats to map the ocean and
            reroute them — ~$9B/yr saved.
          </p>
        </div>

        {/* Right: solution copy + stacked figures */}
        <div className="flex min-h-0 gap-2 md:col-span-5">
          <div className="flex w-[42%] flex-col justify-center">
            <p className="text-base leading-relaxed text-deck-text sm:text-lg">
              By creating a network of drones, we can map ocean waves and inform intelligent path planning for cargo
              ships.
            </p>
            <DownArrow />
          </div>
          <div className="flex min-h-0 w-[58%] flex-col gap-1.5">
            <PlaceholderFigure
              alt="Swarm mesh network diagram showing boats spaced 200 m apart"
              label="Swarm mesh network (200 m spacing)"
              src="/capstone/swarm-mesh-network.png"
            />
            <figure className="min-h-0 flex-1 overflow-hidden rounded-xl border border-deck-border">
              <img
                alt="Fleet of autonomous sail drones on the water"
                className="h-full w-full object-cover"
                src="/capstone/capstone-swarm.jpg"
              />
            </figure>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr aria-hidden="true" className="shrink-0 border-0 border-t-2 border-deck-accent/70" />

      {/* ── Bottom band: ROS2 path planning ── */}
      <div className="flex min-h-0 flex-[6] flex-col gap-2">
        <SectionLabel>Creating path planning algorithm in ROS2</SectionLabel>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-2 md:grid-cols-12 md:gap-3 lg:gap-4">
          {/* Left: pier photo */}
          <figure className="min-h-0 overflow-hidden rounded-xl border border-deck-border md:col-span-3">
            <img
              alt="Sail drone on the Berkeley Marina pier"
              className="h-full w-full object-cover object-top"
              src="/capstone/capstone-title.jpg"
            />
          </figure>

          {/* Centre: sailing dynamics copy */}
          <div className="flex min-h-0 flex-col justify-between md:col-span-4">
            <div>
              <p className="text-base leading-relaxed text-deck-text sm:text-lg">
                Sailing can be tricky — the dynamics are different from a conventional propeller boat. This algorithm
                accounted for:
              </p>
              <ul className="mt-2 space-y-1.5">
                {['Sailing upwind (tacking)', 'Dynamic waypoint tracking', 'Real-time adjustments to wind & heading'].map(
                  item => (
                    <li className="flex gap-2 text-base text-deck-text sm:text-lg" key={item}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="mt-2 flex items-center gap-1.5">
              <LeftArrow />
              <p className="text-base leading-relaxed text-deck-text sm:text-lg">
                Here&apos;s our sail drone. In the time I was on the team we made <strong>50</strong> of them!
              </p>
            </div>
          </div>

          {/* Right: ROS2 architecture diagram */}
          <figure className="flex min-h-0 flex-col rounded-xl border-2 border-deck-accent/30 bg-white p-2 md:col-span-5">
            <img
              alt="ROS2 node architecture for waypoint queue, coordinate calculations, rudder and sail servo control"
              className="min-h-0 w-full flex-1 object-contain"
              src="/capstone/ros2-node-architecture.png"
            />
          </figure>
        </div>
      </div>
    </div>
  </Slide>
));

/** Dashed placeholder for assets the user still needs to drop into /public/capstone. */
const PlaceholderFigure: FC<{src: string; alt: string; label: string}> = ({src, alt, label}) => {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'missing'>('loading');
  const showPlaceholder = status !== 'loaded';

  return (
    <figure
      className={`relative flex min-h-[4.5rem] flex-1 flex-col overflow-hidden rounded-xl border-2 ${
        showPlaceholder ? 'border-dashed border-amber-400/80 bg-amber-50/60' : 'border-deck-border bg-white'
      }`}>
      <img
        alt={alt}
        className="min-h-0 w-full flex-1 object-contain"
        onError={() => setStatus('missing')}
        onLoad={() => setStatus('loaded')}
        src={src}
      />
      {showPlaceholder && (
        <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-0.5 px-2 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-amber-700">Insert photo</span>
          <span className="text-[10px] leading-snug text-amber-800/80">{label}</span>
          <code className="mt-0.5 text-[9px] text-amber-700/70">{src}</code>
        </figcaption>
      )}
    </figure>
  );
};

const DownArrow: FC = () => (
  <svg
    aria-hidden="true"
    className="mx-auto my-1 h-5 w-3 shrink-0 text-deck-accent"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 12 20">
    <path d="M6 1v15" strokeLinecap="round" />
    <path d="M2 12l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LeftArrow: FC = () => (
  <svg
    aria-hidden="true"
    className="h-3 w-5 shrink-0 text-orange-500"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 20 12">
    <path d="M18 6H3" strokeLinecap="round" />
    <path d="M8 1L3 6l5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CaptainOverviewSlide.displayName = 'CaptainOverviewSlide';
export default CaptainOverviewSlide;
