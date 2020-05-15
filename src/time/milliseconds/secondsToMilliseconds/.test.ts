import secondsToMilliseconds from './';

describe('secondsToMilliseconds', () => {
  it('should convert Seconds To Milliseconds', () => {
    expect(secondsToMilliseconds(1)).toBe(1_000);
    expect(secondsToMilliseconds(1.5)).toBe(1_500);
    expect(secondsToMilliseconds(3.4)).toBe(3_400);
  });
});
