function solution(my_string, queries) {
  const answer = my_string.split('');

  queries.forEach((arr) => {
    const [start, end] = arr;
    const reverseStr = answer.slice(start, end + 1).reverse();

    answer.splice(start, end - start + 1, ...reverseStr);
  })

  return answer.join('');
}

let my_string = "rermgorpsam";
let queries = [[2, 3], [0, 7], [5, 9], [6, 10]];

console.log(solution(my_string, queries));