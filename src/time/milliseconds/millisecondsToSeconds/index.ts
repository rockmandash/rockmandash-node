import { MILLISECONDS_A_SECOND } from 'constant-land';

function millisecondsToSeconds(milliseconds: number) {
  return milliseconds / MILLISECONDS_A_SECOND;
}

export default millisecondsToSeconds;
