function solution(picks, minerals) {
  let answer = 0;
  let [dia, iron, stone] = [picks[0], picks[1], picks[2]];
  let list = [];
  let cut = Math.ceil(Math.min(minerals.length, (dia + iron + stone) * 5) / 5);

  for (let i = 0; i < cut; i++) {
    if (i === 0) list.push(minerals.slice(i, 5));
    else {
      list.push(minerals.slice(i * 5, (i + 1) * 5));
    }
  }
  const cntList = [];
  list.map((el) => {
    let cnt = [0, 0, 0];
    el.map((v) => {
      if (v === "diamond") cnt[0]++;
      if (v === "iron") cnt[1]++;
      if (v === "stone") cnt[2]++;
    });
    cntList.push([
      cnt[0] + cnt[1] + cnt[2],
      cnt[0] * 5 + cnt[1] + cnt[2],
      cnt[0] * 25 + cnt[1] * 5 + cnt[2],
    ]);
  });

  cntList
    .sort((a, b) => b[2] - a[2])
    .map((el) => {
      if (dia > 0) return dia--, (answer += el[0]);
      if (iron > 0) return iron--, (answer += el[1]);
      if (stone > 0) return stone--, (answer += el[2]);
    });
  return answer;
}

let picks = [1, 3, 2];
let minerals = [
  "diamond",
  "diamond",
  "diamond",
  "iron",
  "iron",
  "diamond",
  "iron",
  "stone",
];

console.log(solution(picks, minerals));

// 제일 약한 스톤의 가중치를 구할것 그래서 내림차순 해서 ?
// 숫자가 5보다 높으면 다이아 없으면 아이언 없으면 돌로 하는 그리디 형식
// 내일 풀어보자 이거 풀고 출근하기!

//결국 전체 원석을 캐는 피로도를 구해야 풀 수 있는 문제였다.
//stone 의 피로도 편차가 제일 큰 원인 
//다시 한번 뜯어봐야겠다