function solution(num_list) {
  return num_list.reverse();
}

const num_list = [[1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 2], [1, 0, 1, 1, 1, 3, 5]];

num_list.map((num) => console.log(solution(num_list)));