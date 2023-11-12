import './style.css';
import { dairyData } from '../Arrays';
import { useState } from 'react';

export const DiaryProduct = () => {
  const getRandomObject = (array) => {
    //vybere random objekt z předaného pole 
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject;
  };
  const [questionData, setQuestionData] = useState(() =>
    getRandomObject(dairyData),
  );
  //nacte random otazku z pole otazek - pouzijeme v handleClick aby se to aktualizovalo po odpovědi
  const updateQuestionData = () => {
    setQuestionData(getRandomObject(dairyData));
  };
  //funkce která na klik zhodnotí jestli odpověd uživatele se shoduje s indexem správné odpovědi. Pokud ano dá správná odpoved a pokud ne tak dá špatná odpoveď + načtení další otázky
  const handleClick = (selectedAnswerIndex) => {
    if (selectedAnswerIndex === questionData.correctAnswer) {
      alert('Správná odpověď');
    } else {
      alert('Špatná odpověď');
    }
    updateQuestionData()
  };
  return (
      <div>
        <h2>{questionData.question}</h2>
        {questionData.answer.map((answer, index) => (
          <div>
            <button onClick={() => handleClick(index)} className="button__answer">{answer}</button>
          </div>
        ))}
      </div>

  );
};
