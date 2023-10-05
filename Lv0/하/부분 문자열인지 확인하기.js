function solution(my_string, target) {
  return my_string.includes(target) ? 1 : 0; 
}

let my_string = "banana";
let target = "ana";

console.log(solution(my_string, target));