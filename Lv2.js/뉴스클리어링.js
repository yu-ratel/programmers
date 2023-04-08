function newList(str) {
  let newStr = [];
  let answer = [];
  for (let i = 0; i < str.length - 1; i++) {
    let sum = str.toLowerCase().substring(i, i + 2);
    newStr.push(sum); //
  }

  newStr.map((el) => {
    let item = "";
    for (let i = 0; i <= 1; i++) {
      if (el[i].charCodeAt() >= 97 && el[i].charCodeAt() <= 122) {
        item += el[i];
      }
    }
    if (item.length === 2) answer.push(item);
  });

  return answer;
}

// 문제는 newList 함수에 있었는데 substring 으로 2글자씩 자르는건 통과하고
// 문자열로 선언하고 + 연산자와 ,를 이용해 두 글자씩 자른건 런타임에러가 떴다.
// 런타임 에러는 보통 메모리 총량 사용, 0으로 나누는 경우, 배열의 범위를 벗어나는 경우, 잘못된 형태의 데이터를
// 다루는 경우라는데 내 상황은 배열의 범위를 벗어난 것 같다.
// substring으로 파훼법을 찾는 법을 기억하자.

function solution(str1, str2) {
  let union = [];
  let intersect = [];
  str1 = newList(str1);
  str2 = newList(str2);

  str1.map((el) => {
    if (str2.indexOf(el) >= 0) {
      intersect.push(str2.splice(str2.indexOf(el), 1));
    }
    union.push(el);
  });

  union = union.concat(str2);
  return union.length === 0
    ? 65536
    : parseInt((intersect.length / union.length) * 65536);
}

let str1 = "Abababababababab";
let str2 = "abababababababa";
console.log(solution(str1, str2));
