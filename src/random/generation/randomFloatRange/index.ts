import randomFloat from '../randomFloat';

function randomFloatRange(min: number, max: number) {
  return randomFloat(max - min) + min;
}

export default randomFloatRange;
