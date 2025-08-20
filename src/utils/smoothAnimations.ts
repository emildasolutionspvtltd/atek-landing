/**
 * Smooth Animation Utility
 * Provides a simple, performant animation system for scroll-triggered reveals
 */

export const initSmoothAnimations = (container?: HTMLElement | null) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('animate-smooth-reveal');
          element.style.willChange = 'transform, opacity';
          
          // Clean up will-change after animation completes
          setTimeout(() => {
            element.style.willChange = 'auto';
          }, 1000);
        }
      });
    },
    { 
      threshold: 0.2, 
      rootMargin: '0px 0px -10% 0px' 
    }
  );

  // Find elements to animate
  const scope = container || document;
  const elements = scope.querySelectorAll('.animate-on-scroll');
  
  elements.forEach((el) => {
    const element = el as HTMLElement;
    // Set initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(15px)';
    element.style.transition = 'none'; // Prevent flash
    observer.observe(element);
  });

  return observer;
};

export const cleanupAnimations = (observer: IntersectionObserver) => {
  observer.disconnect();
};
