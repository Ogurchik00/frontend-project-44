import getProgression from './getProgression.js';

export default () => {
  const progression = getProgression();
  const progressionLength = progression.length;
  const replaceableElement = Math.floor(Math.random() * (progressionLength + 1));
  const temp = progression[replaceableElement];
  progression[replaceableElement] = '..';
  return [progression.join(' '), `${temp}`];
};
