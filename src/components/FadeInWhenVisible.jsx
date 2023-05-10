// FadeInWhenVisible.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const FadeInWhenVisible = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // The animation will happen only once
    threshold: 0.3, // The component will become visible once 10% of it is visible in the viewport
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
  });

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};

export default FadeInWhenVisible;
