function solution(k, tangerine) {
  let answer = 0;
  let map = new Map();
  let list = [];
  let cnt = 0;

  for (let i = 0; i < tangerine.length; i++) {
    map.has(tangerine[i])
      ? map.set(tangerine[i], map.get(tangerine[i]) + 1)
      : map.set(tangerine[i], 1);
  }

  for (let [, value] of map) {
    list.push(value);
  }

  list.sort((a, b) => b - a);

  for (let i = 0; i < tangerine.length; i++) {
    if (list[i] + cnt >= k) {
      return ++answer;
    } else {
      cnt += list[i];
      answer++;
    }
  }
}

let k = 5;
let tangerine = [1, 1, 1, 1, 2, 2, 2, 3];

console.log(solution(k, tangerine));
