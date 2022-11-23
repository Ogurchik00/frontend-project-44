const arithmeticProgressionGenerator = () => {
  const progressionLength = Math.floor(Math.random() * 10 + 5);
  const firstTerm = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 10);
  const progression = [firstTerm];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progression[i] + step);
  }

  return progression;
};

const brainProgression = () => {
  const progression = arithmeticProgressionGenerator();
  const replacementIndex = Math.floor(Math.random() * progression.length);
  const replacedNumber = progression[replacementIndex];
  progression[replacementIndex] = '..';
  return [progression.join(' '), `${replacedNumber}`];
};

export default brainProgression;
