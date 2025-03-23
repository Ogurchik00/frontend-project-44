export default (operandFirst, operandSecond) => {
    while (operandSecond !== 0) {
        const temp = operandSecond;
        operandSecond = operandFirst % operandSecond;
        operandFirst = temp;
      }
      return `${operandFirst}`;
}