import './style.css';

//zobrazuje tlacitko "dalsi" po kliknuti na jakoukoliv odpoved a da dalsi otazku, po odpovedi zablokuje moznost znovu kliknout na odpoved
const revealButton = (answered, newQuestion) => {
  if (answered === true) {
    return (
      <div>
        <button onClick={() => newQuestion(false)} className="button__answer">
          Další
        </button>
      </div>
    );
  }
  return null;
};

//popuziva jako props
export const Question = ({
  questionData,
  callback,
  answered,
  newQuestion,
  food,
  correctAnswers,
}) => {
  return (
    <>
      <div>
        <div>Pocet potravin: {food}</div>
        <div>Pocet zbyvajicich policek: {10 - correctAnswers}</div>
        <div>Spravnych odpovedi: {correctAnswers}</div>
        <h2>{questionData.question}</h2>
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
      </div>

      {revealButton(answered, newQuestion)}
    </>
  );
};


