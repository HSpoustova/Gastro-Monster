import './style.css';
import jidlo from './img/food.png';
import { ModalLost } from '../ModalLost';
import { ModalWin } from '../ModalWin';

export const Modal = ({
  toggleModal,
  questionData,
  callback,
  answered,
  newQuestion,
  food,
  correctAnswers,
  isGameOver,
  setShowModal,
  showModal,
}) => {
  const closeModal = () => {
    toggleModal(false);
    if (answered) {
      newQuestion(false);
    }
  };

  const buttonClass = (answered, questionData, index) => {
    if (answered === true) {
      if (index === questionData.correctAnswer) {
        return 'button__answer button-answer--green';
      } else if (!(index === questionData.correctAnswer)) {
        return 'button__answer button-answer--red';
      }
    }
    return 'button__answer';
  };

  if (isGameOver === 'win') {
    return <ModalWin close={toggleModal} />;
  }

  if (isGameOver === 'lost') {
    return <ModalLost close={toggleModal} />;
  }

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <div className="food-amount">
            <img className="food-pic" src={jidlo} alt="jidlo" />
            <p className="food-text">Počet potravin: {food}</p>
            <div className="close">
              <div className="close-btn" onClick={closeModal}></div>
            </div>
          </div>
          <h2 className="question">{questionData.question}</h2>
          <div className="main-modal-body">
            {questionData.answer.map((answer, index) => (
              <div key={index}>
                <div
                  onClick={() => {
                    if (!answered) {
                      callback(index);
                    }
                  }}
                  className={buttonClass(answered, questionData, index)}
                  disabled={answered}
                >
                  {answer}
                </div>
              </div>
            ))}
          </div>
          <footer>
            <div className="ok-button" onClick={closeModal}>
              Další
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
