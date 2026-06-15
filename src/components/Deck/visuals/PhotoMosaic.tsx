import classNames from 'classnames';
import {FC, memo} from 'react';

import {ProjectMedia} from '../../../data/dataDef';
import ContainedImage from './ContainedImage';

interface PhotoMosaicProps {
  images: ProjectMedia[];
  title: string;
  compact?: boolean;
}

/**
 * Photo gallery — layout adapts to image count; every image is object-contain (no crop).
 */
const PhotoMosaic: FC<PhotoMosaicProps> = memo(({images, title, compact = false}) => {
  if (images.length === 0) return null;

  const maxH = compact ? 'max-h-32' : 'max-h-44';

  if (images.length === 1) {
    return (
      <ContainedImage
        alt={`${title} photo`}
        className="flex-1"
        maxHeightClass={compact ? 'max-h-36' : 'max-h-[min(38vh,320px)]'}
        media={images[0]}
      />
    );
  }

  if (images.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-2">
        {images.map((img, i) => (
          <ContainedImage alt={`${title} photo ${i + 1}`} key={i} maxHeightClass={maxH} media={img} />
        ))}
      </div>
    );
  }

  // 3+ images: bento — first image spans full width, rest in a row
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="col-span-2">
        <ContainedImage alt={`${title} photo 1`} maxHeightClass={maxH} media={images[0]} />
      </div>
      {images.slice(1).map((img, i) => (
        <ContainedImage
          alt={`${title} photo ${i + 2}`}
          className={classNames(i === images.length - 2 && images.length % 2 === 0 && 'col-span-1')}
          key={i}
          maxHeightClass={compact ? 'max-h-28' : 'max-h-36'}
          media={img}
        />
      ))}
    </div>
  );
});

PhotoMosaic.displayName = 'PhotoMosaic';
export default PhotoMosaic;
