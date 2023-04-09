function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || (i + "").includes("3")) {
      n++;
    }
  }
  return n;
}

let n = 15;
console.log(solution(n));

// for문은 n 까지 돌기때문에 n 을 늘려서 검사를 계속 해주면 된다.
