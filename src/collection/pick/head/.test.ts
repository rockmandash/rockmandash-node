import head from './';

describe('head', () => {
  it('should return first element of collection', () => {
    expect(head([1, 2, 3])).toBe(1);

    expect(head([])).toBeUndefined();

    expect(head('hello')).toBe('h');
  });
});
