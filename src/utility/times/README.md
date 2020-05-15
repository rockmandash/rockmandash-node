This function makes writing for loops more functional way.
It invokes the iteratee `n` times, and it will return new Array of provided callback result.

```js
times(5, index => index);
// => [0, 1, 2, 3, 4]
```
