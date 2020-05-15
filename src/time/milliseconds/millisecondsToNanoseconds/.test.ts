import millisecondsToNanoseconds from './';

describe('millisecondsToNanoseconds', () => {
  it('should convert Milliseconds To Nanoseconds', () => {
    expect(millisecondsToNanoseconds(1)).toBe(1_000_000);
    expect(millisecondsToNanoseconds(1.5)).toBe(1_500_000);
    expect(millisecondsToNanoseconds(3.4)).toBe(3_400_000);
  });
});
