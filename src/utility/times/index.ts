import loop from '../loop';

function times<T>(loopTimes: number, callback: (index: number) => T): T[] {
  let result = new Array(loopTimes);

  loop(loopTimes, index => {
    result[index] = callback(index);
  });

  return result;
}

export default times;
