function solution(num1, num2) {
  return num1 === num2 ? 1 : -1;
}

const num1 = [2, 11, 7];
const num2 = [3, 11, 99];

num1.forEach((num, index) => {
 console.log(solution(num, num2[index]))
})
