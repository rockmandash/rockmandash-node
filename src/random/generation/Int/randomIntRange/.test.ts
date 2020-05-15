import randomIntRange from './';
import loop from '../../../../utility/loop';

describe('randomIntRange', () => {
  it('should generate an integer', () => {
    loop(1000, () => {
      const randomNumber = randomIntRange(10, 199);
      expect(randomNumber).toBeGreaterThanOrEqual(10);
      expect(randomNumber).toBeLessThanOrEqual(199);
      expect(Number.isInteger(randomNumber)).toBeTruthy();
    });
  });

  it('should handle negative', () => {
    loop(1000, () => {
      const randomNumber = randomIntRange(-10, 10);
      expect(randomNumber).toBeGreaterThanOrEqual(-10);
      expect(randomNumber).toBeLessThanOrEqual(10);
      expect(Number.isInteger(randomNumber)).toBeTruthy();
    });
  });

  it('should handle negative', () => {
    loop(1000, () => {
      const randomNumber = randomIntRange(-100, -10);
      expect(randomNumber).toBeGreaterThanOrEqual(-100);
      expect(randomNumber).toBeLessThanOrEqual(-10);
      expect(Number.isInteger(randomNumber)).toBeTruthy();
    });
  });
});
