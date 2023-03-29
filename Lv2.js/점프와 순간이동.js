function solution(n) {
  let ans = 0;
  let k = n;
  while (k) {
    if (k % 2 === 0) {
      k = k / 2;
    } else {
      k = k - 1;
      ans++;
    }
  }
  return ans;
}

let n = 5000;
console.log(solution(n));

//생각의 전환 끝에서부터 2씩 나눠서 순간이동
