function solution(my_string) {
  const answer = Array.from({ length: 52 }).fill(0);
  const [lowerCut, upCut] = [65, 71];

  my_string.split("").forEach((el) => {
    let target = el.charCodeAt();
    target > 96 ? (target -= upCut) : (target -= lowerCut);

    answer[target] += 1;
  });
  return answer;
}

let my_string = "Programmers";

console.log(solution(my_string));
