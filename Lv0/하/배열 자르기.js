function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

const numbers = [[1, 2, 3, 4, 5], [1, 3, 5]];
const num1 = [1, 1];
const num2 = [3, 2];

numbers.map((num, index) => console.log(solution(num, num1[index], num2[index])));