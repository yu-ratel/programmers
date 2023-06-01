function solution(num_list) {
  let answer = [];
  num_list = num_list.sort((a, b) => a - b);

  for (let i = 5; i < num_list.length; i++) {
    answer.push(num_list[i]);
  }
  return answer;
}

let num_list = [12, 4, 15, 46, 38, 1, 14, 56, 32, 10];
console.log(solution(num_list));
