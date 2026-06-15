import {Dialog, Transition} from '@headlessui/react';
import {Bars3Icon, ChevronDownIcon, XMarkIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, Fragment, memo, useState} from 'react';

import {DeckSlideMeta} from '../../data/deck';

interface DeckNavProps {
  slides: DeckSlideMeta[];
  activeIndex: number;
  onNavigate: (index: number) => void;
  totalSlides: number;
}

const DeckNav: FC<DeckNavProps> = memo(({slides, activeIndex, onNavigate, totalSlides}) => {
  const [tocOpen, setTocOpen] = useState(false);
  const progress = ((activeIndex + 1) / totalSlides) * 100;

  return (
    <div className="deck-chrome pointer-events-none fixed inset-0 z-50">
      {/* Top bar */}
      <div className="pointer-events-auto absolute left-0 right-0 top-0 flex items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <button
            aria-label="Open table of contents"
            className="rounded-md border border-deck-border bg-white/90 p-2 text-deck-text shadow-sm backdrop-blur hover:bg-deck-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-deck-accent"
            onClick={() => setTocOpen(true)}
            type="button">
            <Bars3Icon className="h-5 w-5" />
          </button>
          <span className="hidden rounded-full border border-deck-accent/20 bg-deck-accent-muted px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-deck-accent sm:inline">
            Slide deck
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1 rounded-full border border-deck-border bg-white/90 px-3 py-1 text-xs font-medium text-deck-muted shadow-sm backdrop-blur sm:flex">
            <ChevronDownIcon className="h-3.5 w-3.5 animate-bounce text-deck-accent" />
            Scroll
          </span>
          <span className="rounded-full border border-deck-border bg-white/90 px-3 py-1 text-xs font-medium text-deck-muted shadow-sm backdrop-blur">
            {activeIndex + 1} / {totalSlides}
          </span>
        </div>
      </div>

      {/* Progress dots */}
      <nav
        aria-label="Slide navigation"
        className="pointer-events-auto absolute right-3 top-1/2 hidden -translate-y-1/2 flex-col gap-2 sm:flex">
        {slides.map((slide, index) => (
          <button
            aria-current={index === activeIndex ? 'step' : undefined}
            aria-label={`Go to slide ${slide.number}: ${slide.label}`}
            className={classNames(
              'h-2.5 w-2.5 rounded-full border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-deck-accent',
              index === activeIndex
                ? 'scale-125 border-deck-accent bg-deck-accent'
                : 'border-deck-border bg-white hover:border-deck-accent',
            )}
            key={slide.id}
            onClick={() => onNavigate(index)}
            type="button"
          />
        ))}
      </nav>

      {/* Bottom progress bar */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-deck-border/60">
        <div className="h-full bg-deck-accent transition-all duration-300 ease-out" style={{width: `${progress}%`}} />
      </div>

      {/* TOC dialog */}
      <Transition appear as={Fragment} show={tocOpen}>
        <Dialog as="div" className="relative z-[60]" onClose={() => setTocOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/20" />
          </Transition.Child>
          <div className="fixed inset-0 flex items-start justify-center p-4 pt-16">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-md rounded-xl border border-deck-border bg-white p-5 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <Dialog.Title className="text-lg font-bold text-deck-text">Table of contents</Dialog.Title>
                  <button
                    aria-label="Close table of contents"
                    className="rounded-md p-1 hover:bg-deck-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-deck-accent"
                    onClick={() => setTocOpen(false)}
                    type="button">
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </div>
                <ol className="max-h-[60vh] space-y-1 overflow-y-auto">
                  {slides.map((slide, index) => (
                    <li key={slide.id}>
                      <button
                        className={classNames(
                          'flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-deck-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-deck-accent',
                          index === activeIndex && 'bg-deck-accent-muted font-semibold text-deck-accent',
                        )}
                        onClick={() => {
                          onNavigate(index);
                          setTocOpen(false);
                        }}
                        type="button">
                        <span className="w-6 shrink-0 text-deck-muted">{slide.number}</span>
                        <span className="text-deck-text">{slide.label}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
});

DeckNav.displayName = 'DeckNav';
export default DeckNav;
