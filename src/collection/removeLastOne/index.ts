function removeLastOne<T>(arr: T[]): T;
function removeLastOne(str: string): string;

function removeLastOne<T>(collection: T[] | string) {
  return collection.slice(0, collection.length - 1);
}

export default removeLastOne;
