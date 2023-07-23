import React, { useState } from 'react';
import cn from 'classnames';

import './Quantity.scss';

export const Quantity = ({
  setQuantity,
  quantity,
  setPage,
}) => {
  const [isWarning, setIsWarning] = useState(false);

  const handleChooseQuantity = (chosenQuantity) => {

    if (quantity === chosenQuantity) {
      setQuantity(0);
      return;
    }

    setQuantity(chosenQuantity);
  };

  const handleStartGame = (page) => {
    if (quantity === 0) {
      setIsWarning(true);
      setTimeout(() => {
        setIsWarning(false);
      }, 2500);

      return;
    }

    setPage(page);
  }

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
            'quantityPage__button--chosen': quantity === 5,
          })}
          onClick={() => {handleChooseQuantity(5)}}
        >
          5
        </button>
        <button
          className={cn('quantityPage__button', {
            'quantityPage__button--chosen': quantity === 10,
          })}
          onClick={() => {handleChooseQuantity(10)}}
        >
          10
        </button>
      </div>
      <button
        className="quantityPage__button quantityPage__button--next"
        onClick={() => handleStartGame(2)}
      >
        Почати
      </button>
        <p
        className={cn('quantityPage__warning', {
          'quantityPage__warning--visible': isWarning,
        })}
        >
          Будь ласка, зробіть вибір
        </p>
    </div>
  );
}
