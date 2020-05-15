function indexCarousel(totalLength: number, index: number) {
  const remainder = Math.round(index) % totalLength;

  if (remainder === 0) {
    return 0;
  }

  if (index < 0) {
    return remainder + totalLength;
  }

  return remainder;
}

export default indexCarousel;
