import unique from '../../collection/unique';

function union<T>(...arrs: T[][]): T[] {
  return unique(arrs.flat());
}

export default union;
