const operationGenerator = () => {
  const arrayOperations = ['+', '-', '*'];
  return arrayOperations[Math.floor(Math.random() * arrayOperations.length)];
};

const brainCalc = () => {
  const randomFirstNum = Math.floor(Math.random() * 10);
  const randomSecondNum = Math.floor(Math.random() * 10);
  const operation = operationGenerator();

  switch (operation) {
    case '+': {
      return [`${randomFirstNum} ${operation} ${randomSecondNum}`, `${randomFirstNum + randomSecondNum}`];
    }
    case '-': {
      return [`${randomFirstNum} ${operation} ${randomSecondNum}`, `${randomFirstNum - randomSecondNum}`];
    }
    case '*': {
      return [`${randomFirstNum} ${operation} ${randomSecondNum}`, `${randomFirstNum * randomSecondNum}`];
    }
    default: {
      return 0;
    }
  }
};
export default brainCalc;
