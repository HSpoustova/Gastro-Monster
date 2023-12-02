import { useState, useEffect, useRef } from 'react';
import MaskotEggHappy from './Modal/img/maskot-egg-happy.png';
import MaskotTeenHappy from './Modal/img/maskot-teen-happy.png';
import MaskotAdultHappy from './Modal/img/maskot-adult-happy.png';

const textyOtazek = [
  'Hladovím...',
  'Mňam mňam..',
  'Ty jsi šikula!',
  'Zase plné bříško!',
  'Ještě přidat!',
  'Hmm.. dobrotka...',
  'Salám by nebyl?',
  'Dej mi ještě!',
  'Výborné!'
];


export const useMaskotMap = ({ delay, textProp, currentButtonId }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [maskotImage, setMaskotImage] = useState(MaskotEggHappy); 
  const [maskotText, setMaskotText] = useState(textyOtazek[0]); // Nastavení výchozího textu
  
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
    if (currentButtonId >= 6) {
      setMaskotImage(MaskotAdultHappy); 
    } else if (currentButtonId >= 3) {
      setMaskotImage(MaskotTeenHappy);
    } else {
      setMaskotImage(MaskotEggHappy); 
    }

    // Tady aktualizujeme text v bublině
    if (currentButtonId >= 0 && currentButtonId < textyOtazek.length) {
      setMaskotText(textyOtazek[currentButtonId]);
    }
  }, [currentButtonId]); // Přidali jsme závislost na currentButtonId pro aktualizaci textu

  return { 
    isVisible, 
    maskotRef, 
    isTextVisible, 
    textRef, 
    text: maskotText, // Zde vracíme aktualizovaný text
    maskotImage, 
  };
};
