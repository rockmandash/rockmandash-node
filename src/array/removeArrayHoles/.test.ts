import removeArrayHoles from './';

describe('removeArrayHoles', () => {
  it('should filter Array Holes', () => {
    expect(removeArrayHoles([0, null, '', undefined, , ,])).toEqual([
      0,
      null,
      '',
      undefined
    ]);
  });
});
