export default () => {
  const operationList = ['+', '-', '*'];
  const randomNumber = Math.floor(Math.random() * 3);
  return operationList[randomNumber];
};
