import indexCarousel from '../../math/indexCarousel';

function arrayCarousel<T>(arr: T[], index: number): T {
  const realIndex = indexCarousel(arr.length, index);
  return arr[realIndex];
}

export default arrayCarousel;
