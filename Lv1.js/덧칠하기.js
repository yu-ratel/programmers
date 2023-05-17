function solution(n, m, section) {
  let answer = 0;
  let wall = new Array(n).fill(0);

  section.map((el) => (wall[el - 1] = 1));
  while (wall.includes(1)) {
    let start = wall.indexOf(1);

    if (start + m >= wall.length) {
      answer++;
      break;
    }
    for (let i = start; i < start + m; i++) {
      wall[i] = 0;
    }
    answer++;
  }

  return answer;
}

let n = 4;
let m = 1;
let section = [1, 2, 3, 4];

console.log(solution(n, m, section));

// 다 풀고나서 다른사람의 풀이를 보고 array.fill 의 기능을 알았다.
// 많은 기능들을 숙지할 것!
