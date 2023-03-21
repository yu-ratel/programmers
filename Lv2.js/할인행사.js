function solution(want, number, discount) {
  let answer = 0;
  let breakPoint = discount.length + 1 - number.reduce((acc, cur) => acc + cur);

  for (let i = 0; i < breakPoint; i++) {
    let list = [...number];
    for (let j = i; j < i + 10; j++) {
      if (want.includes(discount[j])) {
        if (list[want.indexOf(discount[j])] > 0)
          list[want.indexOf(discount[j])] -= 1;
      }
    }
    if (list.reduce((acc, cur) => acc + cur) === 0) answer++;
  }

  return answer;
}

let want = ["banana", "apple", "rice", "pork", "pot"];
let number = [3, 2, 2, 2, 1];
let discount = [
  "chicken",
  "apple",
  "apple",
  "banana",
  "rice",
  "apple",
  "pork",
  "banana",
  "pork",
  "rice",
  "pot",
  "banana",
  "apple",
  "banana",
];

console.log(solution(want, number, discount));
