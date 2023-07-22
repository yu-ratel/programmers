function getCombination(arr, selectNum) {
  let result = [];
  if (selectNum === 1) {
    return arr.map((a) => [a]);
  }
  arr.forEach((fix, i, origin) => {
    const rest = origin.slice(i + 1);
    const combi = getCombination(rest, selectNum - 1);
    const attach = combi.map((c) => [fix, ...c]);
    result.push(...attach);
  });
  return result;
}

function solution(relation) {
  let list = Array.from(Array(relation[0].length), (_, i) => i);
  let combi = [];

  for (let i = 0; i < list.length; i++) {
    combi.push(...getCombination(list, i + 1));
  }

  let only = [];

  combi.map((numList) => {
    let set = new Set();
    relation.map((tuple) => {
      set.add(numList.map((num) => tuple[num]).join(","));
    });
    if (set.size === relation.length) only.push(numList);
  });

  let min = [];

  while (only.length) {
    min.push(only[0]);

    only = only.reduce((acc, cur) => {
      let overlap = only[0].every((el) => cur.includes(el));
      // 중복된것이 있다면 true 없다면 false;
      if (!overlap) acc.push(cur);
      // 중복된 것이 없다면 acc(결과)로 only 갱신
      return acc;
    }, []);
  }

  return min.length;
}

let relation = [
  ["a", "1", "aaa", "c", "ng"],
  ["a", "1", "bbb", "e", "g"],
  ["c", "1", "aaa", "d", "ng"],
  ["d", "2", "bbb", "d", "ng"],
];
console.log(solution(relation));

// 조합을 사용해서 모든 경우의 수를 구하고
// 유일성을 체크한 뒤
// 최소성 체크 (every, reduce 등 고차함수를 더욱 공부해야겠다. 이해하는데 한참걸림..)
