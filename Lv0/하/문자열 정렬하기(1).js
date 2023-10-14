function solution(my_string) {
  return my_string.split('').filter((v) => v >= 0).sort((a,b) => a - b).map((v) => +v);
}

let my_string = "abcde0";

console.log(solution(my_string))