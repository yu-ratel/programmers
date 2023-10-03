function solution(my_string, index_list) {
  return index_list.map((el) =>  my_string[el]).join('');
}

let my_string = "zpiaz";
let index_list = [1, 2, 0, 0, 3];

console.log(solution(my_string, index_list));