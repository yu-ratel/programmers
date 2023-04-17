const { application } = require("express");

function solution(name, yearning, photo) {
  let answer = [];
  let list = name.concat(yearning);
  photo.map((pick) => {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
      if (pick.includes(list[i])) {
        sum += list[i + list.length / 2];
      }
    }
    answer.push(sum);
  });
  return answer;
}

let name = ["may", "kein", "kain", "radi"];
let yearning = [5, 10, 1, 3];
let photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];

console.log(solution(name, yearning, photo));
