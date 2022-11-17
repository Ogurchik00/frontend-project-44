import readlineSync from 'readline-sync';

export let name = '';

const greetingUser = () => {
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default greetingUser;
