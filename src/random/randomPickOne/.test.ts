import randomPickOne from './';
import loop from '../../utility/loop';

describe('randomPickOne', () => {
  it('gets 1 random elements from `array`', () => {
    loop(100, () => {
      const arr = [1, 2, 3, 4, 5, 6, 7];
      expect(arr.includes(randomPickOne(arr))).toBeTruthy();
    });
  });
});
