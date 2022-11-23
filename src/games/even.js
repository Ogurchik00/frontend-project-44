const parityCheck = (num) => {
  if (num % 2 === 0) return 'yes';
  return 'no';
};

const brainEven = () => {
  const randomNum = Math.floor(Math.random() * 10);
  const correctAnswer = parityCheck(randomNum);
  return [randomNum, correctAnswer];
};

export default brainEven;
