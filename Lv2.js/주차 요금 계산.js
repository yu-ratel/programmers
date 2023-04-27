function solution(fees, records) {
  let answer = [];
  let inMap = new Map();
  let outMap = new Map();

  const cost = (time) => {
    if (time <= fees[0]) answer.push(fees[1]);
    else {
      let extraMoney =
        fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3];
      answer.push(extraMoney);
    }
  };

  const minuteSum = (str) => {
    let time = str.split(":");
    let minute = Number(time[0] * 60) + Number(time[1]);
    return minute;
  };
  records = records.map((el) => el.split(" "));

  if (records.length === 1) {
    cost(minuteSum("23:59") - minuteSum(records[0][0]));
    return answer;
  }

  for (let i = 0; i < records.length; i++) {
    if (!inMap.get(records[i][1])) {
      inMap.set(records[i][1], [minuteSum(records[i][0])]);
    } else {
      if (records[i][2] === "IN") {
        inMap.get(records[i][1]).push(minuteSum(records[i][0]));
      } else {
        if (!outMap.get(records[i][1])) {
          outMap.set(records[i][1], [minuteSum(records[i][0])]);
        } else outMap.get(records[i][1]).push(minuteSum(records[i][0]));
      }
    }
  }

  inMap = [...inMap];
  outMap = [...outMap];

  let outList = outMap.map((el) => el[0]);
  inMap.map((el) =>
    !outList.includes(el[0]) ? outMap.push([el[0], [minuteSum("23:59")]]) : null
  );

  inMap.sort();
  outMap.sort();

  for (let i = 0; i < inMap.length; i++) {
    if (inMap[i][1].length != outMap[i][1].length) {
      outMap[i][1].push(minuteSum("23:59"));
      outMap[i][1] = outMap[i][1].reduce((a, b) => a + b);
    } else outMap[i][1] = outMap[i][1].reduce((a, b) => a + b);
    inMap[i][1] = inMap[i][1].reduce((a, b) => a + b);
  }

  outMap = outMap.concat(inMap).sort();

  let list = [];
  for (let i = 1; i < outMap.length; i += 2) {
    list.push([outMap[i][0], Math.abs(outMap[i][1] - outMap[i - 1][1])]);
  }

  list.map((el) => cost(el[1]));
  return answer;
}

let fees = [180, 5000, 10, 600];
let records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];
console.log(solution(fees, records));

// 진짜 너무 난잡하게 풀었는데 리팩토링하면 좋을 꺼같다.
// 3~12 테스트케이스가 런타임 에러가 났던 이유
//  let outList = outMap.map((el) => el[0]);
//inMap.map((el) =>
//!outList.includes(el[0]) ? outMap.push([el[0], [minuteSum("23:59")]]) : null
//);
//위의 코드를 안했을 때 입차, 출차가 한번이라도 겹쳤던 차들은 문제없지만 입차만 있는경우
//아래의 코드에서 인덱스를 기준으로 하기 때문에 비교자체를 하지못했다.

//3,7, 10 이 틀렸던 이유
//같은 차량번호일때 입차출차가 다르다면 이또한 인덱스로 하기 때문에
//   if (inMap[i][1].length != outMap[i][1].length)
//이 부분에서
//outMap[i][1] = minuteSum("23:59") + Number(outMap[i][1]);
//이렇게 처리해주었기 때문에 하나의 차량에 출차가 많다면 다같이 합산이되는게아니라
// [341, 221] 를 한숫자로 인식을 못하기때문에 실패가 나왔었다.
