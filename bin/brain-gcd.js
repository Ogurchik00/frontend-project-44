#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import { greetingUser } from './brain-games.js';

greetingUser()

const nod = (...arr) =>{
    if(arr[0] === 0 || arr[1] === 0) return 0
    if(arr[0] < arr[1]){
        let t = arr[0]
        arr[0] = arr[1]
        arr[1] = t
    }
    if(arr[0] % arr[1] === 0) return arr[1]
    while (arr[0] % arr[1] !== 0){
        let t = arr[0]
        arr[0] = arr[1]
        arr[1] = t - arr[1] * Math.floor(t / arr[1])
    }
    return arr[1]
}


const  interaction = (correctAnswer = 0) =>{
  if(correctAnswer === 3){
    return console.log(`Congratulations, ${name}!`)
  }
  let num = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);
  console.log(`Question: ${num} ${num2}`);
  const answer = readlineSync.question('Your answer: ');

  if(+answer === nod(num, num2)){
    console.log('Correct!')
    interaction(correctAnswer + 1)
  }else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${nod(num, num2)}'.Let's try again, ${name}!`)
  }
}

interaction()