function solution(plans) {
  let answer = [];

  const timeSet = (start) => {
    let time = start.split(":");
    let sumTime = time[0] * 60 + time[1] * 1;
    return sumTime;
  };

  let list = plans
    .map((plan) => {
      return [plan[0], timeSet(plan[1]), plan[2] * 1];
    })
    .sort((a, b) => a[1] - b[1]);

  let startPlan = list.shift();
  let stack = [startPlan];
  let curTime = startPlan[1];

  while (list.length) {
    const curPlan = list.shift();
    const [name, start, playTime] = curPlan;
    let outTime = start - curTime;
    curTime = start;

    while (stack.length && outTime > 0) {
      const plan = stack.pop();
      const [_name, _start, _playTime] = plan;

      if (_playTime <= outTime) {
        answer.push(_name);
        outTime -= _playTime;
      } else {
        plan[2] = _playTime - outTime;
        outTime = 0;
        stack.push(plan);
      }
    }
    stack.push(curPlan);
  }

  while (stack.length) {
    answer.push(stack.pop()[0]);
  }
  return answer;
}

let plans = [
  ["science", "12:40", "50"],
  ["music", "12:20", "40"],
  ["history", "14:00", "30"],
  ["computer", "12:30", "100"],
];
console.log(solution(plans));

//시간이 같거나 작다면 바로 끝내면서 이름누적, 아니라면 시간을 빼가면서 다시 진행중에 집어넣기
//간단하지만 구현이 어려웠던 문제
//다시한번 중간 while문 뜯어보기
