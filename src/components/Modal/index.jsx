import './style.css';
import jidlo from './img/food.png';
import { useMaskot } from '../useMaskot';

export const Modal = ({
  toggleModal,
  questionData,
  callback,
  answered,
  newQuestion,
  food,
  correctAnswers,
}) => {
  const closeModal = () => {
    toggleModal(false);
    if (answered) {
      newQuestion(false);
    }
  };

  const { isVisible, isTextVisible, text, maskotRef, textRef, isTextShaking } = useMaskot({
    delay: 400,
    textProp: 'Mám hlad!',
  });


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
                  onClick={() => callback(index)}
                  className="button__answer"
                  disabled={answered}
                >
                  {answer}
                </div>
              </div>
            ))}
          </div>
          <div className="maskot-container">
          {isTextVisible && (
            <div
              ref={textRef}
              className={`maskot-text-bubble ${
                isTextShaking ? 'shaking-text' : ''
              }`}
            >
              {text}
            </div>
          )}
          <div
            ref={maskotRef}
            className={`maskot ${isVisible ? 'active' : ''}`}
          >
            <img className="maskot-pic" src={maskotAdultNeutral} alt="Maskot" />
          </div>
        </div>
          <footer>
            <div className='ok-button'onClick={closeModal}>OK</div>
          </footer>
        </div>
      </div>
    </div>
  );
};
