import warning from './';
import { FALSY } from 'constant-land';

describe('warning', () => {
  it('should not warn if condition is truthy', () => {
    const mockConsoleWarn = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    const someTruthyValue = [1, -1, true, {}, [], Symbol(), 'hi'];
    someTruthyValue.forEach(value =>
      expect(() => {
        warning(value);
        expect(console.warn).not.toHaveBeenCalled();
      })
    );

    mockConsoleWarn.mockRestore();
  });

  it('should warn if the condition is FALSY', () => {
    const mockConsoleWarn = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    FALSY.forEach(value =>
      expect(() => {
        warning(value);
        expect(console.warn).toHaveBeenCalled();

        mockConsoleWarn.mockClear();
      })
    );

    mockConsoleWarn.mockRestore();
  });
});
