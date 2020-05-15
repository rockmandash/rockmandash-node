import times from './';

describe('times', () => {
  it('will loop n times and return new Array', () => {
    expect(times(10, index => index)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    expect(times(3, () => {})).toEqual([undefined, undefined, undefined]);

    expect(times(0, () => {})).toEqual([]);
  });

  it('will throw if passing invalid value', () => {
    expect(() => {
      times(-1, () => {});
    }).toThrow();

    expect(() => {
      times(10.5, () => {});
    }).toThrow();
  });
});
