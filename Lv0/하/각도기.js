function solution(angle) {
  if(angle > 0 && angle < 90) return 1;
  if(angle === 90) return 2;
  if(angle > 90 && angle < 180) return 3;
  if(angle === 180 ) return 4;
}

const angle = [70, 91, 180];

angle.map((num) => {
 console.log(solution(num));
})

// 단축풀이 
return[0, 90, 91, 180].filter(x => angle >= x).length
// 단순 if 문보다는 고차함수를 사용하기 위해 노력하자.
