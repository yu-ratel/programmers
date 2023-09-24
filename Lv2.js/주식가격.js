function solution(prices) {
  let answer = [];

  for (let i = 0; i < prices.length - 1; i++) {
    let time = 1;
    for (let j = i + 1; j < prices.length - 1; j++) {
      if (prices[i] > prices[j]) {
        break;
      }
      time++;
    }
    answer.push(time)
  }
  answer.push(0)
  return answer;
}

let prices = [1, 2, 3, 2, 3]
console.log(solution(prices));

//문제가 이해하기 난해했지만 생각보다 간단한 문제 
// 주식가격이 작아지는 경우도 다음 주식가격과 1초의 시간이 있기 때문에 1초는 기본값.