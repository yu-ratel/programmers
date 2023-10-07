function solution(str_list, ex) {
  return str_list.filter((arr) => !arr.includes(ex)).join('');
}

let str_list = ["abc", "def", "ghi"];
let ex = "ef";

console.log(solution(str_list, ex));