import hoursToMilliseconds from './';

describe('hoursToMilliseconds', () => {
  it('should convert Hours To Milliseconds', () => {
    expect(hoursToMilliseconds(1)).toBe(3_600_000);
    expect(hoursToMilliseconds(1.5)).toBe(5_400_000);
    expect(hoursToMilliseconds(3.4)).toBe(12_240_000);
  });
});
