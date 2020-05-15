import { NANOSECONDS_A_MILLISECOND } from 'constant-land';

function nanosecondsToMilliseconds(nanoseconds: number) {
  return nanoseconds / NANOSECONDS_A_MILLISECOND;
}

export default nanosecondsToMilliseconds;
