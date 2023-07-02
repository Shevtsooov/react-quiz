import './index.scss';
import React, { useState } from 'react';

const questions = [
  {
    title: 'Як називається найбільша технологічна компанія в Південній Кореї?',
    answers: ['Toyota', 'Samsung', 'Xiaomi'],
    correct: 1,
  },
  {
    title: 'Cтолиця Португалії?',
    answers: ['Порту', 'Лісабон', 'Мадрид'],
    correct: 1,
  },
  {
    title: 'Який актор здобув найкращого актора «Оскар» за фільми «Філадельфія» (1993) та «Форест Гамп» (1994)?',
    answers: [
      'Річард Гір',
      'Том Гарді',
      'Том Хенкс',
    ],
    correct: 2,
  },
  {
    title: 'Який футбольний клуб переміг у Лізі Чемпіонів 2023 року',
    answers: [
      'Інтер',
      'Манчестер Сіті',
      'Манчестер Юнайтед',
    ],
    correct: 1,
  },
  {
    title: 'Яка кількість гравців у волейбольній команді',
    answers: [
      '11',
      '5',
      '6',
    ],
    correct: 2,
  },
  {
    title: 'Як звуть гурт з такими учасниками: Джон Дікон, Брайан Мей, Фредді Мерк\'юрі, Роджер Тейлор?',
    answers: [
      'Beatles',
      'Queen',
      'ABBA',
    ],
    correct: 1,
  },
  {
    title: 'Який співак був відомий серед іншого під назвою "Король поп-музики" та "Рукавичка"?',
    answers: [
      'Майкл Джордан',
      'Майкл Джексон',
      'Елвіс Преслі',
    ],
    correct: 1,
  },
  {
    title: 'Яка американська поп-зірка мала успіх у чартах 2015 року із синглами "Sorry" та "Love Yourself"?',
    answers: [
      'Justin Bieber',
      'Eminem',
      'Taylor Swift',
    ],
    correct: 0,
  },
  {
    title: 'Де у світі виставлена ​​«Мона Ліза» Леонардо да Вінчі?',
    answers: [
      'Музей ван Гога, Амстердам, Нідерланди',
      'Лондонська національна галерея, Лондон, Велика Британія',
      'Лувр, Париж, Франція',
    ],
    correct: 2,
  },
  {
    title: 'Назвіть країну, в якій можна знайти Колізей',
    answers: [
      'Ватикан',
      'Італія',
      'Австрія',
    ],
    correct: 1,
  },
  {
    title: 'Назвіть країну, в якій можна знайти Статую Свободи',
    answers: [
      'Англія',
      'Франція',
      'США',
    ],
    correct: 2,
  },
  {
    title: 'Назвіть країну, в якій можна знайти Тадж-Махал',
    answers: [
      'Індія',
      'Китай',
      'Бангладеш',
    ],
    correct: 0,
  },
  {
    title: 'Назвіть країну, в якій можна знайти Стоунхендж',
    answers: [
      'Бельгія',
      'Англія',
      'Шотландій',
    ],
    correct: 1,
  },
  {
    title: 'Закінчення Першої світової війни:',
    answers: [
      '1818',
      '1945',
      '1918',
    ],
    correct: 2,
  },
  {
    title: 'У Дайнеріс є 3 дракони, двох звати Дрогон і Рейгал, як звуть третього?',
    answers: [
      'Візеріон',
      'Візеріс',
      'Драгал',
    ],
    correct: 0,
  },
  {
    title: 'Столиця Кіпру',
    answers: [
      'Лімасол',
      'Нікосія',
      'Ларнака',
    ],
    correct: 1,
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

