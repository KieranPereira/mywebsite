import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

interface ScrollHintProps {
  visible: boolean;
  prominent?: boolean;
  label?: string;
}

const ScrollHint: FC<ScrollHintProps> = memo(({visible, prominent = false, label = 'Scroll for next slide'}) => {
  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={classNames(
        'deck-no-print pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1',
        prominent ? 'bottom-10' : 'bottom-5',
      )}>
      <div
        className={classNames(
          'flex items-center gap-2 rounded-full border border-deck-border bg-white/95 px-4 py-2 shadow-md backdrop-blur',
          prominent && 'border-deck-accent/30 shadow-lg',
        )}>
        <span className={classNames('text-xs font-medium', prominent ? 'text-deck-accent' : 'text-deck-muted')}>
          {label}
        </span>
        <ChevronDownIcon
          className={classNames('h-4 w-4 text-deck-accent', prominent ? 'animate-bounce' : 'motion-safe:animate-pulse')}
        />
      </div>
      {prominent && (
        <span className="text-[10px] font-medium uppercase tracking-widest text-deck-muted/80">↓ or press Space</span>
      )}
    </div>
  );
});

ScrollHint.displayName = 'ScrollHint';
export default ScrollHint;
