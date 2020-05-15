import randomIntRange from '../generation/Int/randomIntRange';

function randomPickOne<T>(arr: T[]): T {
  return arr[randomIntRange(0, arr.length - 1)];
}

export default randomPickOne;
