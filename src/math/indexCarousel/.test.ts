import indexCarousel from './';

describe('indexCarousel', () => {
  const totalLength = 4;

  it('should loop through numbers when giving postive value', () => {
    expect(indexCarousel(totalLength, 0)).toBe(0);
    expect(indexCarousel(totalLength, 1)).toBe(1);
    expect(indexCarousel(totalLength, 2)).toBe(2);
    expect(indexCarousel(totalLength, 3)).toBe(3);
    expect(indexCarousel(totalLength, 4)).toBe(0);
    expect(indexCarousel(totalLength, 5)).toBe(1);
    expect(indexCarousel(totalLength, 6)).toBe(2);
    expect(indexCarousel(totalLength, 7)).toBe(3);
    expect(indexCarousel(totalLength, 8)).toBe(0);
  });

  it('should loop through numbers when giving negative value', () => {
    expect(indexCarousel(totalLength, 0)).toBe(0);
    expect(indexCarousel(totalLength, -1)).toBe(3);
    expect(indexCarousel(totalLength, -2)).toBe(2);
    expect(indexCarousel(totalLength, -3)).toBe(1);
    expect(indexCarousel(totalLength, -4)).toBe(0);
    expect(indexCarousel(totalLength, -5)).toBe(3);
    expect(indexCarousel(totalLength, -6)).toBe(2);
    expect(indexCarousel(totalLength, -7)).toBe(1);
    expect(indexCarousel(totalLength, -8)).toBe(0);
  });

  it('should round decimal postive number', () => {
    expect(indexCarousel(totalLength, 0.4)).toBe(0);
    expect(indexCarousel(totalLength, 0.8)).toBe(1);
    expect(indexCarousel(totalLength, 1.5)).toBe(2);
    expect(indexCarousel(totalLength, 2.5)).toBe(3);
    expect(indexCarousel(totalLength, 2.8)).toBe(3);
    expect(indexCarousel(totalLength, 3.1)).toBe(3);
    expect(indexCarousel(totalLength, 3.4)).toBe(3);
    expect(indexCarousel(totalLength, 3.8)).toBe(0);
    expect(indexCarousel(totalLength, 4.4)).toBe(0);
    expect(indexCarousel(totalLength, 4.8)).toBe(1);
    expect(indexCarousel(totalLength, 5.1)).toBe(1);
    expect(indexCarousel(totalLength, 5.5)).toBe(2);
  });

  it('should round decimal negative number', () => {
    expect(indexCarousel(totalLength, 0)).toBe(0);
    expect(indexCarousel(totalLength, -0.4)).toBe(0);
    expect(indexCarousel(totalLength, -0.7)).toBe(3);
    expect(indexCarousel(totalLength, -1.3)).toBe(3);
    expect(indexCarousel(totalLength, -1.7)).toBe(2);
    expect(indexCarousel(totalLength, -2.2)).toBe(2);
    expect(indexCarousel(totalLength, -2.6)).toBe(1);
    expect(indexCarousel(totalLength, -3.4)).toBe(1);
    expect(indexCarousel(totalLength, -3.8)).toBe(0);
    expect(indexCarousel(totalLength, -4.2)).toBe(0);
    expect(indexCarousel(totalLength, -4.6)).toBe(3);
    expect(indexCarousel(totalLength, -5.2)).toBe(3);
    expect(indexCarousel(totalLength, -5.6)).toBe(2);
  });
});
