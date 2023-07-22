import './Quantity.scss';
import cn from 'classnames';

export const Quantity = ({
  questions,
  correct,
  setChosenCategories,
  chosenCategories,
  setPage,
}) => {

  const handleChooseCategory = (chosenCategory) => {
    setChosenCategories(prevState => ([
      ...prevState,
      chosenCategory,
    ]))
  };

  return (
    <div className="quantityPage">
      <h2
      className="quantityPage__header"
      >
        Оберіть кількість питань:
      </h2>
      <div className="quantityPage__categories">
        <button
          className={cn('quantityPage__button', {
            'quantityPage__button--chosen': chosenCategories.includes(5),
          })}
          onClick={() => {handleChooseCategory(5)}}
        >
          5
        </button>
        <button
          className={cn('quantityPage__button', {
            'quantityPage__button--chosen': chosenCategories.includes(10),
          })}
          onClick={() => {handleChooseCategory(10)}}
        >
          10
        </button>
      </div>
      <button
        className="quantityPage__button quantityPage__button--next"
        onClick={() => setPage(2)}
      >
        Почати
      </button>
    </div>
  );
}
