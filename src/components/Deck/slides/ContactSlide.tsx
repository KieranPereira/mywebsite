import {ArrowDownTrayIcon, EnvelopeIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, memo} from 'react';

import {contact, deckData, profileImage, socialLinks} from '../../../data/data';
import {DeckSlideMeta} from '../../../data/deck';
import Button from '../../UI/Button';
import Slide from '../Slide';

interface ContactSlideProps {
  slide: DeckSlideMeta;
  showDownloadPdf?: boolean;
  isLastSlide?: boolean;
}

const linkedIn = contact.items.find(item => item.type === 'LinkedIn');
const primaryEmail = contact.items.find(item => item.href?.startsWith('mailto:kieranpereira'));
const universityEmail = contact.items.find(item => item.href?.startsWith('mailto:kieran_p'));
const github = contact.items.find(item => item.type === 'Github');

const ContactSlide: FC<ContactSlideProps> = memo(({slide, showDownloadPdf = true, isLastSlide = true}) => (
  <Slide hideFooter id={slide.id} isLastSlide={isLastSlide} showScrollHint={false} slideNumber={slide.number}>
    <div className="flex h-full flex-1 flex-col items-center justify-center gap-8 text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-deck-border">
        <Image alt="Kieran Pereira" className="object-cover" fill src={profileImage} />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-deck-text">Get in touch</h2>
        <p className="mt-2 text-deck-muted">{deckData.contactTagline}</p>
      </div>

      <div className="flex flex-col items-center gap-3 text-sm sm:text-base">
        {primaryEmail?.href && (
          <a className="inline-flex items-center gap-2 text-deck-text hover:text-deck-accent" href={primaryEmail.href}>
            <EnvelopeIcon className="h-5 w-5" />
            {primaryEmail.text.replace(/^Personal: /, '')}
          </a>
        )}
        {universityEmail?.href && (
          <a className="text-deck-muted hover:text-deck-accent" href={universityEmail.href}>
            {universityEmail.text.replace(/^University: /, '')}
          </a>
        )}
        {linkedIn?.href && (
          <a
            className="text-deck-accent hover:underline"
            href={linkedIn.href}
            rel="noopener noreferrer"
            target="_blank">
            {linkedIn.text}
          </a>
        )}
        {github?.href && (
          <a className="text-deck-accent hover:underline" href={github.href} rel="noopener noreferrer" target="_blank">
            {github.text}
          </a>
        )}
      </div>

      {linkedIn?.href && (
        <div className="deck-no-print">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="QR code linking to LinkedIn profile"
            className="h-28 w-28 rounded-lg border border-deck-border"
            height={112}
            src={`https://api.qrserver.com/v1/create-qr-code/?size=112x112&data=${encodeURIComponent(linkedIn.href)}`}
            width={112}
          />
        </div>
      )}

      {showDownloadPdf && (
        <Button Icon={ArrowDownTrayIcon} className="deck-no-print" href="/deck/print" variant="secondary">
          Download PDF
        </Button>
      )}

      <div className="flex gap-4">
        {socialLinks.map(({label, Icon, href}) => (
          <a
            aria-label={label}
            className="text-deck-muted transition-colors hover:text-deck-accent"
            href={href}
            key={label}
            rel="noopener noreferrer"
            target="_blank">
            <Icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  </Slide>
));

ContactSlide.displayName = 'ContactSlide';
export default ContactSlide;
