# JavaScript: Program Structure

## Reading

* Read [chapter 2 of _Eloquent JavaScript_]

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
* Some useful `constants` like `Math.PI` and `Math.E`. You can "tell" these are "constants" because they are written in `ALL CAPS`. 
