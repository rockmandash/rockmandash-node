import { MILLISECONDS_A_MINUTE } from 'constant-land';

function millisecondsToMinutes(milliseconds: number) {
  return milliseconds / MILLISECONDS_A_MINUTE;
}

export default millisecondsToMinutes;
