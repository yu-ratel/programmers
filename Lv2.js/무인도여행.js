function solution(maps) {
  let answer = [];
  let point = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  maps = maps.map((el) => el.split(""));

  for (let x = 0; x < maps.length; x++) {
    for (let y = 0; y < maps[0].length; y++) {
      let sum = maps[x][y];
      if (sum === "X") continue;
      maps[x][y] = "X";
      sum = Number(sum);
      const queue = [[x, y]];

      while (queue.length) {
        let [xx, yy] = queue.shift();

        for (let i = 0; i < point.length; i++) {
          const [nx, ny] = [xx + point[i][0], yy + point[i][1]];

          if (nx >= 0 && nx < maps.length && ny >= 0 && ny < maps[0].length) {
            let value = maps[nx][ny];
            if (value === "X") continue;

            maps[nx][ny] = "X";
            sum += Number(value);
            queue.push([nx, ny]);
          }
        }
      }
      answer.push(sum);
    }
  }

  answer.sort((a, b) => a - b);

  if (answer.length === 0) return [-1];

  return answer;
}

let maps = ["99X", "9X9", "9X9"];

console.log(solution(maps));

// 처음 접근한것은 상하좌우로 돌면서 값을 누적시키며 가는 것이었는데 지금의 테스트케이스같은 경우
// 중간에 한번 끊기기 때문에 원하는 결과가 나오지않았고 해결법을 찾다가
// 상하좌우의 연결성을 끊지 않기위해 queue 를 이용해 넣어주고 앞에서부터 빼주면서 값을 누적하여
// 더이상 갈곳이 없을 때 answer에 누적시켜주었다.
// bfs로 많이 푸는 문제던데 다시한번 공부해야봐야겠다.
