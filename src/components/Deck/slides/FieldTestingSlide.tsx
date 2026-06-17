import {FC, memo} from 'react';

import {Project} from '../../../data/dataDef';
import {DeckSlideMeta} from '../../../data/deck';
import SectionLabel from '../../UI/SectionLabel';
import Slide from '../Slide';

interface FieldTestingSlideProps {
  slide: DeckSlideMeta;
  project: Project;
  isActive: boolean;
  isLastSlide?: boolean;
  showScrollHint?: boolean;
}

/**
 * Bespoke "poster" layout for the Field Testing & Sensor Improvement slide.
 *
 * The generic ProjectSlide forces a rigid two-column split (text left, images
 * right). This slide instead interleaves each block of copy with the figure it
 * describes — the simulator, the field photo, and the two Kalman plots with
 * captions + arrows — mirroring the hand-built PowerPoint mockup.
 */
const FieldTestingSlide: FC<FieldTestingSlideProps> = memo(({slide, isLastSlide = false, showScrollHint = true}) => (
  <Slide id={slide.id} isLastSlide={isLastSlide} showScrollHint={showScrollHint} slideNumber={slide.number}>
    <div className="flex h-full min-h-0 flex-1 flex-col gap-3">
      {/* Title */}
      <header>
        <SectionLabel className="text-xs">Berkeley CAPTAIN · Field testing</SectionLabel>
        <h2 className="text-2xl font-bold leading-tight text-deck-text sm:text-3xl">
          Field Testing &amp; Sensor Improvement
        </h2>
      </header>

      {/* Poster body — stacks on mobile, 12-col / 2-row grid on desktop */}
      <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 md:grid-cols-12 md:grid-rows-2 lg:gap-4">
        {/* Top-left: boat simulator */}
        <figure className="flex min-h-0 flex-col rounded-xl border-2 border-deck-accent/30 bg-white p-2 md:col-span-4 md:row-start-1">
          <img
            alt="Boat simulation GUI showing commanded rudder and sail angles"
            className="min-h-0 w-full flex-1 object-contain"
            src="/capstone/simulation-gui.png"
          />
          <figcaption className="mt-1 text-center text-[11px] text-deck-muted">
            Replay-driven boat simulator — rudder &amp; sail
          </figcaption>
        </figure>

        {/* Top-center: virtual testing copy */}
        <div className="flex min-h-0 flex-col md:col-span-5 md:row-start-1">
          <SectionLabel className="text-xs">Virtual testing environment</SectionLabel>
          <p className="mt-1 text-xs leading-relaxed text-deck-text lg:text-sm">
            We were heavily dependent on tidal windows and the marina&apos;s opening hours. Field testing was the best
            way to learn how the boat really behaved, so I built a virtual testing environment that parsed our
            real-world measurements from historical runs and replayed how the boat would have reacted under new
            algorithm improvements — cutting the time to test and ship changes by weeks.
          </p>
          <p className="mt-2 text-xs leading-relaxed text-deck-text lg:text-sm">
            I paired it with <strong>hardware-in-the-loop testing</strong> — driving the real servos from the full ROS2
            stack with the remaining sensors simulated — to catch actuation bugs before any on-water run.
          </p>
        </div>

        {/* Top-right: field photo */}
        <figure className="min-h-0 overflow-hidden rounded-xl border border-deck-border md:col-span-3 md:row-start-1">
          <img
            alt="Field-testing setup with the autonomous boat at the Berkeley Marina"
            className="h-full w-full object-cover"
            src="/capstone/capstone-table.jpg"
          />
        </figure>

        {/* Bottom-left: Kalman copy */}
        <div className="flex min-h-0 flex-col md:col-span-4 md:row-start-2">
          <SectionLabel className="text-xs">1-D Kalman filtering</SectionLabel>
          <p className="mt-1 text-xs leading-relaxed text-deck-text lg:text-sm">
            IMU measurements were noisy after testing: the boat tips and rocks as it moves, and that motion bleeds into
            the path-planning algorithms, making the boat harder to navigate. So I implemented a 1-D Kalman filter to
            improve sensor confidence.
          </p>
        </div>

        {/* Bottom-right: the two captioned plots, grouped */}
        <div className="grid min-h-0 grid-cols-1 gap-3 rounded-xl border-2 border-deck-accent/30 bg-deck-surface p-3 sm:grid-cols-2 md:col-span-8 md:row-start-2">
          <figure className="flex min-h-0 flex-col">
            <figcaption className="text-[11px] font-medium leading-snug text-deck-text lg:text-xs">
              Real field data — the Kalman filter pulling wave noise out of a steady-state signal
            </figcaption>
            <DownArrow />
            <img
              alt="Steady-state IMU noise: raw signal versus low-pass + 1-D Kalman"
              className="min-h-0 w-full flex-1 object-contain"
              src="/capstone/kalman-noise-reduction.png"
            />
          </figure>
          <figure className="flex min-h-0 flex-col">
            <figcaption className="text-[11px] font-medium leading-snug text-deck-text lg:text-xs">
              How the Kalman filter responds to a sudden, spontaneous disturbance
            </figcaption>
            <DownArrow />
            <img
              alt="Kalman filter response to a spontaneous stimulus"
              className="min-h-0 w-full flex-1 object-contain"
              src="/capstone/kalman-stimulus-response.png"
            />
          </figure>
        </div>
      </div>
    </div>
  </Slide>
));

/** Small downward annotation arrow, echoing the mockup's caption-to-plot pointers. */
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

FieldTestingSlide.displayName = 'FieldTestingSlide';
export default FieldTestingSlide;
