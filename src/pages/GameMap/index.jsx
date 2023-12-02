import './style.css';
import { buttons } from '../../components/DataButton';
import { useQuestionHook } from '../../components/useQuestionHook';
import { useEvaluationHook } from '../../components/useEvaluationHook';
import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { useMaskotMap } from '../../components/useMaskotMap';
import MaskotAdultAngry from '../../components/Modal/img/maskot-adult-angry.png';

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

  const [
    food,
    setAnswer,
    answered,
    setAnswered,
    questionData,
    correctAnswers, // Toto je místo, kde se 'correctAnswers' získává
    answeredQuestion,
  ] = useEvaluationHook(questionSet, array);
  const currentButtonId =
    correctAnswers !== undefined ? buttons[correctAnswers].id : 0;
  const { isVisible, isTextVisible, text, maskotRef, textRef, maskotImage } =
    useMaskotMap({
      delay: 400,
      textProp: 'Mám hlad!',
      currentButtonId, // Použití 'currentButtonId' místo přímého přístupu k 'buttons[correctAnswers].id'
    });
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
    <div className={selectMap(type)}>
      <div
        className={`avatar ${selectClass(type, buttons[correctAnswers])}`}
        key={buttons[correctAnswers].id}
        onClick={() => setShowModal(true)}
      ></div>
      <div className="maskot-container">
        {isTextVisible && (
          <div ref={textRef} className="maskot-text-bubble">
            {text}
          </div>
        )}
        <div ref={maskotRef} className={`maskot ${isVisible ? 'active' : ''}`}>
          <img className="maskot-pic" src={maskotImage} alt="Maskot" />{' '}
          {/* Použití maskotImage */}
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
          correctAnswers={correctAnswers}
          answeredQuestion={answeredQuestion}
        />
      ) : null}
    </div>
  );
};

/*{buttons.map((buttonMap) => {
        return (
          <div key={buttonMap.id}>
            <button
              className={selectClass(type, buttonMap)}
              key={buttonMap.id}
              onClick={() => setShowModal(true)}
              disabled={!(correctAnswers === buttonMap.id)}
            >
              {buttonMap.name}
            </button>
          </div>
        );
      })}*/
