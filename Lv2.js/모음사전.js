function solution(word) {
  let answer = -1;
  let list = ["A", "E", "I", "O", "U"];
  let check = true;

  function DFS(item) {
    if (check) {
      answer++;
      if (item === word) {
        check = false;
        return;
      }
      if (word !== item && item.length < 5) {
        for (let i = 0; i < list.length; i++) {
          DFS(item + list[i]);
        }
      }
      return;
    }
  }
  DFS("");

  return answer;
}

let word = "AAAAE";
console.log(solution(word));

//DFS의 대한 이해력이 더 필요하다.
