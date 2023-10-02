function solution(my_string) {
  let sum = 0;
  my_string.split('').forEach((el) => {
    if(el > 0) sum += Number(el)
  });

  return sum
}

let my_string = "aAb1B2cC34oOp";

console.log(solution(my_string));