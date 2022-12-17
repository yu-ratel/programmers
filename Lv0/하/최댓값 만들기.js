function solution(numbers) {
  numbers.sort((a, b) => b - a);
  
  return numbers[0] * numbers[1];
}

const numbers = [[1, 2, 3, 4, 5], [0, 31, 24, 10, 1, 9]];

numbers.map((list) => console.log(solution(list))); 