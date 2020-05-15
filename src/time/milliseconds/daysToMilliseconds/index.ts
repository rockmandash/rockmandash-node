import { MILLISECONDS_A_DAY } from 'constant-land';

function daysToMilliseconds(days: number) {
  return days * MILLISECONDS_A_DAY;
}

export default daysToMilliseconds;
