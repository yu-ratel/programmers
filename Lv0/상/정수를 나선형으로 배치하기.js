function solution(n) {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const answer = Array.from({length: n}, () => Array.from({length: n}, () => 0));

  let [x, y, dir, num] = [0, 0, 0, 1];
  while(num <= n * n) {
    answer[x][y] = num;
    let nx = x + dx[dir];
    let ny = y + dy[dir];

    if (nx >= n || nx < 0 || ny >= n || ny < 0 || answer[nx][ny] !== 0) {
      dir = (dir + 1) % 4;
      nx = x + dx[dir];
      ny = y + dy[dir];
    }
    x = nx;
    y = ny;
    num += 1;
  }

  return answer;
}

let n = 4;

console.log(solution(n));