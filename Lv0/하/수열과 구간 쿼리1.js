function solution(arr, queries) {
  queries.map((query) => {
    const [s, e] = query;
    
    for (let i = s; i <= e; i++) {
      arr[i]++;
    };
  });

  return arr;
}

let arr = [0, 1, 2, 3, 4];
let queries = [[0, 1], [1, 2], [2, 3]];

console.log(solution(arr, queries));