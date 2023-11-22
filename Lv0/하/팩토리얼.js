const solution = (n) => {
  let result = 1;

  for (let i = 1; i <= 10; i++) {
    result = result * i;
    if (result > n) return i -= 1;
  }

  return 10;
}

let n = 3628800;
console.log(solution(n));