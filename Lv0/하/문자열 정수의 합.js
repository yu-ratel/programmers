function solution(num_str) {
  return num_str.split('').reduce((acc, cur) => acc += +cur, 0);
}

let num_str = "123456789";

console.log(solution(num_str));