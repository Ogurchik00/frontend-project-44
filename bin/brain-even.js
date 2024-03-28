#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../src/greetings.js';

const parity = (num) => {
  if(num % 2 == 0) return 'yes'
  return 'no'
}

const name = greetings()
console.log('Answer "yes" if the number is even, otherwise answer "no".')

const game = () => {
  for(let i = 0; i <= 3; i += 1) {
    
    if(i == 3) {
      return console.log(`Congratulations, ${name}!`)
    }

    const randomNumber = Math.floor(Math.random() * 99 + 1)
    console.log(`Question: ${randomNumber}`)
    const answer = readlineSync.question('Your answer: ');

    if(answer === parity(randomNumber)) {
      console.log('Correct!')
    } else {
     return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${parity(randomNumber)}'.
Let's try again, ${name}!`)
    }
  }
}

game()
