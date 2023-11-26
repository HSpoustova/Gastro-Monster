import './style.css';
import { buttons } from '../../components/DataButton';
import { useQuestionHook } from '../../components/useQuestionHook';
import { useEvaluationHook } from '../../components/useEvaluationHook';
import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { dairyData } from '../../components/Data';

export const Map = () => {
  const [questionSet, setQuestionSet] = useQuestionHook(dairyData);
  const [showModal, setShowModal] = useState(false);

  const [
    food,
    setAnswer,
    answered,
    setAnswered,
    questionData,
    correctAnswers,
    answeredQuestion,
  ] = useEvaluationHook(questionSet, dairyData);

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
    <div className="container">
      {buttons.map((buttonMap) => {
        return (
          <div key={buttonMap.id}>
            <button
              className={buttonMap.classes}
              key={buttonMap.id}
              onClick={() => setShowModal(true)}
              disabled={!(correctAnswers === buttonMap.id)}
            >
              {buttonMap.name}
            </button>
          </div>
        );
      })}

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
