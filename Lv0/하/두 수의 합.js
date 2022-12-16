function solution(num1, num2) {
  return num1 + num2 ;
}

const num1 = [2, 100];
const num2 = [3, 2];

num1.forEach((num, index) => {
  console.log(solution(num, num2[index]));
})