function splitOnLast(str: string, separator: string): [string, string?] {
  if (separator === '') {
    return [str];
  }

  const separatorIndex = str.lastIndexOf(separator);

  if (separatorIndex === -1) {
    return [str];
  }

  return [
    str.slice(0, separatorIndex),
    str.slice(separatorIndex + separator.length)
  ];
}

export default splitOnLast;
