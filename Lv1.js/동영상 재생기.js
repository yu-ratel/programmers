function solution(video_len, pos, op_start, op_end, commands) {
  let answer = pos;

  const timeNumberType = (str) => {
    const [mm, ss] = str.split(":");

    return Number(mm) * 60 + Number(ss);
  };

  const onEvent = (cur, event) => {
    const curTime = timeNumberType(cur);
    return event === "next" ? curTime + 10 : curTime - 10;
  };

  const isSkip = (cur) => {
    const curTime = timeNumberType(cur);
    const [startTime, endTime] = [
      timeNumberType(op_start),
      timeNumberType(op_end),
    ];

    if (curTime >= startTime && curTime <= endTime) return true;

    return false;
  };

  if (isSkip(pos)) answer = op_end;

  for (let i = 0; i < commands.length; i += 1) {
    const max = timeNumberType(video_len);
    answer = onEvent(answer, commands[i]);

    if (answer < 10) answer = 0;
    if (max - answer < 10) answer = max;
  }

  return `${Math.floor(answer / 60)
    .toString()
    .padStart(2, 0)}:${answer % 60}`;
}

let video_len = "10:55";
let pos = "00:05";
let op_start = "00:15";
let op_end = "06:55";
let commands = ["prev", "next", "next"];

console.log(solution(video_len, pos, op_start, op_end, commands));
