import { useEffect, useState } from 'react';
import { GetRandomObject } from './GetRandomObject';
import { ModalLost } from './ModalLost';
import { ModalWin } from './ModalWin';

export const useEvaluationHook = (questionSet, array) => {
  const [questionData, setQuestionData] = useState({
    question: '',
    answer: [''],
    correctAnswer: 0,
  });

  //pocatecni stav potravin
  const [food, setFood] = useState(15);
  //pocatecni stav pocitani otazek
  const [answeredQuestion, setAnsweredQuestion] = useState(0);
  // jaka odpoved byla zadana (index odpovedi od uzivatele)
  const [answer, setAnswer] = useState(-1);
  //pocatecni stav spravnych odpovedi
  const [correctAnswers, setCorrectAnswers] = useState(0);
  //stav, ktery znaci, jestli odpovedel
  const [answered, setAnswered] = useState(false);

  const [isGameOver, setIsGameOver] = useState('question');

  //definovani funkce, zda vyhral (musi byt definovano, nez pouzijeme), vraci true false
  const checkHasWon = () => {
    return correctAnswers >= 9;
  };
  //definovani podminky, zda prohral (musi byt definovano, nez pouzijeme) vraci true nebo false
  const checkHasLost = () => {
    let extraFood = food - (10 - correctAnswers) - 1;
    if (extraFood >= 0) {
      return false;
    }
    return true;
  };
  //obnoveni nove otazky
  const updateQuestionData = () => {
    setQuestionData(array[GetRandomObject(questionSet)]);
  };

  /* Hook obdrzi index, 
  - nastavi, ze uzivatel odpovedel, 
  - resetuje promennou answer
  - pripocita +1 k tomu, kolik otazek uz bylo polozeno
  - odecte potravinu
  - pokud odpoved byla spravna, pricte +1 ke spravnym odpovedim
  - vyhodnoti hasWon, hasLost podle podminek definovanych nahore
  - obnovi stranku */

  const handleAnswer = (status) => {
    // Pokud hra skončila, nebudeme pokračovat v nastavování dalších otázek
    if (isGameOver !== 'question') {
      return;
    }
  
    setAnswered(true);
    setAnswer(-1);
    setAnsweredQuestion(answeredQuestion + 1);
    setFood(food - 1);
  
    if (status) {
      const newCorrectAnswers = correctAnswers + 1;
      setCorrectAnswers(newCorrectAnswers);
  
      // Kontrola, zda hráč vyhrál po každé správné odpovědi
      if (newCorrectAnswers >= 9) {
        setIsGameOver('win');
        // Zde můžete volitelně přidat logiku pro zobrazení modálního okna pro výhru, pokud již není jinde
        // Například pomocí callbacku nebo události
      }
    } else if (checkHasLost()) {
      setIsGameOver('lost');
      // Zde můžete volitelně přidat logiku pro zobrazení modálního okna pro prohru, pokud již není jinde
    }
  };

  useEffect(() => {
    if (answer > -1) {
      handleAnswer(answer);
    }
  }, [answer]);

useEffect(() => {
  // Pokud hra neskončila a hráč neodpověděl, obnovíme otázku
  if (!answered && isGameOver === 'question') {
    updateQuestionData();
  }
}, [answered, isGameOver]);

  return [
    food,
    setAnswer,
    answered,
    setAnswered,
    questionData,
    correctAnswers,
    answeredQuestion,
    isGameOver,
  ];
};
