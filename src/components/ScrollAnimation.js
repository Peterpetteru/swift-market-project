'use client';
import { useInView } from 'react-intersection-observer';

export default function ScrollAnimation({ children }) {
  const { ref, inView } = useInView({
    // This makes the animation trigger only once
    triggerOnce: true,
    // This makes the animation start when the element is 10% visible
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref} 
      // This applies the animation classes. When 'inView' is true,
      // the component fades in and slides up.
      className={`transition-all duration-1000 ease-in-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
}

