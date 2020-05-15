import daysToMilliseconds from './';

describe('daysToMilliseconds', () => {
  it('should convert Days To Milliseconds', () => {
    expect(daysToMilliseconds(1)).toBe(86_400_000);
    expect(daysToMilliseconds(1.5)).toBe(129_600_000);
    expect(daysToMilliseconds(3.4)).toBe(293_760_000);
  });
});
