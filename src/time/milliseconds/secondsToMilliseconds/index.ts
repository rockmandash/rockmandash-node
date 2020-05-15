import { MILLISECONDS_A_SECOND } from 'constant-land';

function secondsToMilliseconds(seconds: number) {
  return seconds * MILLISECONDS_A_SECOND;
}

export default secondsToMilliseconds;
