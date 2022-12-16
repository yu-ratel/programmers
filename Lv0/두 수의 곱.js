function solution(num1, num2) {
  return num1 * num2;
}

const num1 = [3, 27];
const num2 = [4, 19];

num1.forEach((num, index) => {
  console.log(solution(num, num2[index]));
})