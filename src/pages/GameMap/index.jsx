import './style.css';
import { buttons } from '../../components/DataButton';
import { useQuestionHook } from '../../components/useQuestionHook';
import { useEvaluationHook } from '../../components/useEvaluationHook';
import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { useMaskotMap } from '../../components/useMaskotMap';

const selectClass = (type, buttonObj) => {
  switch (type) {
    case 'milk':
      return buttonObj.milk;
    case 'meat':
      return buttonObj.meat;
    case 'vegfruit':
      return buttonObj.vegFruit;
    case 'bakery':
      return buttonObj.bakery;
  }
};

const selectMap = (type) => {
  switch (type) {
    case 'milk':
      return 'milk-map';
    case 'meat':
      return 'meat-map';
    case 'vegfruit':
      return 'vegFruit-map';
    case 'bakery':
      return 'bakery-map';
  }
};

export const GameMap = ({ data }) => {
  const type = data[0];
  const array = data[1];
  const [questionSet, setQuestionSet] = useQuestionHook(array);
  const [showModal, setShowModal] = useState(false);
  const [lastAnswerWasCorrect, setLastAnswerWasCorrect] = useState(null);

  const {
    food,
    setAnswer,
    answered,
    setAnswered,
    questionData,
    correctAnswers,
    isGameOver,
  } = useEvaluationHook(questionSet, array);

  const currentButtonId = correctAnswers;
  const { isVisible, isTextVisible, text, maskotImage } = useMaskotMap({
    delay: 400,
    currentButtonId,
    isCorrectAnswer: lastAnswerWasCorrect,
  });

  const selectedAnswer = (selectedAnswerIndex) => {
    const isCorrect = selectedAnswerIndex === questionData.correctAnswer;
    setAnswer(isCorrect);

    setLastAnswerWasCorrect(isCorrect);
  };

  return (
    <div className={selectMap(type)}>
      {correctAnswers < 10 ? (
        <div
          className={`avatar ${selectClass(type, buttons[correctAnswers])}`}
          key={buttons[correctAnswers].id}
          onClick={() => setShowModal(true)}
        ></div>
      ) : null}
      <div className="maskot-container">
        {isTextVisible && <div className="maskot-text-bubble">{text}</div>}
        <div className={`maskot ${isVisible ? 'active' : ''}`}>
          <img className="maskot-pic" src={maskotImage} alt="Maskot" />{' '}
        </div>
      </div>

      {showModal ? (
        <Modal
          toggleModal={setShowModal}
          questionData={questionData}
          callback={selectedAnswer}
          answered={answered}
          newQuestion={setAnswered}
          food={food}
          isGameOver={isGameOver}
        />
      ) : null}
    </div>
  );
};
