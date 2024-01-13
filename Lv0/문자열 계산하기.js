function solution(my_string) {
  let arr = my_string.split(' ');

  let tmp = arr[0] * 1;

  for (let i = 1; i < arr.length; i += 1){
    if(arr[i] === '+') {
      tmp += arr[i + 1] * 1;
    }
     if(arr[i] === '-') {
      tmp -= arr[i + 1] * 1;
    }

    else continue;
  }
  return tmp;
}