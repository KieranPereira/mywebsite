import {useCallback, useEffect, useState} from 'react';

/**
 * Tracks whether the user has scrolled the deck at least once (to tone down hints).
 */
export const useDeckScrollHint = (enabled = true) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const markScrolled = useCallback(() => setHasScrolled(true), []);

  useEffect(() => {
    if (!enabled || hasScrolled) return;

    const root = document.querySelector<HTMLElement>('[data-deck-root]');
    if (!root) return;

    const onScroll = () => {
      if (root.scrollTop > 48) {
        setHasScrolled(true);
      }
    };

    root.addEventListener('scroll', onScroll, {passive: true});
    return () => root.removeEventListener('scroll', onScroll);
  }, [enabled, hasScrolled]);

  return {hasScrolled, markScrolled};
};
