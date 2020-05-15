import { MILLISECONDS_A_HOUR } from 'constant-land';

function hoursToMilliseconds(hours: number) {
  return hours * MILLISECONDS_A_HOUR;
}

export default hoursToMilliseconds;
