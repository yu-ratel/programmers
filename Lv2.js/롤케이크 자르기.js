function solution(topping) {
  let answer = 0;
  let map = new Map();
  let countList = new Map();

  topping.map((el) => {
    map.get(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1);
  });

  for (let i of topping) {
    if (countList.size > map.size) break;
    map.set(i, map.get(i) - 1);
    countList.set(i, 1);

    if (!map.get(i)) map.delete(i);
    if (map.size === countList.size) answer++;
  }
  return answer;
}

let topping = [1, 2, 1, 3, 1, 4, 1, 2];
console.log(solution(topping));

// 전체를 구해놓고 하나씩 빼며 비교하는것이 포인트
