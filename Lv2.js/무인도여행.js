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
