import millisecondsToSeconds from './';

describe('millisecondsToSeconds', () => {
  it('should convert Milliseconds To Seconds', () => {
    expect(millisecondsToSeconds(1_000)).toBe(1);
    expect(millisecondsToSeconds(1_500)).toBe(1.5);
    expect(millisecondsToSeconds(3_400)).toBe(3.4);
  });
});
