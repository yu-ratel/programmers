const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const max = (list) => {
  let map = new Map();
  let answer = [];

  list.map((el) => {
    let menu = el.sort().join("");
    map.get(menu) ? map.set(menu, map.get(menu) + 1) : map.set(menu, 1);
  });

  let maxMenu = Math.max(...map.values());
  for ([k, v] of map) {
    if (maxMenu > 1 && maxMenu === v) answer.push(k);
  }
  return answer;
};

function solution(orders, coures) {
  let answer = [];
  for (let i = 0; i < coures.length; i++) {
    let len = coures[i];
    let list = [];
    for (let j = 0; j < orders.length; j++) {
      let menu = orders[j].split("");
      getCombinations(menu, len).length > 0
        ? (list = list.concat(getCombinations(menu, len)))
        : null;
    }
    answer = answer.concat(max(list));
  }
  return answer.sort();
}

let orders = ["XYZ", "XWY", "WXA"];
let coures = [2, 3, 4];

console.log(solution(orders, coures));

//난잡 그 자체지만 직관적이라고 생각한다.
//조합 순열에 대해 빠듯한 이해가 필요할듯.
