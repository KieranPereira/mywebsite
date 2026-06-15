import {ArrowLeftIcon, PrinterIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {FC, memo, useCallback} from 'react';

import Deck from '../../components/Deck/Deck';
import DeckLayout from '../../components/Layout/DeckLayout';

const PrintDeckPage: FC = memo(() => {
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <DeckLayout>
      <div className="deck-no-print fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-deck-border bg-white/95 px-4 py-3 backdrop-blur sm:px-6">
        <Link
          className="inline-flex items-center gap-2 text-sm font-medium text-deck-muted hover:text-deck-accent"
          href="/">
          <ArrowLeftIcon className="h-4 w-4" />
          Back to deck
        </Link>
        <button
          className="inline-flex items-center gap-2 rounded-md bg-deck-accent px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-deck-accent"
          onClick={handlePrint}
          type="button">
          <PrinterIcon className="h-4 w-4" />
          Save as PDF
        </button>
      </div>
      <div className="deck-no-print h-14" />
      <Deck showChrome={false} showDownloadPdf={false} />
    </DeckLayout>
  );
});

PrintDeckPage.displayName = 'PrintDeckPage';
export default PrintDeckPage;
