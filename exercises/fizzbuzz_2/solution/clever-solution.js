for (var i = 1; i <= 100; i++) {
  var word = (i % 3 === 0) ? 'Fizz' : '';
  word += (i % 5 === 0) ? 'Buzz' : '';
  console.log(word || i);
}
