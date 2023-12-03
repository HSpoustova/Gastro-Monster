import { useState, useEffect, useRef } from 'react';
import MaskotEggHappy from './Modal/img/maskot-egg-happy.png';
import MaskotTeenHappy from './Modal/img/maskot-teen-happy.png';
import MaskotAdultHappy from './Modal/img/maskot-adult-happy.png';
import MaskotBabyHappy from './Modal/img/maskot-baby-happy.png';
import MaskotEggSad from './Modal/img/maskot-egg-sad.png';
import MaskotTeenSad from './Modal/img/maskot-teen-sad.png';
import MaskotAdultSad from './Modal/img/maskot-adult-sad.png';
import MaskotBabySad from './Modal/img/maskot-baby-sad.png';
import MaskotEggNeutral from './Modal/img/maskot-egg-neutral.png';

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
 'To je špatně..',
 'Jsem chudinka!',
 'Tak dlouho bez jídla.',
 'Ach jo..',
 'Neee!',
 'Makovče!',
 'Chci jíst!',
 'Břísko kručí!',
 'Oprav se.',
 'Umíram hlady!',
 'Bude někdy jídlo?',
 'Troubo',
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
    if (isCorrectAnswer === null) {
      setMaskotImage(MaskotEggNeutral); 
      return;
    }
  
    if (isCorrectAnswer) {
      // Obrázky pro správné odpovědi
      if (currentButtonId >= 7) {
        setMaskotImage(MaskotAdultHappy);
      } else if (currentButtonId >= 4) {
        setMaskotImage(MaskotTeenHappy);
      } else if (currentButtonId >= 2) {
        setMaskotImage(MaskotBabyHappy);
      } else {
        setMaskotImage(MaskotEggHappy);
      }
    } else {
      // Obrázky pro špatné odpovědi
      if (currentButtonId >= 7) {
        setMaskotImage(MaskotAdultSad);
      } else if (currentButtonId >= 4) {
        setMaskotImage(MaskotTeenSad);
      } else if (currentButtonId >= 2) {
        setMaskotImage(MaskotBabySad);
      } else {
        setMaskotImage(MaskotEggSad);
      }
    }
  
    // logika pro nastavení textu maskota
    if (isCorrectAnswer) {
      if (currentButtonId >= 0 && currentButtonId < textyOtazek.length) {
        setMaskotText(textyOtazek[currentButtonId]);
      }
    } else {
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
