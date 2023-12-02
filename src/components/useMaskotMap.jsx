import { useState, useEffect, useRef } from 'react';
import MaskotEggHappy from './Modal/img/maskot-egg-happy.png';
import MaskotTeenHappy from './Modal/img/maskot-teen-happy.png';

export const useMaskotMap = ({ delay, textProp, currentButtonId }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [maskotImage, setMaskotImage] = useState(MaskotEggHappy); // Nastavte výchozí obrázek maskota na miminko
  
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

  useEffect(() => {
    if (currentButtonId >= 3) { // Změna obrázku maskota od ID 3
      setMaskotImage(MaskotTeenHappy); // Nastavte obrázek maskota na teen
    } else {
      setMaskotImage(MaskotEggHappy); // Nastavte obrázek maskota zpět na miminko
    }
  }, [currentButtonId]);

  return { 
    isVisible, 
    maskotRef, 
    isTextVisible, 
    textRef, 
    text: textProp,
    maskotImage, // Přidávám maskotImage do vraceného objektu
  };
};
