function unique(str: string): string[];
function unique<T>(arr: T[]): T[];

function unique(arrOrString: any): any {
  return Array.from(new Set(arrOrString));
}

export default unique;
