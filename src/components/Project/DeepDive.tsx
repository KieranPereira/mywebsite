import {Disclosure} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {DeepDiveSection} from '../../data/dataDef';

/**
 * Collapsible accordion rendering the optional `deepDive` sections of a
 * project. Collapsed by default, behind a clear "Read the full breakdown"
 * toggle, with each section individually expandable. Built on headlessui's
 * Disclosure for accessibility.
 */
const DeepDive: FC<{sections: DeepDiveSection[]}> = memo(({sections}) => {
  if (sections.length === 0) return null;

  return (
    <Disclosure>
      {({open}) => (
        <div className="border-t border-neutral-800 pt-8">
          <Disclosure.Button className="flex w-full items-center justify-between gap-x-4 rounded-lg bg-neutral-800 px-5 py-4 text-left text-lg font-semibold text-white transition-colors hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500">
            <span>Read the full breakdown</span>
            <ChevronDownIcon className={classNames('h-6 w-6 transition-transform', {'rotate-180': open})} />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-4 flex flex-col gap-y-3">
            {sections.map(section => (
              <DeepDiveItem key={section.heading} section={section} />
            ))}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
});

const DeepDiveItem: FC<{section: DeepDiveSection}> = memo(({section}) => (
  <Disclosure>
    {({open}) => (
      <div className="overflow-hidden rounded-lg ring-1 ring-neutral-800">
        <Disclosure.Button className="flex w-full items-center justify-between gap-x-4 bg-neutral-900 px-5 py-3 text-left font-semibold text-neutral-100 transition-colors hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500">
          <span>{section.heading}</span>
          <ChevronDownIcon className={classNames('h-5 w-5 transition-transform', {'rotate-180': open})} />
        </Disclosure.Button>
        <Disclosure.Panel className="prose prose-invert max-w-none bg-neutral-900/60 px-5 py-4 text-neutral-300">
          {section.body}
        </Disclosure.Panel>
      </div>
    )}
  </Disclosure>
));

DeepDive.displayName = 'DeepDive';
DeepDiveItem.displayName = 'DeepDiveItem';
export default DeepDive;
