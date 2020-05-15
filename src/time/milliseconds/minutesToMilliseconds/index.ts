import { MILLISECONDS_A_MINUTE } from 'constant-land';

function minutesToMilliseconds(minutes: number) {
  return minutes * MILLISECONDS_A_MINUTE;
}

export default minutesToMilliseconds;
