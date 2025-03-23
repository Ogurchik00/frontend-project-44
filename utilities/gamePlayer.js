import greetings from "./greetings.js"

const gamePlayer = (gameLogic, ruleGame) => {
	console.log('Welcome to the Brain Games!')
	const name = greetings()
	console.log(ruleGame)

  for(let i = 0; i < 3; i += 1) {
		const [correctAnswer, userResponse] = gameLogic()
		if(userResponse === 'Correct') {
			console.log(`${userResponse}!`)
		} else {
			console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`)
			break
		}
		if(i === 2) {
			console.log(`Congratulations, ${name}!`)
		}
	}
}   

export default gamePlayer

