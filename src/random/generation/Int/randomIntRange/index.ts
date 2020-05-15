import randomInt from '../randomInt';

function randomIntRange(min: number, max: number) {
  return randomInt(max - min + 1) + min;
}

export default randomIntRange;
