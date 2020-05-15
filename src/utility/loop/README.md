This function makes writing `for` loops more functional way.
It invokes the iteratee `n` times.

```js
loop(5, index => {
  console.log(index);
});
// => 0
// => 1
// => 2
// => 3
// => 4
```
