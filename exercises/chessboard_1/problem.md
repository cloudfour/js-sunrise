# CHESS BOARD: PART 1

> Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

> Passing this string to console.log should show something like this:

```
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```

—Chapter 2, _Eloquent JavaScript_

-----------------------------------------------------------------

## HINTS AND STEPS

Create a file called `chessboard-1.js` in `my-solutions` to hold your
solution code.

As the book explains, this exercise requires two loops. The outer loop will
iterate over each *line*, the inner loop will iterate over each "square" in
the line. (Outer loop vertical, inner loop horizontal).

One method for determining which character to add to the string representing
the chess board in the inner loop involves adding the counters of both loops
together and checking if it's cleanly divisible by `2`. It's a little bit of
arithmetic, but not too fancy.

More hints in:

`exercises/chessboard-1/extra-hints.md`

When you're done, run

`$ {appname} verify my-solutions/chessboard-1.js`

to test your work.
