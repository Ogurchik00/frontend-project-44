#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js'
import { greetingUser } from './brain-games.js'

greetingUser()

const operationGenerator = () =>{
  const arrayOperations = ['+','-','/','*']
  return arrayOperations[ Math.floor(Math.random() * arrayOperations.length) ]
}

const helper = (num, num2, operation) =>{
  switch (operation){
    case '+': {
      return num + num2
    }
    case '-': {
      return num - num2
    }
    case '*': {
      return num * num2
    }
    case '/': {
      return num / num2
    }
  }
}

const  interaction = (correctAnswer = 0) =>{
  if(correctAnswer === 3){
    return console.log(`Congratulations, ${name}!`)
  }
  let num = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);
  let operation = operationGenerator();
  console.log(`Question: ${num} ${operation} ${num2}`);
  const answer = readlineSync.question('Your answer: ');

  if(+answer === helper(num, num2, operation)){
    console.log('Correct!')
    interaction(correctAnswer + 1)
  }else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${helper(num, num2, operation)}'.Let's try again, ${name}!`)
  }
}

interaction()


