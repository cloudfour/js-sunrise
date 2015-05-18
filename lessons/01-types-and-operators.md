# JavaScript: Types, Values and Operators

## Reading

* Read [chapter 1](http://eloquentjavascript.net/01_values.html) _Eloquent JavaScript_.

## Additional Content

### Truthiness

A lot of the logic in JavaScript and programming languages in general revolves around evaluating whether something is `true` or `false`. Different programming languages have different opinions about what makes something *truthy* or *falsy*.

#### False values

In JavaScript, everything is `true` (truthy) except for seven things, which I like to call "The Seven Falsy Dwarves":

* `false`
* `0`
* `''` (empty string)
* `NaN`
* `undefined`
* `null`
* `-0` (Yep, negative zero. This one is pretty much a parlor trick. It doesn't come up in daily programming.)

### Type Conversion

Automatic type conversion is one of the places I see beginning JavaScript programmers get into trouble, constantly. It is important to consider the type of value you are working with. As Haverbeke writes:

> When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it wants, using a set of rules that often aren’t what you want or expect. This is called *type coercion*. 

One of the areas that trips people up especially is strings versus numbers. JavaScript will happily evaluate this:

`5 + ' dollars'; // -> '5 dollars'`

which seems nice, but also:

`'5' + 4; // -> '54'`

This could get you in trouble if you were expecting the value (a number) `9`.

We'll cover ways to be careful about the types of values you're working with. One thing to keep in mind is that most data that comes in from user browser input (e.g. form fields) will be strings (even if it is a string of numbers).

JavaScript uses type coercion to determine the truthiness of values by converting them first to `Boolean` values. 

### Comparison Operators

It's important to understand the difference between the "regular" equality operator (`==`) and the strict equality comparison operator (`===`).

Often, JavaScript programmers prefer the strict comparison operator as the default. 

## Exercises

### Workshop Exercises

* Complete the `WELCOME` and `STRING FORMAT` exercises in the `js-sunrise` interactive workshop.

### Additional Exercises

In your browser's console, execute the following statements:

```javascript
(0 == false);
(0 === false);
```

Why do these two statements result in different return values?

## Questions for Thought

* In JavaScript, what is `typeof`?
* How could you display a tab (tab stop, indentation) in a JavaScript string?
* What are the six basic types of values in ES5?
* What are the advantages of using the strict equality operator (`===`) instead of the equality operator (`==`)?

## Bonus/Thinking Questions

* I used the term *ES5* instead of JavaScript in the question about types. Why do you think that might be?
* What do the statements `typeof null` and `typeof NaN` give you if you try them in your browser's console? What do you make of the results?
