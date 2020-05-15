import invariant from './';
import { FALSY } from 'constant-land';

describe('invariant', () => {
  it('should not throw if condition is truthy', () => {
    const someTruthyValue = [1, -1, true, {}, [], Symbol(), 'hi'];
    someTruthyValue.forEach(value =>
      expect(() => {
        invariant(value);
      }).not.toThrow()
    );
  });

  it('should throw if the condition is FALSY', () => {
    FALSY.forEach(value =>
      expect(() => {
        invariant(value);
      }).toThrow()
    );
  });
});
