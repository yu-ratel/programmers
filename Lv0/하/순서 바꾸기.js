function solution(num_list, n) {
  return num_list.slice(n, num_list.length).concat(num_list.slice(0, n));
}

let num_list = [2, 1, 6];
let n = 1; 

console.log(solution(num_list, n));