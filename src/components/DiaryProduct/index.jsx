import './style.css';
import { dairyData } from '../Arrays';
import { useState } from 'react';

export const DiaryProduct = () => {
  const getRandomObject = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject;
  };

  const [questionData, setQuestionData] = useState(() =>
    getRandomObject(dairyData),
  );

  return (
    <div className="container">
      <div>
        <h2>{questionData.question}</h2>
        {questionData.answer.map((answer) => (
          <div>
            <button className="button__answer">{answer}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
