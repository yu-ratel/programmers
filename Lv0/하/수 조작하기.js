function solution(n, control) {
  control.split('').forEach((el) => {
    switch (el) {
      case 'w':
        n += 1;
        break;
      case 's':
        n -= 1;
        break;
      case 'd':
        n += 10;
        break;
      case 'a':
        n -= 10;
        break;
    }
  })

  return n;
}

let n = 0;
let control = "wsdawsdassw";

console.log(solution(n, control));