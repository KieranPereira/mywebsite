import classNames from 'classnames';
import {FC, memo} from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

/**
 * Consistent section heading with the orange underline accent.
 */
const SectionHeading: FC<SectionHeadingProps> = memo(({title, subtitle, light = false, className}) => (
  <div className={classNames('flex flex-col gap-y-2', className)}>
    <div className="relative w-max">
      <h2 className={classNames('text-2xl font-bold sm:text-3xl', light ? 'text-white' : 'text-neutral-800')}>
        {title}
      </h2>
      <span className="absolute inset-x-0 -bottom-1 border-b-2 border-accent-500" />
    </div>
    {subtitle && (
      <p className={classNames('text-sm sm:text-base', light ? 'text-neutral-300' : 'text-neutral-600')}>{subtitle}</p>
    )}
  </div>
));

SectionHeading.displayName = 'SectionHeading';
export default SectionHeading;
