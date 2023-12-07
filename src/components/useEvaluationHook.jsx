import { useEffect, useState } from 'react';
import { GetRandomObject } from './GetRandomObject';

export const useEvaluationHook = (questionSet, array) => {
  const [questionData, setQuestionData] = useState({
    question: '',
    answer: [''],
    correctAnswer: 0,
  });

  //pocatecni stav potravin
  const [food, setFood] = useState(15);
  // jaka odpoved byla zadana (index odpovedi od uzivatele)
  const [answer, setAnswer] = useState(-1);
  //pocatecni stav spravnych odpovedi
  const [correctAnswers, setCorrectAnswers] = useState(0);
  //stav, ktery znaci, jestli uzivatel odpovedel
  const [answered, setAnswered] = useState(false);
  //stav, ktery upravuje, jaky modal se ma otevrit
  const [isGameOver, setIsGameOver] = useState('question');

  const checkHasWon = (updatedCorrect) => {
    return updatedCorrect === 10;
  };
  const checkHasLost = () => {
    let extraFood = food - (10 - correctAnswers) - 1;
    if (extraFood >= 0) {
      return false;
    }
    return true;
  };
  const updateQuestionData = () => {
    setQuestionData(array[GetRandomObject(questionSet)]);
  };

  const handleAnswer = (status) => {

    setAnswered(true);
    setAnswer(-1);
    setFood(food - 1);

    if (status) {
      const newCorrectAnswers = correctAnswers + 1;
      setCorrectAnswers(newCorrectAnswers);

      if (checkHasWon(newCorrectAnswers)) {
        setIsGameOver('win');
      }
      return;
    }
    if (checkHasLost()) {
      setIsGameOver('lost');
    }
  };

  useEffect(() => {
    if (answer > -1) {
      handleAnswer(answer);
    }
  }, [answer]);

  useEffect(() => {
    if (!answered && isGameOver === 'question') {
      updateQuestionData();
    }
  }, [answered, isGameOver]);

  return {
    food,
    setAnswer,
    answered,
    setAnswered,
    questionData,
    correctAnswers,
    isGameOver,
  };
};
