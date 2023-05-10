function solution(cards) {
  let answer = [];

  for (let i = 0; i < cards.length; i++) {
    let box = [];
    let idx = i;
    for (let j = 0; j < cards.length; j++) {
      if (Number(cards[idx])) {
        let newIdx = idx;
        box.push(cards[idx]);
        idx = cards[idx] - 1;
        cards[newIdx] = "o";
      }
    }
    answer.push(box.length);
  }
  answer.sort((a, b) => b - a);
  return answer[0] * answer[1];
}

let cards = [8, 6, 3, 7, 2, 5, 1, 4];

console.log(solution(cards));

// 배열의 담겨있는 카드의 값을 index로 활용해야하는 문제였다.
// 문제가 너무 난해하니 조금 더 문해력을 키우자..(?)
