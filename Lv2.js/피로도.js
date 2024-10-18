function solution(k, dungeons) {
  let answer = [];
  const ndg = dungeons.length;
  const ch = Array.from({ length: ndg }, () => 0);

  function DFS(zero, cnt) {
    answer.push(cnt);

    for (let i = 0; i < ndg; i++) {
      let nd = dungeons[i];
      if (zero >= nd[0] && ch[i] === 0) {
        ch[i] = 1;
        DFS(zero - nd[1], cnt + 1);
        ch[i] = 0;
      }
    }
  }

  DFS(k, 0);

  return Math.max(...answer);
}

let k = 80;
let dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];

console.log(solution(k, dungeons));
