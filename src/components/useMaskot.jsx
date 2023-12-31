import { useState, useEffect } from 'react';

export const useMaskot = ({ delay, textProp }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isTextShaking, setIsTextShaking] = useState(false);

  useEffect(() => {
    const timerMaskot = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    const textDelay = delay + 1500;
    const timerBubble = setTimeout(() => {
      setIsTextVisible(true);
      setIsTextShaking(true); // Zapnout třesení
      setTimeout(() => setIsTextShaking(false), 800); // Vypnout třesení po dobu trvání animace
    }, textDelay);

    return () => {
      clearTimeout(timerMaskot);
      clearTimeout(timerBubble);
    };
  }, [delay]);

  return {
    isVisible,
    isTextVisible,
    text: textProp,
    isTextShaking,
  };
};
