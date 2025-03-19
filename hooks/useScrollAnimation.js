import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when element enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Once the animation is triggered, we can unobserve
          // (if you want animation to replay when element comes back into view, remove this line)
          observer.unobserve(currentRef);
        }
      },
      {
        // Percentage of element that needs to be visible to trigger animation
        threshold
      }
    );

    // Start observing the element
    observer.observe(currentRef);

    // Clean up
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

export default useScrollAnimation; 