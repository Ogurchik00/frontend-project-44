#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetings from '../src/greetings.js';


const sequenceGeneration = () => {
  const sequenceLength = Math.floor(Math.random() * 5 + 5)
  const progressionStep = Math.floor(Math.random() * 4 + 1)
  const progression = [Math.floor(Math.random())]

  for (let i = 0; i < sequenceLength; i += 1) {
      progression.push(progression[i] + progressionStep)
  }
  return progression
}

const elementReplacement = (progression) => {
  const numElementReplacement = Math.floor(Math.random() * progression.length) 
  const substitute = '..'
  const replacedElement = progression[numElementReplacement]
  progression[numElementReplacement] = substitute
  return [progression, replacedElement]
}


const name = greetings()
console.log('What number is missing in the progression?')

const game = () => {
  for(let i = 0; i <= 3; i += 1) {
    
    if(i == 3) {
      return console.log(`Congratulations, ${name}!`)
    }

    const [question, correctAnswer] = elementReplacement(sequenceGeneration())
    console.log(`Question: ${question.join(' ')}`)
    const answer = readlineSync.question('Your answer: ');

    if(answer == correctAnswer) {
      console.log('Correct!')
    } else {
     return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`)
    }
  }
}

game()