import average from './';

describe('average', () => {
  it('finds average value from all number in an Array', () => {
    expect(average([0, 1, 2, 3, 4, 5])).toEqual(2.5);
  });

  it('will throw error when passing invalid number ', () => {
    expect(average([])).toBeNaN();
  });
});
