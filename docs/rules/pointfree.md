# Prefer pointfree functions (pointfree)

## Rule Details

This rule enforces a [point-free](https://en.wikipedia.org/wiki/Tacit_programming) style, when possible.

Examples of **incorrect** code for this rule:

```js
const f = x => g(x)
const f = x => g(y)(x)
```

Examples of **correct** code for this rule:

```js
const f = g
const f = x => g(x)(y)
const f = x => g(x, 1)
```
