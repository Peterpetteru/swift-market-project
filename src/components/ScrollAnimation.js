// src/components/ScrollAnimation.js
'use client';

import { useInView } from 'react-intersection-observer';

// This component will wrap any other component to give it a scroll-in animation.
export default function ScrollAnimation({ children }) {
  // The useInView hook tells us if the component is on the screen.
  const { ref, inView } = useInView({
    // This makes the animation trigger only once.
    triggerOnce: true,
    // This makes the animation start a little sooner, when the element is 10% visible.
    threshold: 0.1,
  });

  return (
    // The 'ref' tells the hook which element to watch.
    <div
      ref={ref}
      // We use Tailwind CSS classes to create the animation.
      // It starts invisible and slightly moved down.
      // When 'inView' becomes true, it fades in and moves up to its normal position.
      className={`transition-all duration-700 ease-in-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
}