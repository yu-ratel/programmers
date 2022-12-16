function solution(n) {
  let answer = 0;
  for(let i = 2; i <= n; i += 2) {
    answer += i;
  }

  return answer;
}

const n = [10, 4];

n.map((num) => {
  console.log(solution(num));
})