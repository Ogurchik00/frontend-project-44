#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import { greetingUser } from './brain-games.js';

greetingUser()


console.log('Answer "yes" if the number is even, otherwise answer "no".')

const primalityCheck = (num) =>{
    if(num < 2) return 'no'
    for(let i = 2; i <= num / 2; i += 1){
        if(num % i == 0) return 'no'
    } 
    return 'yes'
}

const interaction = (correctAnswer = 0) =>{
    if(correctAnswer === 3) return console.log(`Congratulations, ${name}!`)
    const num = Math.floor(Math.random() * 10)

    console.log(`Question: ${num}`)
    const answer = readlineSync.question('Your answer: ');
    if(answer === primalityCheck(num)){
        console.log('Correct!')
        interaction(correctAnswer + 1)
    }else{
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${primalityCheck(num)}".\nLet's try again, ${name}!`)
    }
}
  
  interaction()
