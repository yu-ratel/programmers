// function solution(numbers, k) {
//   let answer = 0;
//   let count = 0;
//   let quque = [];

//   while (count !== k) {
//     const tmp = numbers.shift();
//     quque.push(tmp);
//     numbers.push(tmp);

//     if (quque.length === 2) {
//       answer = quque[0];
//       quque = [];      
//       count += 1;
//     }
//   }

//   return answer;
// }

function solution(numbers, k) {
  return numbers[(2 * (k - 1)) % numbers.length];
}

let numbers = [1, 2, 3, 4];
let k = 2;

console.log(solution(numbers, k));