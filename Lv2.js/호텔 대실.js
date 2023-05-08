function solution(book_time) {
  let answer = [];

  if (book_time.length === 1) return 1;

  const timeSet = (time) => {
    return time.split(":").reduce((a, b) => Number(a) * 60 + Number(b));
  };

  book_time.sort();

  book_time.map((el) => {
    if (answer.length === 0) return answer.push(el);

    let inTime = timeSet(el[0]);

    for (let j = 0; j < answer.length; j++) {
      let outTime = timeSet(answer[j][answer[j].length - 1]) + 10;

      if (inTime >= outTime) return answer[j].push(...el);

      if (j === answer.length - 1) return answer.push(el);
    }
  });

  return answer.length;
}

let book_time = [
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
  ["18:20", "21:20"],
];
console.log(solution(book_time));

// 뭐가 문제일까 분으로 맞추는거?
// => 방에 새로운 손님이 들어왔을 때 원래 있던 방의 정보를 가지고 비교를 하면 안되는데 비교를 했었다.
// [answer[j].length - 1] 로 새로 들어온 손님의 종료시간을 가지고 비교해야 했었다..
