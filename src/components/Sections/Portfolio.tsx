import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { FC, memo } from 'react';

import { portfolioItems, SectionId } from '../../data/data';
import { PortfolioItem } from '../../data/dataDef';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">
          Check out some of my work
        </h2>
        {/* Flex layout for portfolio items with variable widths */}
        <div className="flex flex-wrap gap-6 justify-center">
          {portfolioItems.map((item) => {
            const { title, image, video, url } = item;
            const pageUrl = url;
            return (
              <Link href={pageUrl} key={pageUrl}>
                <div className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl h-64">
                  {video ? (
                    <video
                      src={video}
                      className="h-full w-auto object-contain"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : image ? (
                    <Image
                      alt={title}
                      className="h-full w-auto object-contain"
                      placeholder="blur"
                      src={image}
                    />
                  ) : null}
                  <ItemOverlay item={item} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{ item: PortfolioItem }> = memo(
  ({ item: { title, description } }) => {
    return (
      <div className="absolute inset-0 flex flex-col justify-center bg-gray-900 bg-opacity-80 opacity-0 transition-all duration-300 hover:opacity-100 p-4">
        <h2 className="text-center font-bold text-white">{title}</h2>
        <p className="text-xs text-white sm:text-sm">{description}</p>
        <ArrowTopRightOnSquareIcon className="absolute bottom-2 right-2 h-4 w-4 shrink-0 text-white" />
      </div>
    );
  }
);
