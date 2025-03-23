import readlineSync from 'readline-sync';
import isEven from '../utilities/isEven.js';

export default () => {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(randomNum);
  const database = [correctAnswer];
  if (answer === correctAnswer) {
    database.push('Correct');
  } else {
    database.push(answer);
  }
  return database;
};
