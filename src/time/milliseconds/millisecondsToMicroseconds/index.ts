import { MICROSECONDS_A_MILLISECOND } from 'constant-land';

function millisecondsToMicroseconds(milliseconds: number) {
  return milliseconds * MICROSECONDS_A_MILLISECOND;
}

export default millisecondsToMicroseconds;
