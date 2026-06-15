import classNames from 'classnames';
import {FC, memo} from 'react';

import {HeroStat} from '../../data/dataDef';

interface StatLineProps {
  stat: HeroStat;
  achievement?: string;
  className?: string;
}

/**
 * Bold colored achievement line anchored at the bottom of project slides.
 * `stat.label` should read as a natural continuation of `stat.value`,
 * e.g. "23% faster" + "than Boston Dynamics' Spot".
 */
const StatLine: FC<StatLineProps> = memo(({stat, achievement, className}) => {
  const text = achievement ?? `${stat.value} ${stat.label}`;

  return <p className={classNames('text-base font-bold text-deck-accent sm:text-lg md:text-xl', className)}>{text}</p>;
});

StatLine.displayName = 'StatLine';
export default StatLine;
