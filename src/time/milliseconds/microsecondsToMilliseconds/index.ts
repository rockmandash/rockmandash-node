import { MICROSECONDS_A_MILLISECOND } from 'constant-land';

function microsecondsToMilliseconds(microseconds: number) {
  return microseconds / MICROSECONDS_A_MILLISECOND;
}

export default microsecondsToMilliseconds;
