function solution(msg) {
  let answer = [];
  let list = [];
  let cnt = 0;
  for (let i = 1; i <= 26; i++) {
    list.push(String.fromCharCode(64 + i));
  }

  while (msg) {
    let w = "";
    let wc = "";
    let cnt = 0;

    for (let i = 0; i < msg.length; i++) {
      w = msg.slice(0, i);
      wc = msg.slice(0, i + 1);

      if (!list.includes(wc)) {
        answer.push(list.indexOf(w) + 1);
        break;
      }
      if (i === msg.length - 1) {
        answer.push(list.indexOf(wc) + 1);
      }
      cnt++;
    }

    list.push(wc);
    msg = msg.slice(cnt);
  }
  return answer;
}

let msg = "KAKAO";
console.log(solution(msg));
