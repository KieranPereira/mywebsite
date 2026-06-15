import Image from 'next/image';
import {FC, memo} from 'react';

import {deckData, profileImage} from '../../../data/data';
import {DeckSlideMeta} from '../../../data/deck';
import SectionLabel from '../../UI/SectionLabel';
import Slide from '../Slide';

interface AboutSlideProps {
  slide: DeckSlideMeta;
  showScrollHint?: boolean;
  isLastSlide?: boolean;
}

interface LogoCardProps {
  label: string;
  logos: {name: string; src: string}[];
  withNames?: boolean;
}

const LogoCard: FC<LogoCardProps> = ({label, logos, withNames}) => (
  <div className="flex flex-col rounded-2xl bg-deck-bg px-5 py-3 ring-1 ring-deck-border sm:py-4">
    <SectionLabel className="text-center">{label}</SectionLabel>
    <div className="mt-3 flex flex-1 flex-wrap items-center justify-center gap-x-8 gap-y-3">
      {logos.map(logo => (
        <div className="flex flex-col items-center gap-1.5" key={logo.name}>
          <div className="flex h-14 w-28 items-center justify-center sm:h-16 sm:w-32">
            <Image
              alt={logo.name}
              className="max-h-full w-auto object-contain"
              height={64}
              src={logo.src}
              unoptimized
              width={128}
            />
          </div>
          {withNames && <span className="text-xs font-medium text-deck-muted">{logo.name}</span>}
        </div>
      ))}
    </div>
  </div>
);

const AboutSlide: FC<AboutSlideProps> = memo(({slide, showScrollHint, isLastSlide}) => (
  <Slide
    id={slide.id}
    isLastSlide={isLastSlide}
    showScrollHint={showScrollHint}
    slideNumber={slide.number}
    variant="muted">
    <div className="flex h-full flex-1 flex-col justify-center gap-8">
      {/* Intro — portrait beside the "hello" headline, mirroring the about layout */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-[auto,1fr] sm:items-center sm:gap-8">
        <div className="relative mx-auto h-44 w-44 shrink-0 overflow-hidden rounded-2xl ring-1 ring-deck-border sm:mx-0 sm:h-52 sm:w-52">
          <Image alt="Kieran Pereira" className="object-cover" fill priority src={profileImage} />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-deck-text sm:text-4xl">
            <span className="text-deck-muted">First of all… </span>Hello!
          </h2>
          <div className="mt-3 max-w-2xl space-y-3 text-base leading-relaxed text-deck-text sm:text-lg">
            {deckData.aboutIntro.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Experience on one side, most relevant skills on the other — both as logos */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <LogoCard label="Experience" logos={deckData.experienceLogos} />
        <LogoCard label="Skills & tools" logos={deckData.skillLogos} withNames />
      </div>
    </div>
  </Slide>
));

AboutSlide.displayName = 'AboutSlide';
export default AboutSlide;
