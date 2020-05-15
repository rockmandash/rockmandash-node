import splitOnFirst from './';

describe('splitOnFirst', () => {
  it('should split on first', () => {
    expect(splitOnFirst('a-b-c', '-')).toEqual(['a', 'b-c']);

    expect(splitOnFirst('key:value:value2', ':')).toEqual([
      'key',
      'value:value2'
    ]);

    expect(splitOnFirst('a---b---c', '---')).toEqual(['a', 'b---c']);

    expect(splitOnFirst('a-b-c', '+')).toEqual(['a-b-c']);

    expect(splitOnFirst('abc', '')).toEqual(['abc']);
  });
});
