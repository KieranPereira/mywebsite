import classNames from 'classnames';
import {FC, memo} from 'react';

import {HeroStat} from '../../data/dataDef';

interface StatBadgeProps {
  stat: HeroStat;
  size?: 'sm' | 'lg';
  className?: string;
}

/**
 * The big bold "hero stat" — a quantified headline (value + label).
 * `sm` is used as a badge on cards; `lg` is the headline on project pages.
 */
const StatBadge: FC<StatBadgeProps> = memo(({stat, size = 'lg', className}) => {
  const {value, label} = stat;
  return (
    <div className={classNames('flex flex-col', className)}>
      <span
        className={classNames('font-bold leading-none text-accent-500', {
          'text-2xl sm:text-3xl': size === 'sm',
          'text-4xl sm:text-5xl': size === 'lg',
        })}>
        {value}
      </span>
      <span
        className={classNames('text-neutral-300', {
          'text-xs': size === 'sm',
          'mt-1 text-sm sm:text-base': size === 'lg',
        })}>
        {label}
      </span>
    </div>
  );
});

StatBadge.displayName = 'StatBadge';
export default StatBadge;
