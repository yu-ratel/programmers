function solution(my_string, n) {
  let len = my_string.length - n;
  return my_string.slice(len, my_string.length);
}

let my_string = "ProgrammerS123";
let n = 11;
console.log(solution(my_string, n));
