#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js'
import { greetingUser } from './brain-games.js'

greetingUser()

console.log('Answer "yes" if the number is even, otherwise answer "no".')

const parityCheck = (num) =>{
    if(num % 2 === 0) return 'yes'
    return 'no'
}

const evenNumber = (correctAnswer = 0) =>{
    if(correctAnswer === 3) return console.log(`Congratulations, ${name}!`)
    const num = Math.floor(Math.random() * 10)
    console.log(`Question: ${num}`)
    const answer = readlineSync.question('Your answer: ');
    if(answer === parityCheck(num)){
        console.log('Correct!')
        evenNumber(correctAnswer + 1)
    }else{
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${parityCheck(num)}".\nLet's try again, ${name}!`)
    }
}

evenNumber()