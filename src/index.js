#!/usr/bin/env node

import readlineSync from 'readline-sync';

const maxWinStreak = 3;

const interaction = (numberCorrectAnswers, game, name) => {
  const [question, correctAnswer] = game();

  if (numberCorrectAnswers === maxWinStreak) return console.log(`Congratulations, ${name}!`);

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    interaction(numberCorrectAnswers + 1, game, name);
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
  }
};

export default interaction;
