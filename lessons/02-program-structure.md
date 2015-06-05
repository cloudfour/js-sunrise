# JavaScript: Program Structure

## Reading

* Read [chapter 2 of _Eloquent JavaScript_](http://eloquentjavascript.net/02_program_structure.html)
* Read [MDN's documentation of JS `for` loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for). There will be things on that page that will feel like gibberish, but I want you to get used to:
    * MDN, which is a solid resource for JS and web standards documentation
    * Looking at technical reference material

## Additional Content

### Producing Values

JavaScript _expressions_ "produce values". That is,

```javascript
1 + 5;
```

is an expression that produces the `Number` `6`.

When invoking a function produces a value, we say that the function _returns_ that value. Thus:

```javascript
Math.abs(-1 - 5);
```

_returns_ the `Number` `6`.

### Math and "standard built-in objects"

`Math` is a so-called `standard built-in object`. That means you have access to it automatically, at `global` scope (we'll be talking a _lot_ about scope in the future; for now just let it wash over you). In any case, standard objects like `Math` are just there, and you can use them.

`Math` is different from its standard built-in friends in that you use it a little differently than the rest of them. The `Math` object is like a container that holds some useful things:

* `methods` like the `abs` method. _Method_ is another word for a function that happens to be attached to an object. For our purposes now, you can consider _methods_ and _functions_ interchangeable, roughly. All _methods_ are _functions_ but not all _functions_ are _methods_. Anyhow.
* Some useful `constants` like `Math.PI` and `Math.E`. You can "tell" these are _constant_ values because they are, by convention, written in `ALL CAPS`. Constants are values that are defined once and then never changed. Constants have a slightly peculiar reality in JavaScript that we don't need to worry about just now.

`Math` is just one of the many standard built-ins. [Read more about it if you are interested](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) (optional).

### Loops and Conditionals

Chapter 2 moves quickly through a lot of core concepts. Certainly make sure that you understand the gist of each section in the chapter, but make sure that you feel especially comfortable with the following constructs, which you will use _all the time_:

* `for` loops
* `if/else if/if` branching
* `while` loops, though you'll likely see `for` loops more often

## Questions and Exercises

### Workshop Exercises

* Complete the `LOOPING`, `FIZZBUZZ` and `CHESSBOARD` exercises in the workshop (each has two parts).

### MOAR Exercises and Questions

In your browser's `console`, type the following and hit enter:

```javascript
Math.abs(-1 - 5);
```

What does the console display? Why do you think that is the case?

Now type

```javascript
alert('foo');
```

Yes, you'll get an alert box popup, but the console also says something. Why do you think it might say what it does?

Also, why doesn't

```javascript
alert(foo);
```

work? What is happening?

In JavaScript, as in other programming languages, you can wrap expressions inside expressions. The produced value of each expression will be consumed by the expression around it. Consider the following:

```javascript
Math.pow(1 + (Math.abs(-1 - 5) % 5), 2);
```

* What value will this produce?
* What `type` is the produced value?
* What is the value of the first `argument` to `Math.pow`?
* How many functions are invoked in this statement? What are they? (Hint: don't assume parentheses, in all cases, indicate function calls. They are also used for _grouping_, like in algebra).
* Advanced: Wrap this statement inside `console.log` and execute it in your browser's console. Why are two values displayed?

(Hint: Use the aforementioned documentation of `Math` to research the `pow` method, if needed).
