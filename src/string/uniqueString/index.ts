import unique from '../../collection/unique';

function uniqueString(str: string) {
  return unique(str).join('');
}

export default uniqueString;
