import ensureTrailingSlash from './';

describe('ensureTrailingSlash', () => {
  it('should make sure string ends with slash', () => {
    expect(ensureTrailingSlash('/path/to/file')).toBe('/path/to/file/');
    expect(ensureTrailingSlash('/path/to/file/')).toBe('/path/to/file/');
  });
});
