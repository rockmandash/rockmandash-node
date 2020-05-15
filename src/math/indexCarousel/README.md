Support negative index or out of range index

```js
const totalLength = 4;

indexCarousel(totalLength, 0);
// => 0

indexCarousel(totalLength, 1);
// => 1

indexCarousel(totalLength, 2);
// => 2

indexCarousel(totalLength, 3);
// => 3

indexCarousel(totalLength, 4);
// => 0

indexCarousel(totalLength, 5);
// => 1

indexCarousel(totalLength, 6);
// => 2

indexCarousel(totalLength, 7);
// => 3

indexCarousel(totalLength, 8);
// => 0

indexCarousel(totalLength, 0);
// => 0

indexCarousel(totalLength, -1);
// => 3

indexCarousel(totalLength, -2);
// => 2

indexCarousel(totalLength, -3);
// => 1

indexCarousel(totalLength, -4);
// => 0

indexCarousel(totalLength, -5);
// => 3

indexCarousel(totalLength, -6);
// => 2

indexCarousel(totalLength, -7);
// => 1

indexCarousel(totalLength, -8);
// => 0

// ================= works for decimal

indexCarousel(totalLength, 0.4);
// => 0

indexCarousel(totalLength, 0.8);
// => 1

indexCarousel(totalLength, 1.5);
// => 2

indexCarousel(totalLength, 2.5);
// => 3

indexCarousel(totalLength, 2.8);
// => 3

indexCarousel(totalLength, 3.1);
// => 3

indexCarousel(totalLength, 3.4);
// => 3

indexCarousel(totalLength, 3.8);
// => 0

indexCarousel(totalLength, 4.4);
// => 0

indexCarousel(totalLength, 4.8);
// => 1

indexCarousel(totalLength, 5.1);
// => 1

indexCarousel(totalLength, 5.5);
// => 2
```
