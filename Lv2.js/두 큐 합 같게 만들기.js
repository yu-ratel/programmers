function solution(queue1, queue2) {
  let answer = -1;
  const sum = (arr) => arr.reduce((a, b) => a + b);
  let sum1 = sum(queue1);
  let sum2 = sum(queue2);
  let tosum = (sum1 + sum2) / 2;
  let queue = [...queue1, ...queue2];

  let st = 0;
  let et = queue1.length;

  for (let i = 0; i < queue1.length * 3; i++) {
    if (sum1 === tosum) return i;
    if (sum1 > tosum) {
      sum1 -= queue[st++];
    } else {
      sum1 += queue[et++];
    }
  }
  return answer;
}

let queue1 = [3, 2, 7, 2];
let queue2 = [4, 6, 5, 1];
console.log(solution(queue1, queue2));
