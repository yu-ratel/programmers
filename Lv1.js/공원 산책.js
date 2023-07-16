function solution(park, routes) {
  const position = (move, x, y) => {
    if (move === "N") x--;
    if (move === "S") x++;
    if (move === "W") y--;
    if (move === "E") y++;

    return [x, y];
  };

  const error = (nx, ny) => {
    if (nx < 0 || nx >= park.length || ny < 0 || ny >= park.length)
      return false;
    return true;
  };

  let [x, y] = [0, 0];
  park = park.map((el) => el.split(""));

  park.map((el, idx) =>
    el.indexOf("S") != -1 ? ((x = idx), (y = el.indexOf("S"))) : null
  );

  routes.map((el) => {
    let [point, cnt] = el.split(" ");
    let stop = true;
    let [nx, ny] = [x, y];

    while (cnt) {
      let moving = position(point, nx, ny);
      nx = moving[0];
      ny = moving[1];

      if (error(nx, ny)) {
        if (park[nx][ny] === "O" || park[nx][ny] === "S") cnt--;
        else {
          stop = false;
          break;
        }
      } else {
        stop = false;
        break;
      }
    }
    if (stop) {
      x = nx;
      y = ny;
    }
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
// Refactoring 해야할 것.
