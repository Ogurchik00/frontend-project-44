#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../src/greetings.js';


const name = greetings()
console.log('What is the result of the expression?')

const operator = ['+', '-', '*']

const calc = (num, numTwo, operator) => {
  switch(operator) {
    case '+': 
      return num + numTwo;
      break;
    case '-': 
      return num - numTwo;
      break;
    case '*':
      return num * numTwo;
      break;
  }
}

const game = () => {
  for(let i = 0; i <= 3; i += 1) {
    
    if(i == 3) {
      return console.log(`Congratulations, ${name}!`)
    }

    const randomNum = Math.floor(Math.random() * 99 + 1)
    const randomNumTwo = Math.floor(Math.random() * 99 + 1)
    const operation = operator[Math.floor(Math.random() * 3)]
    console.log(`Question: ${randomNum} ${operation} ${randomNumTwo}`)
    const answer = readlineSync.question('Your answer: ');

    if(answer == calc(randomNum, randomNumTwo, operation)) {
      console.log('Correct!')
    } else {
     return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${calc(randomNum, randomNumTwo, operation)}'.
Let's try again, ${name}!`)
    }
  }
}

game()