# LOOPING: 2 LOOPING A TRIANGLE

Write a loop that makes 7 calls to `console.log` to output the following:

```
#
##
###
####
#####
######
#######
```

-----------------------------------------------------------------

## HINTS AND STEPS

Create a file called `looping-2.js` in `my-solutions` to hold your
solution code.

for-loop syntax from last exercise:

`for (var i = 0; i < 7; i++)`

This syntax breaks down as:

`for (initialize; check; update)`

In the last exercise, you implemented a `for` loop with a numeric counter variable.

In this exercise, you'll be outputting the value of the counter variable in the
loop to the console. Based on that, what `type` of value do you think the
counter variable in your for loop will need to be?

What do you need to _initialize_ your counter variable to? What should its
initial value be (hint: remember that you're outputting it to the console)?

The second part of for loop syntax is the _checking_ step. What do we need to
check for to see if the loop should continue to execute (hint: it may be
easier to answer this after answering the next question)?

The third part of the syntax is the _update_ step. This step _updates_ the
counter variable after the completion of each loop execution. How do we need to
modify the counter variable so that it is ready for the _next_ iteration of the
loop?

Still stumped? I've left a few extra clues in

`exercises/looping_2/extra-hints.md`

When you're done, run

`$ {appname} verify my-solutions/looping-2.js`

to test your work.
