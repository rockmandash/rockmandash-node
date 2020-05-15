import { MILLISECONDS_A_DAY } from 'constant-land';

function millisecondsToDays(milliseconds: number) {
  return milliseconds / MILLISECONDS_A_DAY;
}

export default millisecondsToDays;
