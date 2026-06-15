import classNames from 'classnames';
import {FC, memo} from 'react';

interface SectionLabelProps {
  children: string;
  className?: string;
}

const SectionLabel: FC<SectionLabelProps> = memo(({children, className}) => (
  <span className={classNames('text-sm font-bold uppercase tracking-wide text-deck-accent', className)}>
    {children}
  </span>
));

SectionLabel.displayName = 'SectionLabel';
export default SectionLabel;
