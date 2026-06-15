import {useCallback, useEffect, useState} from 'react';

/**
 * Tracks which deck slide is currently active via IntersectionObserver.
 */
export const useDeckObserver = (slideSelector: string) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSlide = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }, []);

  const scrollToIndex = useCallback(
    (index: number, slideIds: string[]) => {
      const id = slideIds[index];
      if (id) scrollToSlide(id);
    },
    [scrollToSlide],
  );

  useEffect(() => {
    const slides = Array.from(document.querySelectorAll<HTMLElement>(slideSelector));
    if (slides.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const id = visible[0].target.id;
          setActiveId(id);
          setActiveIndex(slides.findIndex(slide => slide.id === id));
        }
      },
      {root: null, threshold: [0.4, 0.6, 0.8], rootMargin: '0px'},
    );

    slides.forEach(slide => observer.observe(slide));
    if (!activeId && slides[0]) {
      setActiveId(slides[0].id);
      setActiveIndex(0);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideSelector]);

  return {activeId, activeIndex, scrollToSlide, scrollToIndex};
};
