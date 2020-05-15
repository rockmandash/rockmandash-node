import millisecondsToMinutes from './';

describe('millisecondsToMinutes', () => {
  it('should convert Milliseconds To Minutes', () => {
    expect(millisecondsToMinutes(60_000)).toBe(1);
    expect(millisecondsToMinutes(90_000)).toBe(1.5);
    expect(millisecondsToMinutes(204_000)).toBe(3.4);
  });
});
