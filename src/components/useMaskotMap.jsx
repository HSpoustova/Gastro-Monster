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
  'Výborné!',
  'Juchůů!'
];
const textySpatnychOdpovedi = [
 'To je špatné..',
 'Jsem chudinka!',
 'Tak dlouho bez jídla.',
 'Ach jo..',
 'Neee!',
 'Makovče!',
 'Chci jíst!'
];

export const useMaskotMap = ({ delay, currentButtonId, isCorrectAnswer }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [maskotImage, setMaskotImage] = useState(MaskotEggHappy); 
  const [maskotText, setMaskotText] = useState(textyOtazek[0]); 
  
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

    
    if (isCorrectAnswer === null) {
      // Pokud ještě nebyla provedena žádná odpověď, necháme text nezměněný
      return;
    }
    if (isCorrectAnswer) {
      if (currentButtonId >= 0 && currentButtonId < textyOtazek.length) {
        setMaskotText(textyOtazek[currentButtonId]);
      }
    } else {
      // Logika pro špatné odpovědi
      setMaskotText(textySpatnychOdpovedi[Math.floor(Math.random() * textySpatnychOdpovedi.length)]);
    }
  }, [currentButtonId, isCorrectAnswer]);
  
  return { 
    isVisible, 
    maskotRef, 
    isTextVisible, 
    textRef, 
    text: maskotText, 
    maskotImage, 
  };
};
