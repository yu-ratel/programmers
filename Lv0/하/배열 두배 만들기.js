function solution(numbers) {
  return numbers.map((num) => num*2);
}

const numbers = [[1, 2, 3, 4, 5], [1, 2, 100, -99, 1, 2, 3]];

numbers.map((num) => console.log(solution(num)))