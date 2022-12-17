function solution(my_string) {
  return my_string.split('').reverse().join('');
}


const my_string = ['jaron', 'bread'];

my_string.map((str) => console.log(solution(str)));

