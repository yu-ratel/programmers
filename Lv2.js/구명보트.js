function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);

  while (people.length) {
    if (people[0] + people[people.length - 1] <= limit) {
      answer++;
      people.shift();
      people.pop();
    } else {
      answer++;
      people.pop();
    }
  }

  return answer;
}

let people = [70, 50, 80, 50];
let limit = 100;

console.log(solution(people, limit));

// 탐욕법 오름차순 정렬후 제일 작은것과 큰것 비교 limit 를 넘어가면 큰것만 제거
// 넘어가지않으면 앞과 뒤 둘다 제거 하는 식으로 카운팅
// 지금 당장할 수 있는 최선의 선택 (탐욕법)
