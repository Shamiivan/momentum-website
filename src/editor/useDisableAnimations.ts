import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Hook to disable GSAP ScrollTrigger animations when in editor mode
 * This prevents conflicts between Craft.js DOM manipulation and ScrollTrigger
 */
export const useDisableAnimations = () => {
  useEffect(() => {
    // Kill all existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Disable ScrollTrigger globally
    ScrollTrigger.config({ autoRefreshEvents: 'none' });

    // Set all animated elements to visible state
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.opacity = '1';
      htmlElement.style.transform = 'none';
    });

    return () => {
      // Re-enable on cleanup (if user navigates away)
      ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load' });
    };
  }, []);
};
