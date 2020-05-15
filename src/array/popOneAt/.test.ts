import popOneAt from './';

describe('popOneAt', () => {
  it('should Remove one element from an `array` at specific index, removed item will be returned.', () => {
    const arr = [1, 2, 3, 4];
    expect(popOneAt(arr, 2)).toBe(3);
    expect(arr).toEqual([1, 2, 4]);
  });
});
