const brainPrime = () => {
  const num = Math.floor(Math.random() * 10);
  if (num < 2) return [num, 'no'];
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return [num, 'no'];
  }
  return [num, 'yes'];
};
export default brainPrime;
