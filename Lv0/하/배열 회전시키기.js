function solution(numbers, direction) {
  if (direction === "right") {
    let tmp = numbers.pop();
    numbers.unshift(tmp);
  }

  if (direction === "left") {
    let tmp = numbers.shift();
    numbers.push(tmp);
  }

  return numbers;
}