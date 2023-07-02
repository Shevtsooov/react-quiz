import './index.scss';
import React, { useState } from 'react';

const questions = [
  {
    title: 'React - это ... ?',
    answers: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    answers: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    answers: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  const correctForm = correct < 5
    ? 'питання'
    : 'иитань'

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

function Game({ question, step, onAnswerClick }) {
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
          question={question}
          step={step}
          onAnswerClick={onAnswerClick}
        />
      )
      : <Result correct={correct} />}
    </div>
  );
}

