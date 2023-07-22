function solution(relation) {
  const getCombination = (arr, num) => {
    const results = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombination(rest, num - 1);
      const attached = combinations.map((v) => [fixed, ...v]);
      results.push(...attached);
    });

    return results;
  };
  let answer = [];
  let list = [];

  for (let i = 0; i < relation[0].length; i++) list.push([]);

  relation.map((tupleList) => {
    for (let i = 0; i < tupleList.length; i++) {
      list[i].push(tupleList[i]);
    }
  });

  for (let i = 0; i < list.length; i++) {
    let target = list[i];
    for (let j = i + 1; j < list.length; j++) {
      if (new Set(target).size === target.length) {
        answer.push(target);
        break;
      }
      target = target.map((el, idx) => {
        return (el += " " + list[j][idx]);
      });
      if (j === list.length - 1) {
        if (new Set(target).size === target.length) answer.push(target);
      }
    }
  }
  console.log(answer);
  return new Set(answer).size;
}

let relation = [
  ["a", "1", "aaa", "c", "ng"],
  ["a", "1", "bbb", "e", "g"],
  ["c", "1", "aaa", "d", "ng"],
  ["d", "2", "bbb", "d", "ng"],
];
console.log(solution(relation));

// 조합을 사용해서 모든 조합 만들어봐야 풀릴듯..?
