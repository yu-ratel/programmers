function solution(strArr) {
  const strLengths = strArr.map((el) => el = el.length);
  const map = new Map();

  strLengths.forEach((el) => {
    map.get(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1);
  });

  return Math.max(...map.values());

}

let strArr = ["a","bc","d","efg","hi"];

console.log(solution(strArr));