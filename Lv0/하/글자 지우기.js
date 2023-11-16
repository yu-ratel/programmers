const solution = (my_string, indices) => {
  let newString = my_string.split('');
  
  return newString.filter((_, i) => !indices.includes(i)).join('');
}

let my_string = "apporoograpemmemprs";
let indices = [1, 16, 6, 15, 0, 10, 11, 3];

console.log(solution(my_string, indices));