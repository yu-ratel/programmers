function solution(myString) {
  let answer = "";

  for (let i = 0; i < myString.length; i++) {
    let str = myString[i];
    if (str === "a" || str === "A") answer += str.toUpperCase();
    else answer += str.toLowerCase();
  }
  return answer;
}

let myString = "abstract algebra";
console.log(solution(myString));
