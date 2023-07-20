function solution(users, emoticons) {
  const list = [];
  const discount = [10, 20, 30, 40];
  const arr = [];

  function DFS(idx) {
    if (idx === emoticons.length) return list.push([...arr]);
    for (let i = 0; i < discount.length; i++) {
      arr[idx] = discount[i];
      DFS(idx + 1);
    }
  }

  DFS(0);

  let answer = [];
  list.map((el) => {
    let [join, totalSum] = [0, 0];

    users.map((user) => {
      let [rate, money] = [user[0], user[1]];
      let sum = 0;
      let flag = false;

      emoticons.map((price, priceIdx) => {
        if (el[priceIdx] >= rate) {
          sum += (price * (100 - el[priceIdx])) / 100;
        }
        if (sum >= money) {
          flag = true;
          return;
        }
      });
      flag ? join++ : (totalSum += sum);
    });
    answer.push([join, totalSum]);
  });

  answer.sort((a, b) => {
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;

    return b[1] - a[1];
  });

  return answer[0];
}

let users = [
  [40, 10000],
  [25, 10000],
];
let emoticons = [7000, 9000];

console.log(solution(users, emoticons));

// DFS로 모든 할인율 경우의수를 구하고 거기서 계산하여 문제에 주어진 조건대로 정렬 한 문제
// 시간이 여유로우므로 (이걸 판단할 수 있는 능력 - 문제 조건범위 파악) 꾸역꾸역 풀면된다.
