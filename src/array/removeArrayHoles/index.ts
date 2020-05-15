function removeArrayHoles<T>(arr: T[]): T[] {
  return arr.filter(() => true);
}

export default removeArrayHoles;
