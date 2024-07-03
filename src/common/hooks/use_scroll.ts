import { useCallback, useEffect, useState } from 'react';

const useScroll = (threshold: number, onScrollCallback?: () => void): boolean => {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    const isScrolling = window.scrollY > threshold;
    setScrolled(isScrolling);
    if (isScrolling && onScrollCallback) {
      onScrollCallback();
    }
  }, [threshold, onScrollCallback]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return scrolled;
};

export default useScroll;
