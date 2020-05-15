function sum(arr: number[]): number {
  return arr.reduce((prev, current) => prev + current, 0);
}

export default sum;
