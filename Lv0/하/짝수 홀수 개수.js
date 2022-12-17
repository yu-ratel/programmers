function solution(num_list) {
  let odd = 0; 
  let even = 0;
  num_list.map((num) => num % 2 === 0 ? even += 1 : odd += 1);

  return [even, odd];
}

const num_list = [[1, 2, 3 ,4 ,5], [1, 3, 5, 7]];

num_list.map((num) => console.log(solution(num)));