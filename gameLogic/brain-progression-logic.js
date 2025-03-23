import readlineSync from 'readline-sync';
import replacementProgressionElement from '../utilities/replacementProgressionElement.js';


export default () => {
const [prograssion, correctAnswer] = replacementProgressionElement()
    console.log(`Question: ${prograssion}`)
    const answer = readlineSync.question('Your answer: ')

    const database = [correctAnswer]
    if(answer === correctAnswer) {
        database.push('Correct')
    } else {
        database.push(answer)
    }
    return database
}