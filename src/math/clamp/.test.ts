import clamp from './';

describe('clamp', () => {
  it('clamps `number` between `min` and `max` bounds.', () => {
    let value1 = 5;

    expect(clamp(value1, 1, 12)).toBe(5);
    expect(clamp(value1, 8.2, 9.4)).toBe(8.2);
    expect(clamp(value1, 3.9, 4.2)).toBe(4.2);
    expect(clamp(value1, 0, 0)).toBe(0);

    let value2 = -2;

    expect(clamp(value2, 1, 12)).toBe(1);
    expect(clamp(value2, -7, -4)).toBe(-4);
  });
});
