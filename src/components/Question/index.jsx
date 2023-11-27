import './style.css';

//zobrazuje tlacitko "dalsi" po kliknuti na jakoukoliv odpoved a da dalsi otazku, po odpovedi zablokuje moznost znovu kliknout na odpoved
const revealButton = (answered, newQuestion) => {
  return answered ? (
    <div onClick={() => newQuestion(false)} className="button__answer">
      Další
    </div>
  ) : null;
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
      <div className="quizContainer">
        {/* <div>Pocet potravin: {food}</div>
        <div>Pocet zbyvajicich policek: {10 - correctAnswers}</div>
        <div>Spravnych odpovedi: {correctAnswers}</div> */}
        <h2 className="question">{questionData.question}</h2>
        <div className="buttons">
          {questionData.answer.map((answer, index) => (
            <div
              key={index}
              onClick={() => callback(index)}
              className="button__answer"
              disabled={answered}
            >
              {answer}
            </div>
          ))}
          {revealButton(answered, newQuestion)}
        </div>
      </div>
    </>
  );
};
