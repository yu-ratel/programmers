function solution(array) {
  let cnt = Math.floor(array.length / 2);
  return array.sort((a, b) => a - b)[cnt];
}

let array = [1, 2, 7, 10, 11];
console.log(solution(array));
