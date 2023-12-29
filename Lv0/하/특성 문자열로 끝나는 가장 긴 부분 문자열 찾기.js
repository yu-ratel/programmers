function solution(myString, pet) {
  return myString.slice(0, myString.lastIndexOf(pet) + pet.length);
}

let myString = "AbCdE";
let pet = "dE";

console.log(solution(myString, pet));