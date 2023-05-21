function solution(x, y, n) {
  let list = new Array(y + 1).fill(Infinity);
  list[x] = 0;
  for (let i = x; i <= y; i++) {
    list[i + n] = Math.min(list[i + n], list[i] + 1);
    list[i * 2] = Math.min(list[i * 2], list[i] + 1);
    list[i * 3] = Math.min(list[i * 3], list[i] + 1);
  }

  // 첫시도 기본 dfs 실패
  // const dfs = (x, L) => {
  //   if (x > y) return;
  //   if (x === y) list.push(L);
  //   if (x * 2 <= y) dfs(x * 2, L + 1);
  //   if (x * 3 <= y) dfs(x * 3, L + 1);
  //   if (x + n <= y) dfs(x + n, L + 1);
  // };
  // dfs(x, 0);
  return list[y] === Infinity ? -1 : list[y];
}

let x = 10;
let y = 40;
let n = 5;

console.log(solution(x, y, n));

//dp 를 찾아가며 풀긴했는데 정확한 이해는 되지않는다
//다시 공부해봐야할 것 같다.
