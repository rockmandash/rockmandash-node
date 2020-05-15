import loop from './';

describe('loop', () => {
  it('will loop n times and return undefined ', () => {
    let arr: number[] = [];

    expect(
      loop(10, index => {
        arr.push(index);
      })
    ).toBeUndefined();

    expect(arr).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    let arr2: number[] = [];

    expect(
      loop(0, index => {
        arr2.push(index);
      })
    ).toBeUndefined();

    expect(arr2).toEqual([]);

    let arr3: number[] = [];

    expect(
      loop(10.5, index => {
        arr3.push(index);
      })
    ).toBeUndefined();

    expect(arr3).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    let arr4: number[] = [];

    expect(
      loop(-1, index => {
        arr4.push(index);
      })
    ).toBeUndefined();

    expect(arr2).toEqual([]);
  });
});
