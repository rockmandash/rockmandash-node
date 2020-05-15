import microsecondsToMilliseconds from './';

describe('microsecondsToMilliseconds', () => {
  it('should convert Microseconds To Milliseconds', () => {
    expect(microsecondsToMilliseconds(1_000)).toBe(1);
    expect(microsecondsToMilliseconds(1_500)).toBe(1.5);
    expect(microsecondsToMilliseconds(3_400)).toBe(3.4);
  });
});
