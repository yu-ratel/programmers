function solution(num_list) {
  const multiply = num_list.reduce((acc, cur) => acc * cur);
  const square = num_list.reduce((acc, cur) => acc + cur) ** 2;
  
  return multiply < square ? 1 : 0;
}

let num_list = [3, 4, 5, 2, 1];
console.log(solution(num_list));