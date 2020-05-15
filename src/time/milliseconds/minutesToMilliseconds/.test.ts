import minutesToMilliseconds from './';

describe('minutesToMilliseconds', () => {
  it('should convert Minutes To Milliseconds', () => {
    expect(minutesToMilliseconds(1)).toBe(60_000);
    expect(minutesToMilliseconds(1.5)).toBe(90_000);
    expect(minutesToMilliseconds(3.4)).toBe(204_000);
  });
});
