import millisecondsToMicroseconds from './';

describe('millisecondsToMicroseconds', () => {
  it('should convert Milliseconds To Microseconds', () => {
    expect(millisecondsToMicroseconds(1)).toBe(1_000);
    expect(millisecondsToMicroseconds(1.5)).toBe(1_500);
    expect(millisecondsToMicroseconds(3.4)).toBe(3_400);
  });
});
