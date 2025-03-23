export default (operandFirst, operandSecond) => {
  let a = operandFirst;
  let b = operandSecond;

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return `${a}`;
};
