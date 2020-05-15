import initial from './';

describe('initial', () => {
  it('should Gets all but the last element of array.', () => {
    expect(initial([1, 2, 3])).toEqual([1, 2]);

    expect(initial([])).toEqual([]);
  });
});
