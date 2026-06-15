import {DocumentTextIcon} from '@heroicons/react/24/outline';
import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/solid';
import Image from 'next/image';
import {FC, memo} from 'react';

import {ProjectMedia} from '../../../data/dataDef';
import Button from '../../UI/Button';

interface DocumentFrameProps {
  media: ProjectMedia;
  compact?: boolean;
}

const getSrc = (src: ProjectMedia['src']) => (typeof src === 'string' ? src : src.src);
const getPoster = (poster?: ProjectMedia['poster']) =>
  poster ? (typeof poster === 'string' ? poster : poster.src) : undefined;

/**
 * Presentation / PDF frame — distinct from video or photo layouts.
 */
const DocumentFrame: FC<DocumentFrameProps> = memo(({media, compact = false}) => {
  const src = getSrc(media.src);
  const poster = getPoster(media.poster);
  const label = media.label ?? 'Document';

  return (
    <div
      className={`flex w-full flex-col overflow-hidden rounded-xl border-2 border-deck-accent/20 bg-white shadow-lg ${
        compact ? '' : 'flex-1'
      }`}>
      {/* Presentation chrome */}
      <div className="flex items-center justify-between gap-2 border-b border-deck-border bg-deck-accent-muted px-3 py-2">
        <div className="flex items-center gap-2">
          <DocumentTextIcon className="h-4 w-4 text-deck-accent" />
          <span className="text-xs font-bold uppercase tracking-wide text-deck-accent">{label}</span>
        </div>
        <span className="rounded bg-white px-2 py-0.5 text-[10px] font-medium text-deck-muted">PDF</span>
      </div>

      {/* Static thumbnail — a poster image loads instantly and looks intentional,
          unlike an embedded PDF iframe which renders as a blank box. */}
      <a
        className={`relative block bg-neutral-50 transition-opacity hover:opacity-90 ${
          compact ? 'h-40' : 'min-h-[10rem] flex-1'
        }`}
        href={src}
        rel="noopener noreferrer"
        target="_blank">
        {poster ? (
          <Image
            alt={`${label} preview`}
            className="h-full w-full object-contain p-2"
            height={720}
            src={poster}
            width={1280}
          />
        ) : (
          <div className="flex h-full items-center justify-center p-6 text-center text-sm text-deck-muted">{label}</div>
        )}
      </a>

      <div className="deck-no-print border-t border-deck-border px-3 py-2">
        <Button Icon={ArrowTopRightOnSquareIcon} external href={src} variant="ghost">
          Open {label.toLowerCase()}
        </Button>
      </div>
    </div>
  );
});

DocumentFrame.displayName = 'DocumentFrame';
export default DocumentFrame;
