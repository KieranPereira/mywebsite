import Image from 'next/image';
import {FC, memo, useEffect, useRef, useState} from 'react';

import {ProjectMedia} from '../../data/dataDef';

interface SlideVisualMediaProps {
  media: ProjectMedia;
  alt: string;
  isActive?: boolean;
  className?: string;
  priority?: boolean;
}

const getSrc = (src: ProjectMedia['src']) => (typeof src === 'string' ? src : src.src);
const getPoster = (poster?: ProjectMedia['poster']) =>
  poster ? (typeof poster === 'string' ? poster : poster.src) : undefined;

/**
 * Visual block media for project slides. Autoplays only when the slide is active;
 * shows poster in print.
 */
const SlideVisualMedia: FC<SlideVisualMediaProps> = memo(({media, alt, isActive = false, className, priority}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || media.type !== 'video') return;

    if (isActive && !reducedMotion) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive, media.type, reducedMotion]);

  if (media.type === 'image') {
    return (
      <Image
        alt={alt}
        className={className}
        height={720}
        loading={priority ? undefined : 'lazy'}
        priority={priority}
        src={media.src}
        width={1280}
      />
    );
  }

  const poster = getPoster(media.poster);

  return (
    <div className="relative h-full w-full">
      {poster && (
        <Image
          alt={alt}
          className={`deck-video-poster-print hidden h-full w-full object-cover ${className ?? ''}`}
          height={720}
          src={poster}
          width={1280}
        />
      )}
      <video
        aria-label={alt}
        className={`deck-video-print-hide h-full w-full object-cover ${className ?? ''}`}
        loop
        muted
        playsInline
        poster={poster}
        preload="none"
        ref={videoRef}
        src={getSrc(media.src)}
      />
    </div>
  );
});

SlideVisualMedia.displayName = 'SlideVisualMedia';
export default SlideVisualMedia;
