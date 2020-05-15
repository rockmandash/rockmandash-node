import sum from '../sum';

function average(arr: number[]): number {
  return sum(arr) / arr.length;
}

export default average;
