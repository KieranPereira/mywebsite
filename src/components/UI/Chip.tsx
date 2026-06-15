import classNames from 'classnames';
import {FC, memo} from 'react';

interface ChipProps {
  label: string;
  className?: string;
  variant?: 'default' | 'outline' | 'solid';
}

const Chip: FC<ChipProps> = memo(({label, className, variant = 'default'}) => (
  <span
    className={classNames(
      'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
      variant === 'default' && 'bg-deck-surface text-deck-text ring-1 ring-inset ring-deck-border',
      variant === 'outline' && 'border border-deck-border text-deck-muted',
      variant === 'solid' &&
        'bg-deck-accent-muted font-semibold text-deck-accent ring-1 ring-inset ring-deck-accent/30',
      className,
    )}>
    {label}
  </span>
));

Chip.displayName = 'Chip';
export default Chip;
