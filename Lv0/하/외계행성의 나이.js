function solution(age) {
  let answer = "";
  let ageList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  age
    .toString()
    .split("")
    .map((el) => (answer += ageList[el]));
  return answer;
}

let age = 23;
console.log(solution(age));
