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
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);



  //nacte random otazku z pole otazek - pouzijeme v handleClick aby se to aktualizovalo po odpovědi
  const updateQuestionData = () => {{
    if (correctAnswers < 10 && wrongAnswers < 3) {
      setQuestionData(getRandomObject(dairyData));
    }
  }};
  const checkGameOver = () => {
    if (correctAnswers === 9) {
      alert('Vyhrál jsi!');
    } else if (wrongAnswers === 2) {
      alert('Prohrál jsi!');
    }
    updateQuestionData()
  };
  //funkce která na klik zhodnotí jestli odpověd uživatele se shoduje s indexem správné odpovědi. Pokud ano dá správná odpoved a pokud ne tak dá špatná odpoveď + načtení další otázky
  const handleClick = (selectedAnswerIndex) => {
    if (selectedAnswerIndex === questionData.correctAnswer) {
      alert('Správná odpověď');
      setCorrectAnswers(correctAnswers + 1)
    } else {
      alert('Špatná odpověď');
      setWrongAnswers(wrongAnswers + 1)
    }
    updateQuestionData()
    checkGameOver();
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
