function solution(sides) {
  const maxSide = Math.max(...sides);
  let sum = sides.reduce((a, b) => a + b, 0) - maxSide;

  return maxSide < sum ? 1 : 2;
}

const sides = [[1, 2, 3], [3, 6, 2], [199, 72, 222]];

sides.map((side) => console.log(solution(side)));