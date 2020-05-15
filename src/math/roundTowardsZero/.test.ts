import roundTowardsZero from './';

describe('roundTowardsZero', () => {
  it('should round number toward zero', () => {
    expect(roundTowardsZero(1.9)).toBe(1);
    expect(roundTowardsZero(4.4)).toBe(4);
    expect(roundTowardsZero(0.2)).toBe(+0);
    expect(roundTowardsZero(-1.9)).toBe(-1);
    expect(roundTowardsZero(-34.9)).toBe(-34);
    expect(roundTowardsZero(-0.9)).toBe(-0);
  });
});
