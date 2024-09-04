function solution(clothes) {
  let answer = 1;
  let map = new Map();
  for (let i = 0; i < clothes.length; i++) {
    let a = clothes[i][1];
    map.set(a, (map.get(a) || 0) + 1);
  }
  console.log(map);
  for (let [, v] of map) {
    answer *= v + 1;
  }
  return answer - 1;
}
let clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
console.log(solution(clothes));
