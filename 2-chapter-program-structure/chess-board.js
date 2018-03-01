let boardString = '';

for (let j = 0; j < 4; j += 1) {
  for (let i = 1; i <= 16; i += 1) {
    if (i === 8) {
      boardString += '\n';
    } else if (i === 16) {
      boardString += '#\n';
    } else if (i < 8) {
      boardString += i % 2 === 0 ? ' ' : '#';
    } else if (i > 8) {
      boardString += i % 2 !== 0 ? ' ' : '#';
    }
  }
}

console.log(boardString);
