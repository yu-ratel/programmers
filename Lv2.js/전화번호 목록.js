function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i] === phone_book[i + 1].slice(0, phone_book[i].length)) {
      return false;
    }
  }
  return true;
}

let phone_book = ["119", "97674223", "1195524421"];

console.log(solution(phone_book));

// 문자열을 정렬할 때는 수의 크기가 아닌 각 요소들끼리 사전순으로 비교하기에 앞에 있는 숫자가 작을 수록 앞에온다.
// 따라서 정렬하고 바로 뒤에것들만 비교해주면 답을 찾을 수 있음.