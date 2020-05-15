import head from '../../collection/pick/head';

function popOneAt<T>(arr: T[], index: number): T {
  return head(arr.splice(index, 1));
}

export default popOneAt;
