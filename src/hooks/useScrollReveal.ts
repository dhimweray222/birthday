'use client';

import { useEffect, useRef } from 'react';

/**
 * Custom hook to apply a 'active' class when elements intersect with the viewport
 * @returns {React.MutableRefObject} A ref to attach to the target element
 */
export function useScrollReveal() {
  const ref = useRef<HTMLElement | HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Play once
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return ref;
}
