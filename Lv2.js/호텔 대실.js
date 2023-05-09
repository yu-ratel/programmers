function solution(book_time) {
  let answer = [];

  if (book_time.length === 1) return 1;

  const timeSet = (time) => {
    return time.split(":").reduce((a, b) => Number(a) * 60 + Number(b));
  };

  book_time.sort();
  answer.push(book_time[0]);

  for (let i = 1; i < book_time.length; i++) {
    let inTime = timeSet(book_time[i][0]);

    answer.push(book_time[i]);
    for (let j = 0; j < answer.length; j++) {
      if (answer[j] != "pop") {
        let outTime = timeSet(answer[j][1]) + 10;
        if (inTime >= outTime) {
          answer[j] = "pop";
          break;
        }
      }
    }
  }

  return answer.filter((el) => el != "pop").length;
}

let book_time = [
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
  ["18:20", "21:20"],
  ["21:30", "22:10"],
];
console.log(solution(book_time));

// 뭐가 문제일까 분으로 맞추는거?
// => 방에 새로운 손님이 들어왔을 때 원래 있던 방의 정보를 가지고 비교를 하면 안되는데 비교를 했었다.
// [answer[j].length - 1] 로 새로 들어온 손님의 종료시간을 가지고 비교해야 했었다..
