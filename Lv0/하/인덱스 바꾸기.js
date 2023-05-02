function solution(my_string, num1, num2) {
  let answer = my_string.split("");
  answer.splice(num1, 1, my_string[num2]);
  answer.splice(num2, 1, my_string[num1]);
  return answer.join("");
}

let my_string = "hello";
let num1 = 1;
let num2 = 2;

console.log(solution(my_string, num1, num2));
