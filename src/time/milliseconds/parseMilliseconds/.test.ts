import parseMilliseconds from './';

describe('parseMilliseconds', () => {
  it('should bparse Millisecondse to various format', () => {
    expect(parseMilliseconds(1000 + 400)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 1,
      milliseconds: 400,
      microseconds: 0,
      nanoseconds: 0
    });

    expect(parseMilliseconds(1000 * 55)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 55,
      milliseconds: 0,
      microseconds: 0,
      nanoseconds: 0
    });

    expect(parseMilliseconds(1000 * 67)).toEqual({
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 7,
      milliseconds: 0,
      microseconds: 0,
      nanoseconds: 0
    });

    expect(parseMilliseconds(1000 * 60 * 5)).toEqual({
      days: 0,
      hours: 0,
      minutes: 5,
      seconds: 0,
      milliseconds: 0,
      microseconds: 0,
      nanoseconds: 0
    });

    expect(parseMilliseconds(1000 * 60 * 67)).toEqual({
      days: 0,
      hours: 1,
      minutes: 7,
      seconds: 0,
      milliseconds: 0,
      microseconds: 0,
      nanoseconds: 0
    });

    expect(parseMilliseconds(1000 * 60 * 60 * 12)).toEqual({
      days: 0,
      hours: 12,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      microseconds: 0,
      nanoseconds: 0
    });

    expect(parseMilliseconds(1000 * 60 * 60 * 40)).toEqual({
      days: 1,
      hours: 16,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      microseconds: 0,
      nanoseconds: 0
    });

    expect(parseMilliseconds(1000 * 60 * 60 * 999)).toEqual({
      days: 41,
      hours: 15,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      microseconds: 0,
      nanoseconds: 0
    });

    expect(parseMilliseconds(1000 * 60 + 500 + 0.345678)).toEqual({
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 0,
      milliseconds: 500,
      microseconds: 345,
      nanoseconds: 678
    });

    expect(parseMilliseconds(0.000543)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      microseconds: 0,
      nanoseconds: 543
    });
  });

  it('handles nagative', () => {
    const types = [
      'days',
      'hours',
      'minutes',
      'seconds',
      'milliseconds'
    ] as const;

    const times = [
      0.0005,
      0.3,
      100 + 400,
      1000 * 55,
      1000 * 67,
      1000 * 60 * 5,
      1000 * 60 * 67,
      1000 * 60 * 60 * 12,
      1000 * 60 * 60 * 40,
      1000 * 60 * 60 * 999
    ];

    for (const milliseconds of times) {
      const positive = parseMilliseconds(milliseconds);
      const negative = parseMilliseconds(-milliseconds);

      for (const key of types) {
        expect(negative[key]).toBe(-positive[key]);
      }
    }
  });
});
