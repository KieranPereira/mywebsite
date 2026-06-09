import {EnvelopeIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import GithubIcon from '../../Icon/GithubIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import Section from '../../Layout/Section';
import SectionHeading from '../../UI/SectionHeading';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Contact}>
      <div className="flex flex-col gap-y-6">
        <SectionHeading light subtitle={description} title={headerText ?? 'Get in touch.'} />
        <dl className="flex flex-col gap-y-3">
          {items.map(({type, text, href}) => {
            const {Icon, srLabel} = ContactValueMap[type];
            return (
              <div key={`${srLabel}-${text}`}>
                <dt className="sr-only">{srLabel}</dt>
                <dd>
                  <a
                    className={classNames(
                      '-m-2 flex items-center rounded-md p-2 text-neutral-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500',
                      href ? 'hover:text-accent-500' : '',
                    )}
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank">
                    <Icon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-neutral-100" />
                    <span className="ml-3 text-sm sm:text-base">{text}</span>
                  </a>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
