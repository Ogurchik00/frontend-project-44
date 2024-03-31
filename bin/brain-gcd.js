#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../src/greetings.js';

const nod = (num, numTwo) => {
  let firstNum = num;
  let secondNum = numTwo;
  if (firstNum === secondNum) return firstNum;
  let remainder = 1;
  while (remainder > 0) {
    if (firstNum > secondNum) {
      if (firstNum % secondNum === 0) return secondNum;
      remainder = firstNum % secondNum;
      firstNum = remainder;
    } else {
      if (secondNum % firstNum === 0) return firstNum;
      remainder = secondNum % firstNum;
      secondNum = remainder;
    }
  }
  return '';
};

const name = greetings();
console.log('Find the greatest common divisor of given numbers.');

const game = () => {
  for (let i = 0; i <= 3; i += 1) {
    if (i === 3) {
      return console.log(`Congratulations, ${name}!`);
    }

    const randomNum = Math.floor(Math.random() * 99 + 1);
    const randomNumTwo = Math.floor(Math.random() * 99 + 1);

    console.log(`Question: ${randomNum} ${randomNumTwo}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === `${nod(randomNum, randomNumTwo)}`) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${nod(randomNum, randomNumTwo)}'.
Let's try again, ${name}!`);
    }
  }
  return '';
};

game();
