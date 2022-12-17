function solution(my_string, letter) {
  return my_string.replaceAll(letter, '');
}

const my_string = ['abcdef', 'BCBdbe'];
const letter = ['f', 'b'];

my_string.map((str, index) => console.log(solution(str, letter[index])));

// 좋았던 코드 
// my_string.split(letter).join('') 
// split() 는 인자를 기준으로 분리하기 때문에 분리한 후 남은 문자를 다시 join()