function solution(num_list, n) {
  return num_list.includes(n) ? 1 : 0;
}

let num_list = [1, 2, 3, 4, 5];
let n = 3;

console.log(solution(num_list, n));