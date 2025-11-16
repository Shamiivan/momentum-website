import { useEffect } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Custom hook to animate elements with [data-animate] attribute when they come into view
 * @param options - IntersectionObserver configuration options
 */
export const useScrollAnimation = (options?: ScrollAnimationOptions) => {
  useEffect(() => {
    const observerOptions = {
      threshold: options?.threshold ?? 0.1,
      rootMargin: options?.rootMargin ?? '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll('[data-animate]');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]);
};
