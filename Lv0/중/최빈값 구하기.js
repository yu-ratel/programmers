function solution(array) {
  let answer = 0;
  let map = new Map();
  let list = [];

  array.map((el) => {
    map.get(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1);
  });

  let max = Math.max(...map.values());

  for (let [k, v] of map) {
    if (v === max) list.push(k);
  }

  list.length === 1 ? (answer = list[0]) : (answer = -1);
  return answer;
}

let array = [1, 1, 2, 2];
console.log(solution(array));
