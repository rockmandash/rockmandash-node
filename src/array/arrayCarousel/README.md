Works like `indexCarousel`, but for array

```js
const elements = ['A', 'B', 'C', 'D'];

arrayCarousel(elements, 0);
// => 'A'
arrayCarousel(elements, 1);
// => 'B'
arrayCarousel(elements, 2);
// => 'C'
arrayCarousel(elements, 3);
// => 'D'
arrayCarousel(elements, 4);
// => 'A'
arrayCarousel(elements, 5);
// => 'B'
arrayCarousel(elements, 6);
// => 'C'
arrayCarousel(elements, 7);
// => 'D'
arrayCarousel(elements, 8);
// => 'A'
arrayCarousel(elements, 0);
// => 'A'
arrayCarousel(elements, -1);
// => 'D'
arrayCarousel(elements, -2);
// => 'C'
arrayCarousel(elements, -3);
// => 'B'
arrayCarousel(elements, -4);
// => 'A'
arrayCarousel(elements, -5);
// => 'D'
arrayCarousel(elements, -6);
// => 'C'
arrayCarousel(elements, -7);
// => 'B'
arrayCarousel(elements, -8);
// => 'A'
arrayCarousel(elements, 0.4);
// => 'A'
arrayCarousel(elements, 0.8);
// => 'B'
arrayCarousel(elements, 1.5);
// => 'C'
arrayCarousel(elements, 2.5);
// => 'D'
arrayCarousel(elements, 2.8);
// => 'D'
arrayCarousel(elements, 3.1);
// => 'D'
arrayCarousel(elements, 3.4);
// => 'D'
arrayCarousel(elements, 3.8);
// => 'A'
arrayCarousel(elements, 4.4);
// => 'A'
arrayCarousel(elements, 4.8);
// => 'B'
arrayCarousel(elements, 5.1);
// => 'B'
arrayCarousel(elements, 5.5);
// => 'C'
arrayCarousel(elements, 0);
// => 'A'
arrayCarousel(elements, -0.4);
// => 'A'
arrayCarousel(elements, -0.7);
// => 'D'
arrayCarousel(elements, -1.3);
// => 'D'
arrayCarousel(elements, -1.7);
// => 'C'
arrayCarousel(elements, -2.2);
// => 'C'
arrayCarousel(elements, -2.6);
// => 'B'
arrayCarousel(elements, -3.4);
// => 'B'
arrayCarousel(elements, -3.8);
// => 'A'
arrayCarousel(elements, -4.2);
// => 'A'
arrayCarousel(elements, -4.6);
// => 'D'
arrayCarousel(elements, -5.2);
// => 'D'
arrayCarousel(elements, -5.6);
// => 'C'
```
