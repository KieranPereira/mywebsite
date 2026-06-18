import {FC, memo} from 'react';

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
const CaptainOverviewSlide: FC<CaptainOverviewSlideProps> = memo(
  ({slide, isLastSlide = false, showScrollHint = true}) => (
    <Slide id={slide.id} isLastSlide={isLastSlide} showScrollHint={showScrollHint} slideNumber={slide.number}>
      <div className="flex h-full min-h-0 flex-1 flex-col gap-2 lg:gap-3">
        {/* Title */}
        <header>
          <SectionLabel>Berkeley Capstone Project · Project overview</SectionLabel>
          <h2 className="text-3xl font-bold text-deck-text sm:text-4xl">
            CaptAIn: Building a network of autonomous ocean drones
          </h2>
        </header>

        {/* ── Top band: motivation ── */}
        <div className="grid min-h-0 flex-[5] grid-cols-1 gap-2 md:grid-cols-12 md:gap-3 lg:gap-4">
          {/* Left: roads-vs-waves energy metaphor */}
          <figure className="flex min-h-0 flex-col rounded-xl border border-deck-border bg-white p-2 md:col-span-4">
            <img
              alt="Aerial view of a winding mountain road tracing an energy-efficient path versus a straight line"
              className="min-h-0 w-full flex-1 object-contain"
              src="/capstone/capstone-problem.jpg"
            />
            <figcaption className="mt-1 flex items-start gap-1.5">
              <UpArrow />
              <span className="text-xs leading-snug text-deck-muted sm:text-sm">
                Roads wind uphill to save energy. Ships should steer around the waves, not straight through them.
              </span>
            </figcaption>
          </figure>

          {/* Centre: motivation headline + bullets */}
          <div className="flex min-h-0 flex-col justify-center md:col-span-4">
            <p className="text-base font-bold leading-snug text-deck-text sm:text-lg">
              Cargo ships waste ~30% of fuel fighting waves. We built{' '}
              <span className="text-deck-accent">Google Maps for the ocean</span> to help them save fuel.
            </p>
            <ul className="mt-2.5 space-y-1.5">
              {[
                'Wave resistance wastes up to ~30% of a cargo ship’s fuel, about 1% of all global emissions.',
                'Forecasting waves lets ships steer smarter, cutting fuel use by ~20% (≈ $9B a year).',
                'Our network of autonomous sailboats maps ocean currents in real time, steering cargo ships clear of high-wave waters.',
              ].map(item => (
                <li className="flex gap-2 text-xs leading-snug text-deck-text sm:text-sm" key={item}>
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: concept (mesh diagram) → reality (real swarm photo) */}
          <div className="flex min-h-0 items-stretch gap-1.5 md:col-span-4">
            <figure className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-deck-border bg-white p-1">
              <img
                alt="Swarm mesh network diagram showing sailboats spaced 200 m apart"
                className="min-h-0 w-full flex-1 object-contain"
                src="/capstone/swarm-mesh-network.png"
              />
            </figure>
            <RightArrow />
            <figure className="min-h-0 flex-1 overflow-hidden rounded-xl border border-deck-border">
              <img
                alt="Fleet of autonomous sail drones on the water"
                className="h-full w-full object-cover object-center"
                src="/capstone/capstone-swarm.jpg"
              />
            </figure>
          </div>
        </div>

        {/* Divider */}
        <hr aria-hidden="true" className="shrink-0 border-0 border-t-2 border-deck-accent/70" />

        {/* ── Bottom band: ROS2 path planning ── */}
        <div className="flex min-h-0 flex-[6] flex-col gap-1">
          <SectionLabel>Creating the path-planning and control algorithms in ROS2</SectionLabel>

          <div className="grid min-h-0 flex-1 grid-cols-1 gap-2 md:grid-cols-12 md:gap-3 lg:gap-4">
            {/* Left: ROS2 node graph (crisp vector) + caption */}
            <figure className="flex min-h-0 flex-col rounded-xl border-2 border-deck-accent/30 bg-white p-2 md:col-span-7">
              <Ros2NodeGraph />
              <figcaption className="mt-1 text-center text-xs leading-snug text-deck-muted">
                The ROS2 node graph I built: waypoints and live sensor data flow through path planning out to the rudder
                and sail servos.
              </figcaption>
            </figure>

            {/* Right: sailing dynamics copy + headline result */}
            <div className="flex min-h-0 flex-col justify-between md:col-span-5">
              <div>
                <p className="text-sm leading-snug text-deck-text sm:text-base">
                  These boats run on <em>wind</em>, not a propeller — and you can&apos;t sail straight upwind, so my ROS2
                  planner has to <em>tack</em> (zig-zag) to reach any target:
                </p>
                <ul className="mt-1 space-y-0.5">
                  {[
                    'Beating upwind by tacking across the wind',
                    'Dynamic waypoint tracking',
                    'Real-time wind and heading adjustments',
                  ].map(item => (
                    <li className="flex gap-2 text-sm leading-snug text-deck-text" key={item}>
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Headline result */}
              <div className="mt-1.5 flex items-center gap-2.5 rounded-xl border border-deck-accent/40 bg-deck-accent-muted/40 p-2">
                <figure className="aspect-[3/4] w-24 shrink-0 overflow-hidden rounded-lg sm:w-28">
                  <img
                    alt="Kieran on the Berkeley Marina pier with an autonomous sail drone"
                    className="h-full w-full object-cover object-center"
                    src="/capstone/capstone-title.jpg"
                  />
                </figure>
                <div className="min-w-0 self-center">
                  <p className="text-sm font-bold leading-snug text-deck-text sm:text-base">
                    The result: my planner sailed the boat anywhere we pointed it.
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-deck-muted sm:text-sm">
                    Proven on a <strong className="text-deck-accent">2.3 km</strong> autonomous round trip up SF Bay,
                    both upwind and downwind. 50 built and tested.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  ),
);

interface GraphNodeProps {
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  color: string;
  title: string;
  subtitle: string;
  sub2?: string;
}

/** A single rounded node box with a coloured title and muted descriptor lines. */
const GraphNode: FC<GraphNodeProps> = ({x, y, w, h, fill, color, title, subtitle, sub2}) => {
  const cx = x + w / 2;
  const titleY = sub2 ? y + 22 : y + h / 2 - 2;
  return (
    <g>
      <rect fill={fill} height={h} rx={9} stroke={color} strokeWidth={1.75} width={w} x={x} y={y} />
      <text fill={color} fontSize={13.5} fontWeight={700} textAnchor="middle" x={cx} y={titleY}>
        {title}
      </text>
      <text fill="#64748b" fontSize={10.5} textAnchor="middle" x={cx} y={titleY + 16}>
        {subtitle}
      </text>
      {sub2 ? (
        <text fill="#64748b" fontSize={10.5} textAnchor="middle" x={cx} y={titleY + 31}>
          {sub2}
        </text>
      ) : null}
    </g>
  );
};

/**
 * Crisp vector recreation of the ROS2 node architecture: two inputs (ground-station
 * waypoints + live sensors) flow left-to-right through planning into the rudder and
 * sail servo controllers. Scales sharply at any size, unlike the source raster.
 */
const Ros2NodeGraph: FC = () => (
  <svg
    aria-label="ROS2 node graph: ground-station waypoints and sensor data flow through a waypoint queue and coordinate calculations out to the rudder and sail servo controllers"
    className="min-h-0 w-full flex-1"
    fill="none"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    viewBox="0 0 680 210"
    xmlns="http://www.w3.org/2000/svg">
    <defs>
      <marker
        id="ros2-arrow"
        markerHeight={7}
        markerWidth={7}
        orient="auto-start-reverse"
        refX={7}
        refY={5}
        viewBox="0 0 10 10">
        <path d="M0 0L10 5L0 10z" fill="#2563eb" />
      </marker>
      <marker
        id="ros2-arrow-violet"
        markerHeight={7}
        markerWidth={7}
        orient="auto-start-reverse"
        refX={7}
        refY={5}
        viewBox="0 0 10 10">
        <path d="M0 0L10 5L0 10z" fill="#7c3aed" />
      </marker>
    </defs>

    {/* Stage labels */}
    <text fill="#94a3b8" fontSize={9} fontWeight={700} letterSpacing={1} textAnchor="middle" x={80} y={11}>
      INPUTS
    </text>
    <text fill="#94a3b8" fontSize={9} fontWeight={700} letterSpacing={1} textAnchor="middle" x={300} y={11}>
      PLANNING
    </text>
    <text fill="#94a3b8" fontSize={9} fontWeight={700} letterSpacing={1} textAnchor="middle" x={550} y={11}>
      ACTUATION
    </text>

    {/* Flow arrows (drawn under the boxes) */}
    <g stroke="#2563eb" strokeWidth={2}>
      <line markerEnd="url(#ros2-arrow)" x1={150} x2={198} y1={49} y2={42} />
      <line markerEnd="url(#ros2-arrow)" x1={300} x2={300} y1={64} y2={94} />
      <line markerEnd="url(#ros2-arrow)" x1={400} x2={468} y1={118} y2={58} />
      <line markerEnd="url(#ros2-arrow)" x1={400} x2={468} y1={146} y2={164} />
    </g>
    <line markerEnd="url(#ros2-arrow-violet)" stroke="#7c3aed" strokeWidth={2} x1={150} x2={198} y1={162} y2={150} />

    {/* Nodes */}
    <GraphNode
      color="#64748b"
      fill="#f1f5f9"
      h={44}
      subtitle="waypoints"
      title="Ground Station"
      w={140}
      x={10}
      y={26}
    />
    <GraphNode
      color="#7c3aed"
      fill="#f5f3ff"
      h={48}
      subtitle="IMU · wind · GPS"
      title="Sensor Data"
      w={140}
      x={10}
      y={138}
    />
    <GraphNode
      color="#16a34a"
      fill="#f0fdf4"
      h={44}
      subtitle="queue + de-dupe"
      title="Waypoint Queue"
      w={200}
      x={200}
      y={20}
    />
    <GraphNode
      color="#d97706"
      fill="#fffbeb"
      h={72}
      sub2="Kalman-filtered sensors"
      subtitle="optimised path · tacking"
      title="Coordinate Calculations"
      w={200}
      x={200}
      y={96}
    />
    <GraphNode
      color="#2563eb"
      fill="#eff6ff"
      h={52}
      subtitle="LQI course control"
      title="Rudder Servo"
      w={160}
      x={470}
      y={30}
    />
    <GraphNode
      color="#ea580c"
      fill="#fff7ed"
      h={52}
      subtitle="LQI trim control"
      title="Sail Servo"
      w={160}
      x={470}
      y={136}
    />
  </svg>
);

const RightArrow: FC = () => (
  <svg
    aria-hidden="true"
    className="my-auto h-5 w-5 shrink-0 text-deck-accent"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 20 20">
    <path d="M2 10h14" strokeLinecap="round" />
    <path d="M11 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const UpArrow: FC = () => (
  <svg
    aria-hidden="true"
    className="mt-0.5 h-4 w-3 shrink-0 text-orange-500"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 12 16">
    <path d="M6 15V2" strokeLinecap="round" />
    <path d="M2 6l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

CaptainOverviewSlide.displayName = 'CaptainOverviewSlide';
export default CaptainOverviewSlide;
