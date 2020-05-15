import uniqueString from './';

describe('uniqueString', () => {
  it('should remove duplicated character in a String', () => {
    expect(uniqueString('hello world')).toBe('helo wrd');
    expect(uniqueString('aaaaaaaa')).toBe('a');
  });
});
