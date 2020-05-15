import roundTowardsZero from '../../../math/roundTowardsZero';
import millisecondsToDays from '../millisecondsToDays';
import millisecondsToHours from '../millisecondsToHours';
import millisecondsToMinutes from '../millisecondsToMinutes';
import millisecondsToSeconds from '../millisecondsToSeconds';
import millisecondsToMicroseconds from '../millisecondsToMicroseconds';
import millisecondsToNanoseconds from '../millisecondsToNanoseconds';
import {
  HOURS_A_DAY,
  MINUTES_A_HOUR,
  SECONDS_A_MINUTE,
  MILLISECONDS_A_SECOND,
  MICROSECONDS_A_MILLISECOND,
  NANOSECONDS_A_MICROSECONDS
} from 'constant-land';

function parseMilliseconds(milliseconds: number) {
  return {
    days: roundTowardsZero(millisecondsToDays(milliseconds)),
    hours: roundTowardsZero(millisecondsToHours(milliseconds)) % HOURS_A_DAY,
    minutes:
      roundTowardsZero(millisecondsToMinutes(milliseconds)) % MINUTES_A_HOUR,
    seconds:
      roundTowardsZero(millisecondsToSeconds(milliseconds)) % SECONDS_A_MINUTE,
    milliseconds: roundTowardsZero(milliseconds) % MILLISECONDS_A_SECOND,
    microseconds:
      roundTowardsZero(millisecondsToMicroseconds(milliseconds)) %
      MICROSECONDS_A_MILLISECOND,
    nanoseconds:
      roundTowardsZero(millisecondsToNanoseconds(milliseconds)) %
      NANOSECONDS_A_MICROSECONDS
  };
}

export default parseMilliseconds;
