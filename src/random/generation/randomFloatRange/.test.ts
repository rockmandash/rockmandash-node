import randomFloatRange from './';
import loop from '../../../utility/loop';

describe('randomFloatRange', () => {
  it('should generate an float', () => {
    loop(1000, () => {
      const randomNumber = randomFloatRange(10, 199);
      expect(randomNumber).toBeGreaterThanOrEqual(10);
      expect(randomNumber).toBeLessThan(199);
      expect(Number.isInteger(randomNumber)).toBeFalsy();
    });
  });

  it('should handle negative', () => {
    loop(1000, () => {
      const randomNumber = randomFloatRange(-10, 10);
      expect(randomNumber).toBeGreaterThanOrEqual(-10);
      expect(randomNumber).toBeLessThan(10);
      expect(Number.isInteger(randomNumber)).toBeFalsy();
    });
  });

  it('should handle negative', () => {
    loop(1000, () => {
      const randomNumber = randomFloatRange(-100, -10);
      expect(randomNumber).toBeGreaterThanOrEqual(-100);
      expect(randomNumber).toBeLessThan(-10);
      expect(Number.isInteger(randomNumber)).toBeFalsy();
    });
  });
});
