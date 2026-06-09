import {FC, memo} from 'react';

import {SkillGroup as SkillGroupType} from '../../../data/dataDef';

/**
 * A skill group rendered as a labelled set of tag/chips (no numeric levels).
 */
export const SkillGroup: FC<{skillGroup: SkillGroupType}> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-lg font-bold text-neutral-800">{name}</span>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span
            className="inline-flex items-center rounded-full bg-neutral-200 px-3 py-1 text-sm font-medium text-neutral-800 ring-1 ring-inset ring-neutral-300"
            key={skill.name}>
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';
