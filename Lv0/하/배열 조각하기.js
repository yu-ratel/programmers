function solution(arr, query) {
  query.forEach((el, idx) => {
    if (idx % 2 === 0) {
      arr = arr.slice(0, el + 1);
    }

    if (idx % 2 === 1) {
      arr = arr.slice(el);
    }
  })

  return arr;
}

let arr = [0, 1, 2, 3, 4, 5];
let query = [4, 1, 2];

console.log(solution(arr, query));