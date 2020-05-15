import { MILLISECONDS_A_HOUR } from 'constant-land';

function millisecondsToHours(milliseconds: number) {
  return milliseconds / MILLISECONDS_A_HOUR;
}

export default millisecondsToHours;
