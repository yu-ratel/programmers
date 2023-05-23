function solution(n) {
  let answer = [];
  let start = 0;
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    answer.push(new Array(i).fill(0));
  }

  while ([].concat(...answer).includes(0)) {
    for (let i = 1; i <= n; i++) {
      if (answer[i - 1][start] === 0) answer[i - 1][start] = ++cnt;

      if (i === n - start) {
        for (let j = 0; j <= answer[i - 1].length; j++) {
          if (answer[i - 1][j] === 0) answer[i - 1][j] = ++cnt;
        }
      }
    }

    for (let i = n - 2; i >= 1; i--) {
      let end = answer[i].length - (start + 1);
      if (answer[i][end] === 0) answer[i][end] = ++cnt;
    }

    start++;
  }
  return [].concat(...answer);
}

let n = 7;
console.log(solution(n));

//멍청한 빡구현 그자체..
//하지만 푼게 어디~
//조건을 생각해보고 다른풀이를 보고 배워보자 (https://school.programmers.co.kr/learn/courses/30/lessons/68645/solution_groups?language=javascript)
