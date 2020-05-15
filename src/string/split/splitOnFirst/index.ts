function splitOnFirst(str: string, separator: string): [string, string?] {
  if (separator === '') {
    return [str];
  }

  const separatorIndex = str.indexOf(separator);

  if (separatorIndex === -1) {
    return [str];
  }

  return [
    str.slice(0, separatorIndex),
    str.slice(separatorIndex + separator.length)
  ];
}

export default splitOnFirst;
