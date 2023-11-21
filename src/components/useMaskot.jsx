import { useState, useEffect, useRef } from 'react';

export const useMaskot = (delay) => {
  const [isVisible, setIsVisible] = useState(false);
  const maskotRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return { isVisible, maskotRef };
};


