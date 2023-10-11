function solution(todo_list, finished) {
  return todo_list.filter((_, i) => !finished[i]);
}

let todo_list = ["problemsolving", "practiceguitar", "swim", "studygraph"];
let finished = [true, false, true, false];

console.log(solution(todo_list, finished));