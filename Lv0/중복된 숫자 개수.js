function solution(array, n) {
  return array.filter(x => x === n).length;
}

const array = [[1, 1, 2, 3, 4, 5], [0, 2, 3, 4]];
const n = 1;

array.map((numbers) => {
  console.log(solution(numbers, n));
})