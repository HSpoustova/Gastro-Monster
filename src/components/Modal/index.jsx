import './style.css';

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
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <header>
            <div>Pocet potravin: {food}</div>
            <div className="close">
              <span className="close-btn" onClick={closeModal}>
                &times;
              </span>
            </div>
            <h2>{questionData.question}</h2>
          </header>
          <body>
            {questionData.answer.map((answer, index) => (
              <div key={index}>
                <button
                  onClick={() => callback(index)}
                  className="button__answer"
                  disabled={answered}
                >
                  {answer}
                </button>
              </div>
            ))}
          </body>
          <footer>
            <button onClick={closeModal}>OK</button>
          </footer>
        </div>
      </div>
    </div>
  );
};
