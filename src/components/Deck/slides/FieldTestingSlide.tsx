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
        <SectionLabel className="text-xs">CaptAIn · Field testing</SectionLabel>
        <h2 className="text-2xl font-bold leading-tight text-deck-text sm:text-3xl">
          Field testing and cleaner sensor data
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
            The replay simulator, showing rudder and sail commands
          </figcaption>
        </figure>

        {/* Top-center: virtual testing copy */}
        <div className="flex min-h-0 flex-col md:col-span-5 md:row-start-1">
          <p className="text-sm font-bold leading-snug text-deck-accent">
            Testing on the water was slow and expensive.
          </p>
          <ul className="mt-2 space-y-1.5">
            <li className="flex gap-2 text-xs leading-snug text-deck-text lg:text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />
              <span>
                Every test depended on the <strong>tide</strong> and on the marina being open.
              </span>
            </li>
            <li className="flex gap-2 text-xs leading-snug text-deck-text lg:text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />
              <span>
                <strong>Sea trials</strong> told us the most about how the boat behaved, but we needed a{' '}
                <strong>faster way to try new features</strong>.
              </span>
            </li>
            <li className="flex gap-2 text-xs leading-snug text-deck-text lg:text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />
              <span>
                So I built a <strong>simulator</strong> that replays logged sensor data from earlier sea trials through
                new versions of the controller.
              </span>
            </li>
            <li className="flex gap-2 text-xs leading-snug text-deck-text lg:text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />
              <span>
                We could then run <strong>hardware-in-the-loop tests</strong> in the lab and catch actuation bugs
                before going out on the water.
              </span>
            </li>
            <li className="flex gap-2 text-xs leading-snug text-deck-text lg:text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />
              <span>
                Iteration time dropped from <strong className="text-deck-accent">days to hours</strong>.
              </span>
            </li>
          </ul>
        </div>

        {/* Top-right: field photo */}
        <figure className="min-h-0 overflow-hidden rounded-xl border border-deck-border md:col-span-3 md:row-start-1">
          <img
            alt="Field-testing setup with the autonomous boat at the Berkeley Marina"
            className="h-full w-full object-cover"
            src="/capstone/capstone-table.jpg"
          />
        </figure>

        {/* Bottom-left: Kalman copy — vertically centred against the plot panel */}
        <div className="flex min-h-0 flex-col justify-center md:col-span-4 md:row-start-2">
          <p className="text-sm font-bold leading-snug text-deck-accent">
            Our sensor data was too noisy to steer the boat with.
          </p>
          <ul className="mt-2 space-y-1.5">
            <li className="flex gap-2 text-xs leading-snug text-deck-text lg:text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />
              <span>
                Cheap IMUs on a boat rocking in every wave gave us motion data we couldn&apos;t trust.
              </span>
            </li>
            <li className="flex gap-2 text-xs leading-snug text-deck-text lg:text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />
              <span>
                I wrote a <strong>1-D Kalman filter</strong> to combine the readings and smooth out the noise.
              </span>
            </li>
            <li className="flex gap-2 text-xs leading-snug text-deck-text lg:text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />
              <span>
                In field tests, steady-state sensor noise (RMS) dropped by{' '}
                <strong className="text-deck-accent">85%</strong>.
              </span>
            </li>
          </ul>
        </div>

        {/* Bottom-right: the two captioned plots, grouped */}
        <div className="grid min-h-0 grid-cols-1 gap-3 rounded-xl border-2 border-deck-accent/30 bg-deck-surface p-3 sm:grid-cols-2 md:col-span-8 md:row-start-2">
          <figure className="flex min-h-0 flex-col">
            <figcaption className="text-[11px] font-medium leading-snug text-deck-text lg:text-xs">
              Field data: the filter removing wave noise from a steady signal
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
              The filter&apos;s response to a sudden disturbance
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
