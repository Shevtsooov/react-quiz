import './Filter.scss';
import React, { useState } from 'react';

import cn from 'classnames';

export const Filter = ({
  setChosenCategories,
  chosenCategories,
  setPage,
}) => {
  const [isWarning, setIsWarning] = useState(false);

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
    console.log(chosenCategories)
  };

  const handleContinue = (page) => {
    if (chosenCategories.length === 0) {
      setIsWarning(true);
      setTimeout(() => {
        setIsWarning(false);
      }, 2500);

      return;
    }

    setPage(page);
  }

  const categories = [
    {
      title: 'Історія',
      nickname: 'history',
    },
    {
      title: 'Спорт',
      nickname: 'sport',
    },
    {
      title: 'Географія',
      nickname: 'geography',
    },
    {
      title: 'Інші питання',
      nickname: 'others',
    },
  ]

  return (
    <div className="filterPage">
      <h2
      className="filterPage__header"
      >
        Будь ласка, оберіть категорії питань:
      </h2>
      <div className="filterPage__categories">
        {categories.map(category => (
          <button
          className={cn('filterPage__button', {
            'filterPage__button--chosen': chosenCategories.includes(category.nickname),
          })}
          key={category.nickname}
          onClick={() => {handleChooseCategory(category.nickname)}}
        >
          {category.title}
        </button>
        ))}
        {/* <button
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
        </button> */}
      </div>
      <button
        className="filterPage__button filterPage__button--next"
        onClick={() => handleContinue(1)}
      >
        Далі
      </button>
      <p
        className={cn('filterPage__warning', {
          'filterPage__warning--visible': isWarning,
        })}
        >
          Будь ласка, оберіть категорії питань
        </p>
    </div>
  );
}
