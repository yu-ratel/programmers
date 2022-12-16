function solution(numbers) {
  return (numbers.reduce((acc, number) => acc + number) / numbers.length).toFixed(1);
}

const numbers = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]];

numbers.map((number) => {
  console.log(solution(number));
})
