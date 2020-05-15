function tail<T>(arr: T[]): T[] {
  const newArr = Array.from(arr);
  newArr.shift();
  return newArr;
}

export default tail;
