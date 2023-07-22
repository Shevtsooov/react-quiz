export const Result = ({
  questions,
  correct,
}) => {
  const correctForm = correct < 5
    ? 'питання'
    : 'питань'

  return (
    <div className="result">
      <img
      src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
      alt="Congratulations"
      />
      <h2>
        {`Ви правильно відповіли на ${correct} ${correctForm} з ${questions.length}`}</h2>
      <a href="/">
        <button>Спробувати знову</button>
      </a>
    </div>
  );
}
