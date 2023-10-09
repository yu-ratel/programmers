function solution(my_string, is_suffix) {
  let list = [];

  for (let i = 0; i < my_string.length; i++) {
    list.push(my_string.slice(i, my_string.length))
  }

  return list.includes(is_suffix) ? 1 : 0;
}

let my_string = "banana";
let is_suffix = "ana";

console.log(solution(my_string, is_suffix));