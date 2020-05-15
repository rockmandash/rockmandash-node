import arrayCarousel from './';

describe('arrayCarousel', () => {
  const elements = ['A', 'B', 'C', 'D'];

  it('should loop through elements when giving postive value', () => {
    expect(arrayCarousel(elements, 0)).toBe('A');
    expect(arrayCarousel(elements, 1)).toBe('B');
    expect(arrayCarousel(elements, 2)).toBe('C');
    expect(arrayCarousel(elements, 3)).toBe('D');
    expect(arrayCarousel(elements, 4)).toBe('A');
    expect(arrayCarousel(elements, 5)).toBe('B');
    expect(arrayCarousel(elements, 6)).toBe('C');
    expect(arrayCarousel(elements, 7)).toBe('D');
    expect(arrayCarousel(elements, 8)).toBe('A');
  });

  it('should loop through elements when giving negative value', () => {
    expect(arrayCarousel(elements, 0)).toBe('A');
    expect(arrayCarousel(elements, -1)).toBe('D');
    expect(arrayCarousel(elements, -2)).toBe('C');
    expect(arrayCarousel(elements, -3)).toBe('B');
    expect(arrayCarousel(elements, -4)).toBe('A');
    expect(arrayCarousel(elements, -5)).toBe('D');
    expect(arrayCarousel(elements, -6)).toBe('C');
    expect(arrayCarousel(elements, -7)).toBe('B');
    expect(arrayCarousel(elements, -8)).toBe('A');
  });

  it('should works for decimal postive number', () => {
    expect(arrayCarousel(elements, 0.4)).toBe('A');
    expect(arrayCarousel(elements, 0.8)).toBe('B');
    expect(arrayCarousel(elements, 1.5)).toBe('C');
    expect(arrayCarousel(elements, 2.5)).toBe('D');
    expect(arrayCarousel(elements, 2.8)).toBe('D');
    expect(arrayCarousel(elements, 3.1)).toBe('D');
    expect(arrayCarousel(elements, 3.4)).toBe('D');
    expect(arrayCarousel(elements, 3.8)).toBe('A');
    expect(arrayCarousel(elements, 4.4)).toBe('A');
    expect(arrayCarousel(elements, 4.8)).toBe('B');
    expect(arrayCarousel(elements, 5.1)).toBe('B');
    expect(arrayCarousel(elements, 5.5)).toBe('C');
  });

  it('should works for decimal negative number', () => {
    expect(arrayCarousel(elements, 0)).toBe('A');
    expect(arrayCarousel(elements, -0.4)).toBe('A');
    expect(arrayCarousel(elements, -0.7)).toBe('D');
    expect(arrayCarousel(elements, -1.3)).toBe('D');
    expect(arrayCarousel(elements, -1.7)).toBe('C');
    expect(arrayCarousel(elements, -2.2)).toBe('C');
    expect(arrayCarousel(elements, -2.6)).toBe('B');
    expect(arrayCarousel(elements, -3.4)).toBe('B');
    expect(arrayCarousel(elements, -3.8)).toBe('A');
    expect(arrayCarousel(elements, -4.2)).toBe('A');
    expect(arrayCarousel(elements, -4.6)).toBe('D');
    expect(arrayCarousel(elements, -5.2)).toBe('D');
    expect(arrayCarousel(elements, -5.6)).toBe('C');
  });
});
