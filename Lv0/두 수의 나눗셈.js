function solution(num1, num2) {
  return parseInt((num1 / num2) * 1000);
}

const num1 = [3, 7, 1];
const num2 = [2, 3, 16];

num1.forEach((num, index) => {
  console.log(solution(num, num2[index]));
})