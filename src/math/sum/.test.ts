import sum from './';

describe('sum', () => {
  it('adds all number in an Array', () => {
    expect(sum([0, 1, 2, 3, 4, 5])).toEqual(15);
    expect(sum([])).toEqual(0);
    expect(sum([-1, -2])).toEqual(-3);
  });
});
