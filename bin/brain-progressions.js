#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from '../src/cli.js';
import { greetingUser } from './brain-games.js';

greetingUser()

const arithmeticProgressionGenerator = () =>{
  const progressionLength = Math.floor(Math.random() * 10 + 5)
  const firstTerm = Math.floor(Math.random() * 10)
  const step = Math.floor(Math.random() * 10)
  const progression = [firstTerm]
  for(let i = 0; i < progressionLength; i += 1){
    progression.push(progression[i] + step)
  }

  return progression
}

const replacementProgressionTerm = () =>{
    const progression = arithmeticProgressionGenerator()
    const replacementIndex = Math.floor(Math.random() * progression.length)
    const replacedNumber = progression[replacementIndex]
    progression[replacementIndex] = '..'

    return [progression.join(' '), replacedNumber]
}

const  interaction = (correctAnswer = 0) =>{
  if(correctAnswer === 3){
    return console.log(`Congratulations, ${name}!`)
  }
  const progressionData = replacementProgressionTerm()
  console.log(`Question: ${progressionData[0]}`);
  const answer = readlineSync.question('Your answer: ');

  if(+answer === progressionData[1]){
    console.log('Correct!')
    interaction(correctAnswer + 1)
  }else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${progressionData[1]}'.Let's try again, ${name}!`)

  }
}

interaction()