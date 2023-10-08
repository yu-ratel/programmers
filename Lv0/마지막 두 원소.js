function solution(num_list) {
  const lastNum = num_list[num_list.length -1];
  const compareNum = num_list[num_list.length - 2];

  lastNum > compareNum ? num_list.push(lastNum - compareNum) : num_list.push(lastNum * 2);

  return num_list;
}

let num_list = [5, 2, 1, 7, 5];

console.log(solution(num_list));