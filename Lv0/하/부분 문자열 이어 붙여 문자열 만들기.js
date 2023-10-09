function solution(my_string, parts) {
  let answer = ''
  my_string.map((str, idx) => {
    answer += str.slice(parts[idx][0], parts[idx][1] + 1)
  })

  return answer
}

let my_string = ["progressive", "hamburger", "hammer", "ahocorasick"];
let parts = [[0, 4], [1, 2], [3, 5], [7, 7]];
console.log(solution(my_string, parts));