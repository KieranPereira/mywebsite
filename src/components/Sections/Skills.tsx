import {FC, memo} from 'react';

import {SectionId, skills} from '../../data/data';
import Section from '../Layout/Section';
import SectionHeading from '../UI/SectionHeading';
import {SkillGroup} from './Resume/Skills';

/**
 * Skills: grouped tag/chips by category (no numeric levels).
 */
const Skills: FC = memo(() => (
  <Section className="bg-neutral-200" sectionId={SectionId.Skills}>
    <div className="flex flex-col gap-y-10">
      <SectionHeading subtitle="Tools and technologies I work with." title="Skills" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {skills.map((skillgroup, index) => (
          <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
        ))}
      </div>
    </div>
  </Section>
));

Skills.displayName = 'Skills';
export default Skills;
