function head<T>(arr: T[]): T;
function head(str: string): string;

function head<T>(collection: T[] | string) {
  return collection[0];
}

export default head;
