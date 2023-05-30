function solution(m, musicinfos) {
  let time = [];

  const strGenerator = (str) => {
    let answer = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "#") continue;

      if (str[i + 1] === "#") answer.push(str[i] + str[i + 1]);
      else answer.push(str[i]);
    }

    return answer;
  };

  m = strGenerator(m);

  const timeSet = (hour, minutes) => {
    return Number(hour) * 60 + Number(minutes);
  };

  musicinfos.map((el) => {
    let flag = false;
    el = el.split(",");
    let start = el[0].split(":");
    let end = el[1].split(":");
    let startTime = timeSet(start[0], start[1]);
    let endTime = timeSet(end[0], end[1]);
    let scale = strGenerator(el[3]);

    for (let i = 0; i < endTime - startTime - strGenerator(el[3]).length; i++) {
      scale.push(scale[i]);
    }

    if (scale.length > endTime - startTime) {
      for (let i = endTime - startTime; i < strGenerator(el[3]).length; i++) {
        scale.pop();
      }
    }

    let cnt = 0;

    for (let i = 0; i < scale.length; i++) {
      if (scale[i] === m[cnt]) cnt++;
      else if (m[cnt - 1] === scale[i]) continue;
      else cnt = 0;
      if (cnt === m.length) {
        flag = true;
        break;
      }
    }

    if (flag) {
      time.push([endTime - startTime, el[2]]);
    }
  });
  if (time.length === 0) return "(None)";
  time.sort((a, b) => b[0] - a[0]);
  return time[0][1];
}

let m = "CDEFGAC";
let musicinfos = ["12:00,12:06,HELLO,CDEFGAAA"];

console.log(solution(m, musicinfos));

//반례 = > let m = "CCB";
//let musicinfos = ["03:00,03:10,FOO,CCB#CCB", "04:00,04:08,BAR,ABC"];
//음악 길이보다 재생된 시간이 짧을 때는 처음부터 재생 시간만큼만 재생된다.(30번 테스트케이스)

//생각보다 오랜시간이 걸린 문제였다. 구현의 초점이 맞추어진 문제였는데 문제 요구사항 하나하나 잘 살펴보고
//천천히 구현하면 무리없이 풀 수 있을 것 같다.
