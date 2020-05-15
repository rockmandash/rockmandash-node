import randomFloat from './';
import loop from '../../../utility/loop';

describe('randomFloat', () => {
  const testNumber = 10;

  it('should generate a unique integer', () => {
    loop(1000, () => {
      const randomNumber = randomFloat(testNumber);
      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThan(testNumber);
      expect(Number.isInteger(randomNumber)).toBeFalsy();
    });
  });

  it('should handle negative', () => {
    loop(1000, () => {
      const randomNumber = randomFloat(-testNumber);
      expect(randomNumber).toBeGreaterThan(-testNumber);
      expect(randomNumber).toBeLessThanOrEqual(0);
      expect(Number.isInteger(randomNumber)).toBeFalsy();
    });
  });
});
