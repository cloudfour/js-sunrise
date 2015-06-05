var chessboard = '';
for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    chessboard += ((i + j) % 2 === 0) ? ' ' : '#';
  }
  chessboard += '\n';
}
console.log(chessboard);
