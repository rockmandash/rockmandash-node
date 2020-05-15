function swapArrayElement(arr: any[], index1: number, index2: number): void {
  const tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
}

export default swapArrayElement;
