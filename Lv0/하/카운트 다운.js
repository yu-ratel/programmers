function solution(start_num, end_num) {
  return Array(start_num - end_num + 1).fill(start_num).map((el, i) => el-i);
}

let start_num = 10;
let end_num = 3;

console.log(solution(start_num, end_num));