function solution(park, routes) {
  const position = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };

  let [x, y] = [0, 0];

  park.map((el, idx) =>
    el.indexOf("S") != -1 ? ((x = idx), (y = el.indexOf("S"))) : null
  );

  routes.map((el) => {
    let [point, cnt] = el.split(" ");
    let [nx, ny] = [x, y];

    while (cnt) {
      [nx, ny] = [nx + position[point][0], ny + position[point][1]];

      if (!park[nx] || !park[nx][ny] || park[nx][ny] === "X") break;
      cnt--;
    }

    if (cnt === 0) [x, y] = [nx, ny];
  });
  return [x, y];
}

let park = ["SOO", "OOO", "OOO"];
let routes = ["E 2", "S 2", "W 1"];

console.log(solution(park, routes));

// 문제자체는 단순했으나 너무 지저분하게 풀었다.
// 1. 객체로 방향을 정하고 불러오는 과정에서 난항을 겪었고
// 2. 진행방향이 인덱스범위를 초과하는 것을 잡는것에서 문제가있었다.
// 3. 문제를 꼼꼼히 읽어봐야겠다. "O"만 갈 수 있는 진행방향이라고 생각했는데 "S"도 가능하다.
// refactoring "O";
