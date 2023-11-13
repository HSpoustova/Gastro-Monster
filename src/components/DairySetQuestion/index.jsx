import { useState } from 'react';
import { dairyData } from '../Data';
import { DairyQuestion } from '../DairyQuestion';
import { GetRandomObject } from '../GetRandomObject';

export const DairySetQuestion = () => {
  //udela se kopie dat
  const questionCopy = dairyData;
  //vytvori polůe o 15 nahodnych neopakujicich se otazkach (musi byt jednodussi zapis, ale ztracel se mi set z promenne a volal se znovu po dvou odpovedich)
  const [questionSet, setQuestionSet] = useState(() => {
    let buildSet = [];
    for (let i = 0; i < 15; i++) {
      buildSet.push(GetRandomObject(questionCopy));
    }
    return buildSet;
  });
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [questionData, setQuestionData] = useState(() =>
    GetRandomObject(questionSet),
  );

  //Zpracovani informace, zda je otazka dobre nebo spatne, je to ziskano z handleClick callbackem
  const questionStatus = (status) => {
    if (status) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }
    checkGameOver(status);
  };
  const updateQuestionData = () => {
    {
      setQuestionData(GetRandomObject(questionSet));
    }
  };

  //probehne overeni, zda vyhral nebo prohral status znaci spravnou nebo spatnou odpoved, aby nedoslo k mylnemu vyhodnoceni
  const checkGameOver = (status) => {
    console.log(questionSet);
    if (status && correctAnswers === 9) {
      alert('Vyhrál jsi!');
    } else if (!status && wrongAnswers === 2) {
      alert('Prohrál jsi!');
    } else {
      updateQuestionData();
    }
  };
  return (
    <>
      <div>Correct: {correctAnswers}</div>
      <div>Incorrect: {wrongAnswers}</div>
      <DairyQuestion questionData={questionData} callback={questionStatus} />
    </>
  );
};
