function solution(elements) {
  let list = new Set();

  for (let i = 1; i <= elements.length; i++) {
    let ogList = elements.concat(elements.slice(0, i));
    for (let j = 0; j < elements.length; j++) {
      list.add(ogList.slice(j, j + i).reduce((a, b) => a + b));
    }
  }
  return list.size;
}

let elements = [7, 9, 1, 1, 4];

console.log(solution(elements));

// concat 은 새 배열을 반환한다. set.add 는 자동으로 set배열이기 때문에 중복제거
// 배열도 문자열처럼 slice()가 가능하다.
