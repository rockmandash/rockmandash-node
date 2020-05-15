import millisecondsToDays from './';

describe('millisecondsToDays', () => {
  it('should convert Milliseconds To Days', () => {
    expect(millisecondsToDays(86_400_000)).toBe(1);
    expect(millisecondsToDays(129_600_000)).toBe(1.5);
    expect(millisecondsToDays(293_760_000)).toBe(3.4);
  });
});
