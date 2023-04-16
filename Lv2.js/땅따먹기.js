function solution(land) {
  for (let i = 1; i < land.length; i++) {
    let plus = land[i - 1];
    let max = plus.indexOf(Math.max(...plus));
    for (let j = 0; j < land[i].length; j++) {
      if (j === max) {
        let a = plus[max];
        plus[max] = 0;
        land[i][j] += Math.max(...plus);
        plus[max] = a;
      } else {
        land[i][j] += plus[max];
      }
    }
  }
  return Math.max(...land[land.length - 1]);
}

let land = [
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
];

console.log(solution(land));
