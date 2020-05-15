import parseMilliseconds from '../parseMilliseconds';
import daysToMilliseconds from '../daysToMilliseconds';
import hoursToMilliseconds from '../hoursToMilliseconds';
import minutesToMilliseconds from '../minutesToMilliseconds';
import secondsToMilliseconds from '../secondsToMilliseconds';
import microsecondsToMilliseconds from '../microsecondsToMilliseconds';
import nanosecondsToMilliseconds from '../nanosecondsToMilliseconds';

function toMilliseconds({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  milliseconds = 0,
  microseconds = 0,
  nanoseconds = 0
}: Partial<ReturnType<typeof parseMilliseconds>>) {
  return (
    daysToMilliseconds(days) +
    hoursToMilliseconds(hours) +
    minutesToMilliseconds(minutes) +
    secondsToMilliseconds(seconds) +
    milliseconds +
    microsecondsToMilliseconds(microseconds) +
    nanosecondsToMilliseconds(nanoseconds)
  );
}

export default toMilliseconds;
