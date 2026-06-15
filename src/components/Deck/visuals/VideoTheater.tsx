import {PlayCircleIcon} from '@heroicons/react/24/solid';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useEffect, useRef, useState} from 'react';

import {ProjectMedia} from '../../../data/dataDef';

interface VideoTheaterProps {
  media: ProjectMedia;
  alt: string;
  isActive?: boolean;
  compact?: boolean;
}

const getSrc = (src: ProjectMedia['src']) => (typeof src === 'string' ? src : src.src);
const getPoster = (poster?: ProjectMedia['poster']) =>
  poster ? (typeof poster === 'string' ? poster : poster.src) : undefined;

/**
 * Cinematic video frame — letterboxed object-contain, plays only when slide is active.
 */
const VideoTheater: FC<VideoTheaterProps> = memo(({media, alt, isActive = false, compact = false}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive && !reducedMotion) {
      void video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      video.pause();
      video.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isActive, reducedMotion]);

  const poster = getPoster(media.poster);

  return (
    <div
      className={classNames(
        'relative flex w-full flex-col overflow-hidden rounded-xl border border-neutral-800/10 bg-gradient-to-b from-neutral-900 to-neutral-800 shadow-inner',
        compact ? 'max-h-52' : 'min-h-[12rem] flex-1',
      )}>
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-red-400/80" />
        <span className="h-2 w-2 rounded-full bg-amber-400/80" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
        <span className="ml-2 text-[10px] font-medium uppercase tracking-wider text-white/50">
          {media.label ?? 'Demo reel'}
        </span>
      </div>

      <div className="relative flex flex-1 items-center justify-center p-3 sm:p-4">
        {poster && (
          <Image
            alt={alt}
            className="deck-video-poster-print absolute inset-0 m-auto hidden max-h-full max-w-full object-contain p-4"
            height={720}
            src={poster}
            width={1280}
          />
        )}
        <video
          aria-label={alt}
          className={classNames(
            'deck-video-print-hide max-h-full max-w-full object-contain',
            compact ? 'max-h-40' : 'max-h-[min(42vh,360px)]',
          )}
          loop
          muted
          onPlay={() => setIsPlaying(true)}
          playsInline
          poster={poster}
          preload="none"
          ref={videoRef}
          src={getSrc(media.src)}
        />
        {!isPlaying && (
          <div className="deck-video-print-hide pointer-events-none absolute inset-0 flex items-center justify-center">
            <PlayCircleIcon className="h-14 w-14 text-white/70 drop-shadow-lg" />
          </div>
        )}
      </div>
    </div>
  );
});

VideoTheater.displayName = 'VideoTheater';
export default VideoTheater;
