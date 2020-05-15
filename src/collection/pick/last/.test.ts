import last from './';

describe('last', () => {
  it('should return last element of collection', () => {
    expect(last([1, 2, 3])).toBe(3);

    expect(last([])).toBeUndefined();

    expect(last('hello')).toBe('o');
  });
});
