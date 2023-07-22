import './index.scss';
import React, { useState } from 'react';
import { questions } from './data/questions';
import { Game } from './components/Game';
import { Result } from './components/Result';


export const App = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  
  const question = questions[step];

  const onAnswerClick = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {step !== questions.length
      ? (
        <Game
          questions={questions}
          question={question}
          step={step}
          onAnswerClick={onAnswerClick}
        />
      )
      : <Result
          questions={questions}
          correct={correct}
        />}
    </div>
  );
}

