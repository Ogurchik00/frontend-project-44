#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../src/greetings.js';

const isPrime = (num) => {
  if(num < 2) return 'no'
  for (let i = 2; i < num; i += 1) {
    if(num % i === 0) return 'no'
  }
  return 'yes'
}

const name = greetings()
console.log('Answer "yes" if the number is even, otherwise answer "no".')

const game = () => {
  for(let i = 0; i <= 3; i += 1) {
    
    if(i == 3) {
      return console.log(`Congratulations, ${name}!`)
    }

    const randomNum = Math.floor(Math.random() * 99 + 1)

    console.log(`Question: ${randomNum}`)
    const answer = readlineSync.question('Your answer: ');

    if(answer == isPrime(randomNum)) {
      console.log('Correct!')
    } else {
     return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime(randomNum)}'.
Let's try again, ${name}!`)
    }
  }
}

game()


