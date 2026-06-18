import {FC, memo, ReactNode, useEffect, useRef} from 'react';

import {Project} from '../../../data/dataDef';
import {DeckSlideMeta} from '../../../data/deck';
import SectionLabel from '../../UI/SectionLabel';
import Slide from '../Slide';

interface BladeRunnerOverviewSlideProps {
  slide: DeckSlideMeta;
  project: Project;
  isActive: boolean;
  isLastSlide?: boolean;
  showScrollHint?: boolean;
}

/**
 * Bespoke "poster" layout for the BladeRunner quadruped locomotion slide.
 *
 * Top band: search-and-rescue motivation, biomimicry inspiration, and the
 * mechanical design story. Bottom band: Simscape simulation, DDPG reinforcement
 * learning, and headline results.
 */
const BladeRunnerOverviewSlide: FC<BladeRunnerOverviewSlideProps> = memo(
  ({slide, project, isActive, isLastSlide = false, showScrollHint = true}) => (
    <Slide id={slide.id} isLastSlide={isLastSlide} showScrollHint={showScrollHint} slideNumber={slide.number}>
      <div className="flex h-full min-h-0 flex-1 flex-col gap-2 lg:gap-3">
        {/* Title */}
        <header>
          <SectionLabel>
            Berkeley Robotics and Human Engineering Laboratory - Quadrupedal running robot
          </SectionLabel>
          <h2 className="text-3xl font-bold text-deck-text sm:text-4xl">{project.title}</h2>
          {project.subtitle ? (
            <p className="mt-1 text-sm text-deck-muted sm:text-base">{project.subtitle}</p>
          ) : null}
        </header>

        {/* ── Top band: motivation & biomimicry ── */}
        <div className="grid min-h-0 flex-[5] grid-cols-1 gap-2 md:grid-cols-12 md:gap-3 lg:gap-4">
          {/* Left: cheetah gait inspiration */}
          <figure className="flex min-h-0 flex-col rounded-xl border border-deck-border bg-white p-2 md:col-span-4">
            <img
              alt="Quadruped gait biomimicry: diagonal synchronization versus front-and-back leaping at higher speeds"
              className="min-h-0 w-full flex-1 object-contain"
              src="/bladerunner/bladerunner-biomimicry.jpg"
            />
            <figcaption className="mt-1 flex items-start gap-1.5">
              <UpArrow />
              <span className="text-xs leading-snug text-deck-muted sm:text-sm">
                At higher speeds, quadrupeds shift from diagonal sync to a front-and-back leaping gait, the motion we
                optimized for.
              </span>
            </figcaption>
          </figure>

          {/* Centre: what we built */}
          <div className="flex min-h-0 flex-col justify-center md:col-span-4">
            <p className="text-base font-bold leading-snug text-deck-text sm:text-lg">
              From blade physics to a trained running policy:
            </p>
            <ul className="mt-2.5 space-y-1.5">
              <Bullet>
                We analysed how <strong className="font-semibold text-deck-text">spring running blades</strong> store
                and return energy, the same prosthetic design used in{' '}
                <strong className="font-semibold text-deck-text">Paralympic sprinting</strong>.
              </Bullet>
              <Bullet>
                We modelled a quadruped in{' '}
                <strong className="font-semibold text-deck-text">MATLAB Simscape Multibody</strong> with J-shaped running
                blades on each leg, capturing compression, joint dynamics, and ground contact.
              </Bullet>
              <Bullet>
                We trained a <strong className="font-semibold text-deck-text">DDPG actor-critic agent</strong> to run as
                efficiently as possible on those blades, tuning the reward function to encourage{' '}
                <strong className="font-semibold text-deck-text">cheetah-like gait cycles</strong> from our biomechanics
                research.
              </Bullet>
            </ul>
          </div>

          {/* Right: Simscape model */}
          <figure className="flex min-h-0 flex-col overflow-hidden rounded-xl border border-deck-border bg-white p-2 md:col-span-4">
            <img
              alt="BladeRunner quadruped model in MATLAB Simscape Multibody"
              className="min-h-0 w-full flex-1 object-contain"
              src="/bladerunner/Simscape_Model.png"
            />
            <figcaption className="mt-1 text-xs leading-snug text-deck-muted sm:text-sm">
              The Simscape Multibody environment I used to train the RL policy, with spring-blade compression, joint
              dynamics, and ground contact fully modelled.
            </figcaption>
          </figure>
        </div>

        {/* Divider */}
        <hr aria-hidden="true" className="shrink-0 border-0 border-t-2 border-deck-accent/70" />

        {/* ── Bottom band: simulation & RL locomotion ── */}
        <div className="flex min-h-0 flex-[6] flex-col gap-1">
          <SectionLabel>Training locomotion with deep reinforcement learning (DDPG)</SectionLabel>

          <div className="grid min-h-0 flex-1 grid-cols-1 gap-2 md:grid-cols-12 md:gap-3 lg:gap-4">
            {/* Left: RL training montage */}
            <figure className="flex min-h-0 flex-col rounded-xl border-2 border-deck-accent/30 bg-white p-2 md:col-span-7">
              <MontageVideo
                alt="DDPG reinforcement learning training montage for BladeRunner locomotion"
                className="min-h-0 w-full flex-1 rounded object-contain"
                isActive={isActive}
                src="/bladerunner/rl-montage.mp4"
              />
              <figcaption className="mt-1 text-center text-xs leading-snug text-deck-muted">
                A DDPG actor-critic agent learns optimal joint torques through continuous interaction with the Simscape
                simulation, rather than following a predefined gait.
              </figcaption>
            </figure>

            {/* Right: engineering principles + headline result */}
            <div className="flex min-h-0 flex-col justify-between md:col-span-5">
              <div className="flex min-h-0 flex-col justify-center">
                <p className="text-sm font-bold leading-snug text-deck-accent sm:text-base">
                  Engineering principles: Not just setting velocity reward high!
                </p>
                <ul className="mt-2 space-y-1.5">
                  <PrincipleBullet title="Biomimicry for Stability">
                    Animals maintain stable body posture during running.
                  </PrincipleBullet>
                  <PrincipleBullet title="Efficient Torque Management">
                    Penalized abrupt joint direction changes to enhance{' '}
                    <strong className="font-semibold text-deck-text">torque efficiency</strong>.
                  </PrincipleBullet>
                  <PrincipleBullet title="Dynamic Ground Contact Control">
                    Minimized ground contact time by penalizing prolonged contact.
                  </PrincipleBullet>
                  <PrincipleBullet title="Animal Gait Synchronization">
                    Constrained front and back legs to move in phase.
                  </PrincipleBullet>
                </ul>
              </div>

              {/* Headline result */}
              <div className="mt-1.5 rounded-xl border border-deck-accent/40 bg-deck-accent-muted/40 p-2.5">
                <p className="text-sm font-bold leading-snug text-deck-text sm:text-base">
                  The result: a gait <strong className="text-deck-accent">23% faster</strong> than Boston
                  Dynamics&apos; Spot.
                </p>
                <p className="mt-0.5 text-xs leading-snug text-deck-muted sm:text-sm">
                  Covered <strong className="font-semibold text-deck-text">23 m in 10 s</strong> in simulation with
                  strong stability and energy efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  ),
);

const PrincipleBullet: FC<{title: string; children: ReactNode}> = ({title, children}) => (
  <li className="flex gap-2 text-xs leading-snug text-deck-text lg:text-sm">
    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />
    <span>
      <strong className="font-semibold text-deck-accent">{title}:</strong> {children}
    </span>
  </li>
);

const Bullet: FC<{children: ReactNode}> = ({children}) => (
  <li className="flex gap-2 text-xs leading-snug text-deck-text sm:text-sm">
    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-deck-accent" />
    <span>{children}</span>
  </li>
);

interface MontageVideoProps {
  alt: string;
  src: string;
  isActive: boolean;
  className?: string;
}

/** Full-width montage clip that auto-plays when the slide is in view. */
const MontageVideo: FC<MontageVideoProps> = ({alt, src, isActive, className}) => {
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
    <video
      aria-label={alt}
      className={className}
      loop
      muted
      playsInline
      preload="metadata"
      ref={videoRef}
      src={src}
    />
  );
};

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

BladeRunnerOverviewSlide.displayName = 'BladeRunnerOverviewSlide';
export default BladeRunnerOverviewSlide;
