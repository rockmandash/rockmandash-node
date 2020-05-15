import millisecondsToHours from './';

describe('millisecondsToHours', () => {
  it('should convert Milliseconds To Hours', () => {
    expect(millisecondsToHours(3_600_000)).toBe(1);
    expect(millisecondsToHours(5_400_000)).toBe(1.5);
    expect(millisecondsToHours(12_240_000)).toBe(3.4);
  });
});
