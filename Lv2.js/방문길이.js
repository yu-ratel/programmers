function solution(dirs) {
  let point = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };

  let start = [0, 0];
  let set = new Set();
  for (let i = 0; i < dirs.length; i++) {
    let x = start[0] + point[dirs[i]][0];
    let y = start[1] + point[dirs[i]][1];

    if (Math.abs(x) > 5 || Math.abs(y) > 5) continue;

    set.add("" + start.join("") + x + y);
    set.add("" + x + y + start.join(""));

    start = [x, y];
  }
  return set.size / 2;
}

let dirs = "ULURRDLLU";
console.log(solution(dirs));

// 방향 때문에 set에 경우의 수를 더해줘야 했던 문제
// 객체처럼 사용하는것에 익숙치 않은데 연습해놓으면 좋을 것 같다.
// 문제의 핵심은 현재위치와 간 방향, 간 방향과 현재위치를 저장해서 같으면 제거 하고
// 2배수의 경우를 했으니 /2
