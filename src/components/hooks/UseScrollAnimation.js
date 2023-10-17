import { useState, useEffect, useRef } from "react";

const useIntersectionObserver = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !animationTriggered) {
          setAnimationTriggered(true);
          observer.disconnect(); // Stop observing once animation has been triggered
        }
      },
      { threshold: 0 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [animationTriggered]);

  return { ref, animationTriggered };
};

export default useIntersectionObserver;
