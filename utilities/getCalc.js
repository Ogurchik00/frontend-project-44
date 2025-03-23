export default (operandFirst, operandSecond, operation) => {
  switch (operation) {
    case '+':
      return `${operandFirst + operandSecond}`;
    case '-':
      return `${operandFirst - operandSecond}`;
    case '*':
      return `${operandFirst * operandSecond}`;
    default: return null;
  }
};
