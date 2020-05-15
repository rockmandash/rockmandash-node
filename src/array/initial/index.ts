function initial<T>(arr: T[]): T[] {
  const newArr = Array.from(arr);
  newArr.pop();
  return newArr;
}

export default initial;
