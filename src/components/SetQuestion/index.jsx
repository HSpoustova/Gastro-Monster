import { useState } from 'react';
import { Question } from '../Question';
import { useQuestionHook } from '../useQuestionHook';
import { useEvaluationHook } from '../useEvaluationHook';

export const SetQuestion = ({ array }) => {


  const [questionSet, setQuestionSet] = useQuestionHook(array);

  const [
    food,
    setAnswer,
    answered,
    setAnswered,
    questionData,
    correctAnswers,
    answeredQuestion,
  ] = useEvaluationHook(questionSet, array);

  const selectedAnswer = (selectedAnswerIndex) => {
    if (selectedAnswerIndex === questionData.correctAnswer) {
      alert('Správná odpověď');
      setAnswer(true);
      return;
    }
    alert('Špatná odpověď');
    setAnswer(false);
  };

  return (
    <>
      <Question
        questionData={questionData}
        callback={selectedAnswer}
        answered={answered}
        newQuestion={setAnswered}
        food={food}
        correctAnswers={correctAnswers}
        answeredQuestion={answeredQuestion}
      />
    </>
  );
};

/*//vytvori se pole vsech moznych indexu 0..dairyData.length-1
  const questionIndex = [];
  for (let i = 0; i < dairyData.length; i++) {
    questionIndex.push(i);
  }
  //vytvori pole o 15 nahodnych neopakujicich se indexu
  let buildSet = [];
  for (let i = 0; i < 15; i++) {
    buildSet.push(GetRandomObject(questionIndex));
  }
  const [questionSet, setQuestionSet] = useState(buildSet);*/

/*const [questionData, setQuestionData] = useState(
    () => dairyData[GetRandomObject(questionSet)],
  );*/

/*const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);*/
//nastavi vychozi hodnotu questionData tim, ze vybere nahodny index z questionSet pole a zavola dany objekt z dairyData
/*const [questionData, setQuestionData] = useState(
    () => dairyData[GetRandomObject(questionSet)],
  )*/

/* //Zpracovani informace, zda je otazka dobre nebo spatne, je to ziskano z handleClick callbackem
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
      setQuestionData(dairyData[GetRandomObject(questionSet)]);
    }
  };

  //probehne overeni, zda vyhral nebo prohral status znaci spravnou nebo spatnou odpoved, aby nedoslo k mylnemu vyhodnoceni
  const checkGameOver = (status) => {
    if (status && correctAnswers === 9) {
      alert('Vyhrál jsi!');
      location.reload();
    } else if (!status && wrongAnswers === 2) {
      alert('Prohrál jsi!');
      location.reload();
    } else {
      updateQuestionData();
    }
  };*/
