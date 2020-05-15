Filter array holes like this `[empty × 5]` but not falsy values.

```js
const array = [0, null, '', undefined, , ,];

console.log(array);
// => [0, null, "", undefined, empty × 2]

removeArrayHoles(array);
// => [0, null, "", undefined]
```
