function roundTowardsZero(value: number) {
  const method = value > 0 ? Math.floor : Math.ceil;

  return method(value);
}

export default roundTowardsZero;
