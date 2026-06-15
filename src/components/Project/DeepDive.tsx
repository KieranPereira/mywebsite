import {Disclosure} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {DeepDiveSection} from '../../data/dataDef';

const DeepDive: FC<{sections: DeepDiveSection[]}> = memo(({sections}) => {
  if (sections.length === 0) return null;

  return (
    <Disclosure>
      {({open}) => (
        <div className="border-t border-deck-border pt-8">
          <Disclosure.Button className="flex w-full items-center justify-between gap-x-4 rounded-lg border border-deck-border bg-deck-surface px-5 py-4 text-left text-lg font-semibold text-deck-text transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-deck-accent">
            <span>Read the full breakdown</span>
            <ChevronDownIcon className={classNames('h-6 w-6', {'rotate-180': open})} />
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
      <div className="overflow-hidden rounded-lg border border-deck-border">
        <Disclosure.Button className="flex w-full items-center justify-between gap-x-4 bg-white px-5 py-3 text-left font-semibold text-deck-text transition-colors hover:bg-deck-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-deck-accent">
          <span>{section.heading}</span>
          <ChevronDownIcon className={classNames('h-5 w-5', {'rotate-180': open})} />
        </Disclosure.Button>
        <Disclosure.Panel className="prose max-w-none px-5 py-4 text-deck-muted">{section.body}</Disclosure.Panel>
      </div>
    )}
  </Disclosure>
));

DeepDive.displayName = 'DeepDive';
DeepDiveItem.displayName = 'DeepDiveItem';
export default DeepDive;
