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


