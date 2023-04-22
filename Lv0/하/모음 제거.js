const e = require("express");

function solution(my_string) {
  let answer = "";
  let list = ["a", "e", "i", "o", "u"];
  my_string.split("").map((el) => (list.includes(el) ? null : (answer += el)));
  return answer;
}

let my_string = "bus";
console.log(solution(my_string));
