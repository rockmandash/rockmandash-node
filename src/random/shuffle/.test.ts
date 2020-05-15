import shuffle from './';
import loop from '../../utility/loop';
import times from '../../utility/times';

describe('shuffle', () => {
  it('returns elements, randomly sorted', () => {
    loop(1000, () => {
      const arr = times(10, index => index);
      expect(arr).not.toEqual(shuffle(arr));
      expect(arr.sort()).toEqual(shuffle(arr).sort());
    });
  });
});
