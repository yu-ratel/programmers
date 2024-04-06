const solution = (friends, gifts) => {
  const N = friends.length;
  const nameMap = new Map(friends.map((name, idx) => [name, idx]));
  const giftTable = Array.from({ length: N }, () => Array(N).fill(0));
  const rankInfo = Array(N).fill(0);
  const nextMonth = Array(N).fill(0);

  gifts.forEach((info) => {
    const [from, to] = info.split(" ");
    giftTable[nameMap.get(from)][nameMap.get(to)]++;
  });

  giftTable.forEach((row, i) => {
    rankInfo[i] = row.reduce((a, b, j) => a + b - giftTable[j][i], 0);
  });

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j += 1) {
      if (i === j) continue;
      if (giftTable[i][j] > giftTable[j][i]) nextMonth[i]++;
      if (giftTable[i][j] < giftTable[j][i]) nextMonth[j]++;
      if (giftTable[i][j] === giftTable[j][i]) {
        if (rankInfo[i] > rankInfo[j]) nextMonth[i]++;
        if (rankInfo[i] < rankInfo[j]) nextMonth[j]++;
      }
    }
  }

  return Math.max(...nextMonth);
};

const friends = ["muzi", "ryan", "frodo", "neo"];
const gifts = ["muzi frodo", "muzi frodo", "ryan muzi"];

console.log(solution(friends, gifts));
