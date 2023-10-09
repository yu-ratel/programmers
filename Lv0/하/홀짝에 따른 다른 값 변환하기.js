function solution(n) {
  let list = Array(n).fill(0).map((v, i) => v = i + 1);

  let odd = list.filter((el) => el % 2 === 1).reduce((acc, cur) => acc + cur, 0);
  let even = list.filter((el) => el % 2 === 0).reduce((acc, cur) => acc + cur ** 2, 0);
  
  return n % 2 === 1 ? odd : even;
}

let n = 10;

console.log(solution(n));