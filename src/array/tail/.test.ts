import tail from './';

describe('tail', () => {
  it('should Gets all but the first element of array.', () => {
    expect(tail([1, 2, 3])).toEqual([2, 3]);

    expect(tail([])).toEqual([]);
  });
});
