function last<T>(arr: T[]): T;
function last(str: string): string;

function last<T>(collection: T[] | string) {
  return collection[collection.length - 1];
}

export default last;
