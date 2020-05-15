import randomInt from './';
import loop from '../../../../utility/loop';

describe('randomInt', () => {
  const testNumber = 10;

  it('should generate an integer', () => {
    loop(1000, () => {
      const randomNumber = randomInt(testNumber);
      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThan(testNumber);
      expect(Number.isInteger(randomNumber)).toBeTruthy();
    });
  });

  it('should handle negative', () => {
    loop(1000, () => {
      const randomNumber = randomInt(-testNumber);
      expect(randomNumber).toBeGreaterThan(-testNumber);
      expect(randomNumber).toBeLessThanOrEqual(0);
      expect(Number.isInteger(randomNumber)).toBeTruthy();
    });
  });
});
