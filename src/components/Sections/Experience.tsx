import {FC, memo} from 'react';

import {education, experience, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import SectionHeading from '../UI/SectionHeading';
import ResumeSection from './Resume/ResumeSection';
import TimelineItem from './Resume/TimelineItem';

/**
 * Experience: work + education timelines. Each entry shows caption + TLDR with
 * the full bullet list collapsed by default.
 */
const Experience: FC = memo(() => (
  <Section className="bg-neutral-100" sectionId={SectionId.Experience}>
    <div className="flex flex-col gap-y-10">
      <SectionHeading subtitle="Where I've worked and studied." title="Experience" />
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Work">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
      </div>
    </div>
  </Section>
));

Experience.displayName = 'Experience';
export default Experience;
