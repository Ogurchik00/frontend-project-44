export default () => {
  const longProgression = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const stepProgression = Math.floor(Math.random() * 4) + 1;
  const firstElem = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const progression = [firstElem];
  for (let i = 0; i < longProgression; i += 1) {
    progression.push(progression[i] + stepProgression);
  }
  return progression;
};
