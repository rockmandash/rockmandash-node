import randomIntRange from '../generation/Int/randomIntRange';
import swapArrayElement from '../../array/swapArrayElement';
import loop from '../../utility/loop';

function shuffle<T>(arr: T[]): T[] {
  const result = Array.from(arr);

  if (arr.length > 0) {
    loop(result.length - 1, index => {
      const current = result.length - 1 - index;
      const randomIndex = randomIntRange(0, current);
      swapArrayElement(result, current, randomIndex);
    });
  }

  return result;
}

export default shuffle;
