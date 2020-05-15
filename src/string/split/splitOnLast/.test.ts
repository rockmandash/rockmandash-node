import splitOnLast from './';

describe('splitOnLast', () => {
  it('should split on last', () => {
    expect(splitOnLast('a-b-c', '-')).toEqual(['a-b', 'c']);

    expect(splitOnLast('key:value:value2', ':')).toEqual([
      'key:value',
      'value2'
    ]);

    expect(splitOnLast('a---b---c', '---')).toEqual(['a---b', 'c']);

    expect(splitOnLast('a-b-c', '+')).toEqual(['a-b-c']);

    expect(splitOnLast('abc', '')).toEqual(['abc']);
  });
});
