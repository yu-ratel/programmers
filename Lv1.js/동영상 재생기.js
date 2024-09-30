function solution(video_len, pos, op_start, op_end, commands) {
  const timeNumberType = (str) => {
    const [mm, ss] = str.split(":");

    return Number(mm) * 60 + Number(ss);
  };
  let answer = timeNumberType(pos);

  const onEvent = (curTime, event) => {
    return event === "next" ? Number(curTime) + 10 : Number(curTime) - 10;
  };

  const isSkip = (curTime) => {
    const [startTime, endTime] = [
      timeNumberType(op_start),
      timeNumberType(op_end),
    ];

    if (curTime >= startTime && curTime <= endTime) return true;

    return false;
  };

  if (isSkip(timeNumberType(pos))) answer = timeNumberType(op_end);

  for (let i = 0; i < commands.length; i += 1) {
    const max = timeNumberType(video_len);
    answer = onEvent(answer, commands[i]);

    if (answer < 10) answer = 0;
    if (max - answer < 10) answer = max;
    if (isSkip(answer)) answer = timeNumberType(op_end);
  }

  if (isSkip(answer)) return op_end;

  return `${Math.floor(answer / 60)
    .toString()
    .padStart(2, 0)}:${(answer % 60).toString().padStart(2, 0)}`;
}

let video_len = "10:55";
let pos = "00:05";
let op_start = "00:15";
let op_end = "06:55";
let commands = ["prev", "next", "next"];

console.log(solution(video_len, pos, op_start, op_end, commands));
