import './Filter.scss';
import cn from 'classnames';

export const Filter = ({
  questions,
  correct,
  setChosenCategories,
  chosenCategories,
  setPage,
}) => {

  const handleChooseCategory = (chosenCategory) => {

    if (chosenCategories.includes(chosenCategory)) {
      setChosenCategories(prevState => {
        return prevState.filter(cat => cat !== chosenCategory)
      });

      return;
    }

    setChosenCategories(prevState => ([
      ...prevState,
      chosenCategory,
    ]))
  };

  return (
    <div className="filterPage">
      <h2
      className="filterPage__header"
      >
        Будь ласка, оберіть категорії питань:
      </h2>
      <div className="filterPage__categories">
        <button
          className={cn('filterPage__button', {
            'filterPage__button--chosen': chosenCategories.includes('history'),
          })}
          onClick={() => {handleChooseCategory('history')}}
        >
          Історія
        </button>
        <button
          className={cn('filterPage__button', {
            'filterPage__button--chosen': chosenCategories.includes('geography'),
          })}
          onClick={() => {handleChooseCategory('geography')}}
        >
          Географія
        </button>
      </div>
      <button
        className="filterPage__button filterPage__button--next"
        onClick={() => setPage(1)}
      >
        Далі
      </button>
    </div>
  );
}
