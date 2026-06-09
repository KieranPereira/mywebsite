import Image from 'next/image';
import {FC, memo, useEffect, useRef} from 'react';

import {ProjectMedia} from '../../data/dataDef';

interface ProjectMediaViewProps {
  media: ProjectMedia;
  alt: string;
  priority?: boolean;
  className?: string;
}

/**
 * Renders a project's hero media.
 *
 * - Images use next/image (lazy by default unless `priority`).
 * - Videos are muted/looping, use a poster, `preload="none"`, and only start
 *   playing once scrolled into view (and pause when out of view). This keeps a
 *   giant autoplaying video from becoming the Largest Contentful Paint.
 */
const ProjectMediaView: FC<ProjectMediaViewProps> = memo(({media, alt, priority = false, className}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            void video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        });
      },
      {threshold: 0.25},
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

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

  const poster = typeof media.poster === 'string' ? media.poster : media.poster?.src;
  const src = typeof media.src === 'string' ? media.src : media.src.src;

  return (
    <video
      aria-label={alt}
      className={className}
      loop
      muted
      playsInline
      poster={poster}
      preload="none"
      ref={videoRef}
      src={src}
    />
  );
});

ProjectMediaView.displayName = 'ProjectMediaView';
export default ProjectMediaView;
