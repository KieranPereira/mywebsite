import {useEffect} from 'react';

interface UseDeckKeyboardOptions {
  slideIds: string[];
  activeIndex: number;
  onNavigate: (index: number) => void;
  enabled?: boolean;
}

export const useDeckKeyboard = ({slideIds, activeIndex, onNavigate, enabled = true}: UseDeckKeyboardOptions) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) return;

      const lastIndex = slideIds.length - 1;
      let nextIndex: number | null = null;

      switch (event.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          event.preventDefault();
          nextIndex = Math.min(activeIndex + 1, lastIndex);
          break;
        case 'ArrowUp':
        case 'PageUp':
          event.preventDefault();
          nextIndex = Math.max(activeIndex - 1, 0);
          break;
        case 'Home':
          event.preventDefault();
          nextIndex = 0;
          break;
        case 'End':
          event.preventDefault();
          nextIndex = lastIndex;
          break;
        default:
          return;
      }

      if (nextIndex !== null && nextIndex !== activeIndex) {
        onNavigate(nextIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, enabled, onNavigate, slideIds.length]);
};
