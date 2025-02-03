import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';

const Section: FC<
  PropsWithChildren<{ sectionId: string; sectionTitle?: string; noPadding?: boolean; className?: string }>
> = memo(({children, sectionId, sectionTitle, noPadding = false, className}) => {
  return (
    <section className={classNames(className, {'px-4 py-16 md:py-24 lg:px-8': !noPadding})} id={sectionId}>
      <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>
        {sectionTitle && <h2 className="text-3xl font-bold text-center mb-6">{sectionTitle}</h2>}
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';
export default Section;
