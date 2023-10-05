function solution(my_string, is_prefix) {
  return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;
}

let my_string = "banana";
let is_prefix = "ban";

console.log(solution(my_string, is_prefix));