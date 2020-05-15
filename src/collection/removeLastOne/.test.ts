import removeLastOne from './';

describe('removeLastOne', () => {
  it('should return collection without last one element', () => {
    expect(removeLastOne([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4]);
    expect(removeLastOne('12345')).toBe('1234');
    expect(removeLastOne([])).toEqual([]);
  });
});
