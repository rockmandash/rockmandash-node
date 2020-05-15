> Split a string on the first occurrence of a given separator

This is similar to [`String#split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split), but that one splits on all the occurrences, not just the first one.

## Usage

```js
splitOnLast('a-b-c', '-');
// => ['a-b', 'c']);

splitOnLast('key:value:value2', ':');
// => [ key:value', 'value2',]);

splitOnLast('a---b---c', '---');
// => ['a---b', 'c']);

splitOnLast('a-b-c', '+');
// => ['a-b-c']);

splitOnLast('abc', '');
// => ['abc']);
```
