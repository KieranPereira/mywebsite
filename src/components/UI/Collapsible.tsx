import {Disclosure} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';

interface CollapsibleProps {
  showLabel?: string;
  hideLabel?: string;
  className?: string;
}

/**
 * Lightweight accessible show/hide wrapper built on headlessui Disclosure.
 * Used to keep timeline (work/education) detail collapsed by default.
 */
const Collapsible: FC<PropsWithChildren<CollapsibleProps>> = memo(
  ({children, showLabel = 'View details', hideLabel = 'Hide details', className}) => (
    <Disclosure>
      {({open}) => (
        <div className={className}>
          <Disclosure.Button className="inline-flex items-center gap-x-1 text-sm font-semibold text-orange-600 transition-colors hover:text-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
            {open ? hideLabel : showLabel}
            <ChevronDownIcon className={classNames('h-4 w-4 transition-transform', {'rotate-180': open})} />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2">{children}</Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  ),
);

Collapsible.displayName = 'Collapsible';
export default Collapsible;
