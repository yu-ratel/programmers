function solution(str1, str2) {
  return str2.includes(str1) ? 1 : 0;
 }

let str1 = "abc";
let str2 = "aabcc";

console.log(solution(str1, str2));