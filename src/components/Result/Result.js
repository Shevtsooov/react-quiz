import './Result.scss'

export const Result = ({
  readyQuestions,
  correct,
}) => {
  const correctForm = correct < 5
    ? 'питання'
    : 'питань'

  return (
    <div className="resultPage">
      <img
      className="resultPage__img"
      src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
      alt="Congratulations"
      />
      <h2 className="resultPage__header">
        {`Ви правильно відповіли на ${correct} ${correctForm} з ${readyQuestions.length}`}</h2>
      <a href="/">
        <button className="resultPage__button">Спробувати знову</button>
      </a>
    </div>
  );
}
