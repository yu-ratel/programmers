function solution(my_string) {
  return my_string.split('').map((str) => str === str.toLowerCase() ? str.toUpperCase() : str.toLowerCase()).join('');
}

let my_string = "ccCc";

console.log(solution(my_string));