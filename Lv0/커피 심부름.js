function solution(order) {
  let answer = 0;

  order.forEach((el) => el.indexOf("americano") > -1 || el.indexOf("anything") > -1 ? answer += 4500 : answer += 5000);

  return answer;
}

let order = ["americanoice", "americano", "iceamericano"];

console.log(solution(order));