function solution(num_list, n) {
  return num_list.slice(n - 1, num_list.length);
}

let num_list = [2, 1, 6];
let n = 3;

console.log(solution(num_list, n));