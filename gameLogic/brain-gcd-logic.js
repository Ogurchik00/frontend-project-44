import readlineSync from 'readline-sync';
import getGcd from "../utilities/getGcd.js";

export default () => {
    const operandFirst  = Math.floor(Math.random() * 100) + 1
    const operandSecond  = Math.floor(Math.random() * 100) + 1

    console.log(`Question: ${operandFirst} ${operandSecond}`)
    const answer = readlineSync.question('Your answer: ')
    const correctAnswer = getGcd(operandFirst, operandSecond)
    const database = [correctAnswer]
    if(answer === correctAnswer) {
        database.push('Correct')
    } else {
        database.push(answer)
    }
    return database
}