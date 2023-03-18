function solution(cacheSize, cities) {
  let answer = 0;
  let stack = [];
  cities = cities.map((el) => el.toLowerCase());

  if (cacheSize === 0) return cities.length * 5;
  cities.map((el) => {
    if (stack.includes(el)) {
      stack.splice(stack.indexOf(el), 1);
      stack.push(el);
      answer += 1;
    } else {
      if (stack.length >= cacheSize) {
        stack.shift();
        stack.push(el);
        answer += 5;
      } else {
        stack.push(el);
        answer += 5;
      }
    }
  });
  return answer;
}

let cacheSize = 3;
let cities = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "Jeju",
  "Pangyo",
  "Seoul",
  "Jeju",
  "Pangyo",
  "Seoul",
];
console.log(solution(cacheSize, cities));
