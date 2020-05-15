import toMilliseconds from './';

describe('toMilliseconds', () => {
  it('handle negative values', () => {
    expect(
      toMilliseconds({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: -10,
        milliseconds: 400,
        microseconds: 0,
        nanoseconds: 0
      })
    ).toBe(-10 * 1000 + 400);
  });

  it('can leave out properties', () => {
    expect(
      toMilliseconds({
        seconds: 1,
        milliseconds: 400
      })
    ).toBe(1000 + 400);
  });
  it('should convert specific object to milliseconds', () => {
    expect(
      toMilliseconds({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 1,
        milliseconds: 400,
        microseconds: 0,
        nanoseconds: 0
      })
    ).toBe(1000 + 400);

    expect(
      toMilliseconds({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 55,
        milliseconds: 0,
        microseconds: 0,
        nanoseconds: 0
      })
    ).toBe(1000 * 55);

    expect(
      toMilliseconds({
        days: 0,
        hours: 0,
        minutes: 1,
        seconds: 7,
        milliseconds: 0,
        microseconds: 0,
        nanoseconds: 0
      })
    ).toBe(1000 * 67);

    expect(
      toMilliseconds({
        days: 0,
        hours: 0,
        minutes: 5,
        seconds: 0,
        milliseconds: 0,
        microseconds: 0,
        nanoseconds: 0
      })
    ).toBe(1000 * 60 * 5);

    expect(
      toMilliseconds({
        days: 0,
        hours: 1,
        minutes: 7,
        seconds: 0,
        milliseconds: 0,
        microseconds: 0,
        nanoseconds: 0
      })
    ).toBe(1000 * 60 * 67);

    expect(
      toMilliseconds({
        days: 0,
        hours: 12,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        microseconds: 0,
        nanoseconds: 0
      })
    ).toBe(1000 * 60 * 60 * 12);

    expect(
      toMilliseconds({
        days: 1,
        hours: 16,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        microseconds: 0,
        nanoseconds: 0
      })
    ).toBe(1000 * 60 * 60 * 40);

    expect(
      toMilliseconds({
        days: 41,
        hours: 15,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        microseconds: 0,
        nanoseconds: 0
      })
    ).toBe(1000 * 60 * 60 * 999);

    expect(
      toMilliseconds({
        days: 0,
        hours: 0,
        minutes: 1,
        seconds: 0,
        milliseconds: 500,
        microseconds: 345,
        nanoseconds: 678
      })
    ).toBe(1000 * 60 + 500 + 0.345678);
    expect(
      toMilliseconds({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        microseconds: 0,
        nanoseconds: 543
      })
    ).toBe(0.000543);
  });
});
