import './index.scss';
import React, { useState } from 'react';
import { questions } from './data/questions';
import { history } from './data/history';
import { geography } from './data/geography';
import { Game } from './components/Game';
import { Result } from './components/Result/Result';
import { Filter } from './components/Filter/Filter';
import { Quantity } from './components/Quantity/Quantity';


export const App = () => {
  const [step, setStep] = useState(0);
  const [page, setPage] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [chosenCategories, setChosenCategories] = useState([]);
  
  const question = questions[step];

  const filterQuestions = () => {

  }

  const onAnswerClick = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  const filteredQuestions = filterQuestions();

  return (
    <div className="App">
      {page === 0 && (
      <Filter 
        setChosenCategories={setChosenCategories}
        chosenCategories={chosenCategories}
        setPage={setPage}
      />
    )}
      {page === 1 && (
      <Quantity 
        setChosenCategories={setChosenCategories}
        chosenCategories={chosenCategories}
        setPage={setPage}
      />
    )}
      {page > 1 && (
        <Game
          question={question}
          step={step}
          onAnswerClick={onAnswerClick}
        />
      )}

      {/* : <Result
          correct={correct}
        />} */}
    </div>
  );
}

