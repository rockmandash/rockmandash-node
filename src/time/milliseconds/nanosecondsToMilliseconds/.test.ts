import nanosecondsToMilliseconds from './';

describe('nanosecondsToMilliseconds', () => {
  it('should convert Nanoseconds To Milliseconds', () => {
    expect(nanosecondsToMilliseconds(1_000_000)).toBe(1);
    expect(nanosecondsToMilliseconds(1_500_000)).toBe(1.5);
    expect(nanosecondsToMilliseconds(3_400_000)).toBe(3.4);
  });
});
