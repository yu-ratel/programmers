function solution(my_str, n) {
  let answer = [];
  let strArr = my_str.split('');

  while (strArr.length > n) {
    answer.push(strArr.splice(0, n).join(''));
  }

  return answer.concat(strArr.join(''));
}

let my_str = "abc1Addfggg4556b";
let n = 6;

console.log(solution(my_str, n));