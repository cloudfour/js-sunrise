var chessboard = '';
for (var i = 0; i < 8; i++) { // For each line...
  for (var j = 0; j < 8; j++) { // For each square in the line...
    if ((i + j) % 2 === 0) {
      chessboard += ' '; // Empty space
    } else {
      chessboard += '#';
    }
  }
  chessboard += '\n';
}
console.log(chessboard);
