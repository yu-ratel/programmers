function solution(myString) {
  return myString.split('x').map((v) => v.length);
}

let myString = "oxooxoxxox";

console.log(solution(myString));
