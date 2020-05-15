import roundTowardsZero from '../../../../math/roundTowardsZero';

function randomInt(num: number) {
  return roundTowardsZero(Math.random() * num);
}

export default randomInt;
