export function Game({
  questions,
  question,
  step,
  onAnswerClick,
}) {
  
  const percentage = Math.round(step / questions.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width:`${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.answers.map((answer, index) => (
          <li
            key={answer}
            onClick={() => onAnswerClick(index)}
          >
            {answer}
          </li>
        ))}
      </ul>
    </>
  );
}