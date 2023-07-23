import { geography } from '../../data/geography';
import { history } from '../../data/history';

const categories = [history, geography];

export const filterQuestions = (chosenCategories) => {
  let questions = [];
  
  for (let i = 0; i < chosenCategories.length; i++) {
    const chosenCategory = chosenCategories[i];
    const category = categories.find(category => category.title === chosenCategory);
    
    if (category) {
      questions = [
        ...questions,
        ...category.questions,
      ];
    }
  }
  
  return questions;
}

export const getRandomQuestions = (array, count) => {
  const shuffledArray = array.slice().sort(() => 0.5 - Math.random());
  return shuffledArray.slice(0, count);
};
