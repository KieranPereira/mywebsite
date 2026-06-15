import {FC, memo} from 'react';

import {contact} from '../../data/data';

interface DeckFooterProps {
  slideNumber: number;
  totalSlides: number;
}

const primaryEmail = contact.items.find(item => item.type === 'Email')?.text ?? 'kieranpereira@hotmail.com';

const DeckFooter: FC<DeckFooterProps> = memo(({slideNumber, totalSlides}) => (
  <footer className="mt-auto flex shrink-0 items-center justify-between border-t border-deck-border pt-3 text-xs text-deck-muted">
    <span>
      Kieran Pereira <span className="mx-1.5 text-deck-border">•</span> {primaryEmail.replace(/^Personal: /, '')}
    </span>
    <span>
      {slideNumber} / {totalSlides}
    </span>
  </footer>
));

DeckFooter.displayName = 'DeckFooter';
export default DeckFooter;
