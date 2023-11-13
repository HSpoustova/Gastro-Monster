import './style.css';

export const DairyQuestion = ({ questionData, callback }) => {
  //funkce která na klik zhodnotí jestli odpověd uživatele se shoduje s indexem správné odpovědi a vrati informaci callbeckem k dalsimu zpracovani
  const handleClick = (selectedAnswerIndex) => {
    if (selectedAnswerIndex === questionData.correctAnswer) {
      alert('Správná odpověď');
      callback(true);
    } else {
      alert('Špatná odpověď');
      callback(false);
    }
  };

  return (
    <div>
      <h2>{questionData.question}</h2>
      {questionData.answer.map((answer, index) => (
        <div key={index}>
          <button onClick={() => handleClick(index)} className="button__answer">
            {answer}
          </button>
        </div>
      ))}
    </div>
  );
};
