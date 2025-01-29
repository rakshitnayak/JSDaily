// 36. Valid Sudoku
var isValidSudoku = function (board) {
  let seen = new Set();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let cellValue = board[i][j];
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (cellValue !== ".") {
        const rowVal = `row ${i} ${cellValue}`;
        const colVal = `col ${j} ${cellValue}`;
        const boxVal = `box ${boxIndex} - ${cellValue}`;
        console.log(seen);
        if (seen.has(rowVal) || seen.has(colVal) || seen.has(boxVal)) {
          return false;
        }

        seen.add(rowVal);
        seen.add(colVal);
        seen.add(boxVal);
      }
    }
  }

  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
