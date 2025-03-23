import readlineSync from 'readline-sync';
import isPrime from '../utilities/isPrime.js';

export default () => {
    const num = Math.floor(Math.random() * 100) + 1

    console.log(`Question: ${num}`)
    const answer = readlineSync.question('Your answer: ')
    const correctAnswer = isPrime(num)
    const database = [correctAnswer]
    if(answer === correctAnswer) {
        database.push('Correct')
    } else {
        database.push(answer)
    }
    return database
}