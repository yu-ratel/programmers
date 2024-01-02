function solution(my_string) {
  return my_string.replace(/[A-z]/g, ' ').split(' ').reduce((a, b) => Number(a) + Number(b), 0);
}

let my_string = "00123aA0110BcC00oOp123";

console.log(solution(my_string));