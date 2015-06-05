var chessboard = '';
var size = 10;
for (var i = 0; i < size; i++) { // For each line...
  for (var j = 0; j < size; j++) { // For each square in the line...
    if ((i + j) % 2 === 0) {
      chessboard += ' '; // Empty space
    } else {
      chessboard += '#';
    }
  }
  chessboard += '\n';
}
console.log(chessboard);
