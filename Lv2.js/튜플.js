function solution(s) {
  let answer = [];
  s = s.split("{").join().split("}");
  s.map((t) =>
    t.split(",").map((el) => {
      if (Number(el)) answer.push(Number(el));
    })
  );

  let map = new Map();

  answer.map((el) => {
    map.has(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1);
  });

  answer = [];
  map = [...map].sort((a, b) => b[1] - a[1]).map((el) => answer.push(el[0]));
  return answer;
}

let s = "{{4,2,3},{3},{2,3,4,1},{2,3}}";
console.log(solution(s));

// hash map 을 이용하여 풀었지만 처음에 length 순으로 정렬하고
// set을 이용해서 풀었다면 더 깔끔한 풀이가 됬을 것 같다.
