function solution(numbers) {
  let answer = [];

  numbers.map((num) => answer.push(num.toString(2)));
  answer.map((el, idx) => {
    if (numbers[idx] % 2 === 0) return (answer[idx] = parseInt(el, 2) + 1);

    if (el.indexOf(0) === -1) el = "0" + el;

    el = el.split("");
    for (let i = el.length; i >= 0; i--) {
      if (el[i] === "0") {
        el[i] = "1";
        el[i + 1] = "0";
        break;
      }
    }
    return (answer[idx] = parseInt(el.join(""), 2));
  });
  return answer;
}

let numbers = [2, 7];
console.log(solution(numbers));

// while (1) {
//   plus++;
//   let cnt = 0;
//   let num = el.split("");
//   let plusNum = plus.toString(2).slice(-cut).split("");

//   for (let i = 0; i < num.length; i++) {
//     if (num[i] === plusNum[i]) cnt++;
//   }

//   if (cnt >= plus.toString(2).length - 2) {
//     answer[idx] = plus;
//     break;
//   }
// }
