import Link from 'next/link';
import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
// import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

// import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        {/* Grid layout for portfolio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => {
            const {title, image, slug} = item;

            // Redirect Project 1 (Capstone) to custom page
            const pageUrl = slug === 'project1' ? `/portfolio/capstone` : `/portfolio/${slug}`;

            return (
              <Link href={pageUrl} key={slug}>
                <div className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl">
                  <Image alt={title} className="h-full w-full object-cover" placeholder="blur" src={image} />
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

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {title, description}}) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center bg-gray-900 bg-opacity-80 opacity-0 transition-all duration-300 hover:opacity-100 p-4">
      <h2 className="text-center font-bold text-white">{title}</h2>
      <p className="text-xs text-white sm:text-sm">{description}</p>
      <ArrowTopRightOnSquareIcon className="absolute bottom-2 right-2 h-4 w-4 shrink-0 text-white" />
    </div>
  );
});
