import { useState, useEffect, useRef } from 'react';

export const useMaskot = ({ delay, textProp }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const maskotRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const timerMaskot = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    const textDelay = delay + 1500; 
    const timerBubble = setTimeout(() => {
      setIsTextVisible(true);
    }, textDelay);

    return () => {
      clearTimeout(timerMaskot);
      clearTimeout(timerBubble);
    };
  }, [delay]);

  return { isVisible, maskotRef, isTextVisible, textRef, text: textProp };
};
