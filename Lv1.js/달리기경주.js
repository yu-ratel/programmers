function solution(players, callings) {
  let answer = players;
  let map = {};

  for (let i = 0; i < answer.length; i++) {
    map[answer[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    let call = map[callings[i]];
    let out = answer[call - 1];
    answer[call - 1] = answer[call];
    answer[call] = out;
    map[out] = call;
    map[callings[i]] = call - 1;
  }
  return answer;
}

let players = ["mumu", "soe", "poe", "kai", "mine"];
let callings = ["kai", "kai", "mine", "mine"];
console.log(solution(players, callings));

// 흔한 swap 문제인데 시간복잡도를 줄이기위해 indexOf로 매번 배열을 탐색하는 것에서
// 객체를 이용해서 바꾸었다.
// 객체를 이용해서 하니 말도안되게 빨라짐..
