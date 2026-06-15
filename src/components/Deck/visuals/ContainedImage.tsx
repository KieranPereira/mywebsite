import classNames from 'classnames';
import {FC, memo, useCallback, useState} from 'react';

import {ProjectMedia} from '../../../data/dataDef';

interface ContainedImageProps {
  media: ProjectMedia;
  alt: string;
  priority?: boolean;
  className?: string;
  maxHeightClass?: string;
}

type AspectClass = 'landscape-wide' | 'landscape' | 'square' | 'portrait' | 'portrait-tall';

const getAspectClass = (ratio: number): AspectClass => {
  if (ratio >= 1.6) return 'landscape-wide';
  if (ratio >= 1.15) return 'landscape';
  if (ratio >= 0.85) return 'square';
  if (ratio >= 0.55) return 'portrait';
  return 'portrait-tall';
};

/**
 * Renders an image at its natural aspect ratio — object-contain, never cropped.
 */
const ContainedImage: FC<ContainedImageProps> = memo(
  ({media, alt, priority, className, maxHeightClass = 'max-h-56'}) => {
    const [aspectClass, setAspectClass] = useState<AspectClass>('landscape');

    const handleLoad = useCallback((event: React.SyntheticEvent<HTMLImageElement>) => {
      const img = event.currentTarget;
      if (img.naturalWidth && img.naturalHeight) {
        setAspectClass(getAspectClass(img.naturalWidth / img.naturalHeight));
      }
    }, []);

    return (
      <div
        className={classNames(
          'flex w-full items-center justify-center rounded-lg bg-neutral-100/80 p-2',
          aspectClass === 'landscape-wide' && 'min-h-[8rem]',
          aspectClass === 'portrait-tall' && 'max-w-[55%] justify-self-center',
          className,
        )}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={alt}
          className={classNames('h-auto w-auto max-w-full object-contain', maxHeightClass)}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          src={typeof media.src === 'string' ? media.src : media.src.src}
        />
      </div>
    );
  },
);

ContainedImage.displayName = 'ContainedImage';
export default ContainedImage;
export type {AspectClass};
