* Remember that the entire chess board should be represented by one string.
* And you should only invoke `console.log` once.
* Chessboards are square, so the counters for both loops should be iterating between 0 and 7 (or 1 and 8).
* Something needs to happen at the end of each line—you need to add the line break (`\n`). That needs to happen somewhere in the outer loop.
* You should have at least one `var` declaration outside of both loops. I did it with one, but the instructions suggest you need two, so YMMV.
* The `console.log` invocation should not happen inside of any loops.

*Make sure* you use a different counter var for each loop. Something like this *will not work*:

```javascript
for (var i = 0; i < 8; i++) {
  for (var i = 0; i < 8; i++) {

  }
}
```

(Extra thinking: What is it that happens in a situation like the above? Where do things break down?)

There's a more condensed solution (fewer lines but perhaps less readable) in `solution/compact-solution.js`.
