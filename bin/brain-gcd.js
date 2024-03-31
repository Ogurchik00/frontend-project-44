#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../src/greetings.js';

const nod = (num, numTwo) => {
  if(num == numTwo) return num    
  let remainder = 1
  while (remainder > 0) {
      
      if(num > numTwo) {
          if(num % numTwo == 0) return numTwo
          remainder = num % numTwo
          num = remainder
      } else {
          if(numTwo % num == 0) return num
          remainder = numTwo % num
          numTwo = remainder
      }
  }
}

const name = greetings()
console.log('Find the greatest common divisor of given numbers.')

const game = () => {
  for(let i = 0; i <= 3; i += 1) {
    
    if(i == 3) {
      return console.log(`Congratulations, ${name}!`)
    }

    const randomNum = Math.floor(Math.random() * 99 + 1)
    const randomNumTwo = Math.floor(Math.random() * 99 + 1)

    console.log(`Question: ${randomNum} ${randomNumTwo}`)
    const answer = readlineSync.question('Your answer: ');

    if(answer == nod(randomNum, randomNumTwo)) {
      console.log('Correct!')
    } else {
     return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${nod(randomNum, randomNumTwo)}'.
Let's try again, ${name}!`)
    }
  }
}

game()