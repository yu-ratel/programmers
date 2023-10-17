function solution(numLog) {
  const strCheck = {'1': 'w', '-1': 's', '10': 'd', '-10':'a'};

  return numLog.slice(1).map((v, i) => strCheck[v - numLog[i]]).join('');
}

let numLog = [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1];

console.log(solution(numLog));