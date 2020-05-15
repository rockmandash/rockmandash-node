import { NANOSECONDS_A_MILLISECOND } from 'constant-land';

function millisecondsToNanoseconds(milliseconds: number) {
  return milliseconds * NANOSECONDS_A_MILLISECOND;
}

export default millisecondsToNanoseconds;
