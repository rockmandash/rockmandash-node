Convert an object of time properties to milliseconds: {seconds: 2} → 2000

```js
toMilliseconds({
  days: 15,
  hours: 11,
  minutes: 23,
  seconds: 20,
  milliseconds: 1
});
//=> 1337000001

setTimeout(() => {
  // …
}, toMilliseconds({ minutes: 2 }));
```
