import readlineSync from 'readline-sync';
import selectionOperation from '../utilities/selectionOperation.js';
import getCalc from '../utilities/getCalc.js';

export default () => {
  const operandFirst = Math.floor(Math.random() * 100) + 1;
  const operandSecond = Math.floor(Math.random() * 100) + 1;
  const operation = selectionOperation();
  console.log(`Question: ${operandFirst} ${operation} ${operandSecond}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = getCalc(operandFirst, operandSecond, operation);
  const database = [correctAnswer];
  if (answer === correctAnswer) {
    database.push('Correct');
  } else {
    database.push(answer);
  }
  return database;
};
