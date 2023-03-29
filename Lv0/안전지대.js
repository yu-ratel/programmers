function solution(board) {
  let answer = 0;
  let point = [];
  // board에 1x1의 격자를 하나 더 만드는 식
  board.map((el) => {
    el.push(0);
    el.unshift(0);
  });
  board.push(new Array(board[0].length).fill(0));
  board.unshift(new Array(board[0].length).fill(0));
  // 지뢰가 어디있는지 체크
  board.map((el, idx) => {
    for (let i = 0; i < el.length; i++) {
      if (el[i] === 1) point.push([idx, i]);
    }
  });

  // 지뢰가 있는곳에 주변에 1로 체크
  point.map((el) => {
    let x = el[0];
    let y = el[1];
    x -= 1;
    while (x <= el[0] + 1) {
      for (let i = -1; i <= 1; i++) {
        board[x][y + i] = 1;
      }
      x++;
    }
  });
  // 지뢰있는곳 주변에 다 1로 체크했으니 1x1격자 벗겨내기
  board.pop();
  board.shift();
  board.map((el) => {
    el.pop();
    el.shift();
  });
  // 지뢰가아닌 (1이 아닌) 0의 수를 누적
  board.map((el) => {
    answer += el.filter((hit) => hit === 0).length;
  });
  return answer;
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
];
console.log(solution(board));
