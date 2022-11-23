const brainGcd = () => {
  const randomFirstNum = Math.floor(Math.random() * (10 - 1) + 1);
  const randomSecondNum = Math.floor(Math.random() * (10 - 1) + 1);

  const arrNum = [randomFirstNum, randomSecondNum];
  arrNum.sort();

  if (arrNum[0] % arrNum[1] === 0) return [`${randomFirstNum} ${randomSecondNum}`, `${arrNum[1]}`];
  while (arrNum[0] % arrNum[1] !== 0) {
    const t = arrNum[0];
    arrNum[0] = arrNum[1];
    arrNum[1] = t - arrNum[1] * Math.floor(t / arrNum[1]);
  }
  return [`${randomFirstNum} ${randomSecondNum}`, `${arrNum[1]}`];
};
export default brainGcd;
