import swapArrayElement from '../swapArrayElement';

describe('swapArrayElement', () => {
  it('should swap two array elements based on given indexes.', () => {
    const arr = ['a', 'b', 'c'];

    swapArrayElement(arr, 0, 2);

    expect(arr).toEqual(['c', 'b', 'a']);
  });

  it('should swap two array elements based on given indexes.', () => {
    const arr = [
      { hello: 'world1' },
      { hello: 'world2' },
      { hello: 'world3' },
      { hello: 'world4' }
    ];

    swapArrayElement(arr, 1, 3);

    expect(arr).toEqual([
      { hello: 'world1' },
      { hello: 'world4' },
      { hello: 'world3' },
      { hello: 'world2' }
    ]);
  });
});
