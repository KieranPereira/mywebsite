import classNames from 'classnames';
import {FC, memo} from 'react';

interface TagProps {
  label: string;
  className?: string;
}

/**
 * Small pill/chip used for tech tags and skills.
 */
const Tag: FC<TagProps> = memo(({label, className}) => (
  <span
    className={classNames(
      'inline-flex items-center rounded-full bg-neutral-700/80 px-3 py-1 text-xs font-medium text-neutral-100 ring-1 ring-inset ring-neutral-600',
      className,
    )}>
    {label}
  </span>
));

Tag.displayName = 'Tag';
export default Tag;
