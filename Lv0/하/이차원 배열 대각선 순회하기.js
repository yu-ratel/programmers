function solution(board, k) {
  let answer = 0;

  board.forEach((arr, i) => arr.forEach((_, j) => {
    if ((i + j) <= k) answer += board[i][j];
  }));

  return answer;
}

let board = [[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]];
let k = 2;

console.log(solution(board, k));