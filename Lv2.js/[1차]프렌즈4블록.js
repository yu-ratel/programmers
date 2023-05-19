function solution(m, n, board) {
  let answer = 0;
  board = board.map((el) => el.split(""));

  while (1) {
    let idx = [];
    for (let x = 0; x < m - 1; x++) {
      for (let y = 0; y < n - 1; y++) {
        if (
          board[x][y] !== 0 &&
          board[x][y] === board[x + 1][y] &&
          board[x][y] === board[x + 1][y + 1] &&
          board[x][y] === board[x][y + 1]
        ) {
          idx.push([x, y]);
        }
      }
    }

    if (idx.length === 0) {
      return [].concat(...board).filter((el) => !el).length;
    }

    idx.map((el) => {
      board[el[0]][el[1]] = 0;
      board[el[0] + 1][el[1]] = 0;
      board[el[0] + 1][el[1] + 1] = 0;
      board[el[0]][el[1] + 1] = 0;
    });

    for (let i = m - 1; i > 0; i--) {
      if (!board[i].some((el) => !el)) continue;

      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
          if (board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
  }
  console.log(board);
}

let m = 4;
let n = 5;
let board = ["CCBDE", "AAADE", "AAABF", "CCBBF"];

console.log(solution(m, n, board));

// 천천히 구현하면 해낼 문제
// 너무 어렵게 생각하지말자.
