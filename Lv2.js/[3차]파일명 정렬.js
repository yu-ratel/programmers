function solution(files) {
  let newFiles = [];
  let numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  files.map((file) => {
    let headFlag = true;
    let numberFlag = true;
    let start = 0;
    let head = "";
    let number = "";
    let tail = "";

    for (let i = 0; i < file.length; i++) {
      if (headFlag && file[i] >= 0 && file[i] <= 9 && file[i] != " ") {
        head = file.slice(0, i);
        headFlag = false;
        start = i;
      }
      if (!headFlag) {
        if (numberFlag && numberList.includes(file[i]) && i - start <= 5)
          number += file[i];
        else {
          numberFlag = false;
          tail += file[i];
        }
      }
    }
    newFiles.push([head, number, tail]);
  });

  newFiles = newFiles.sort((a, b) => {
    if (a[0].toUpperCase() === b[0].toUpperCase()) {
      if (parseInt(a[1]) === parseInt(b[1])) {
        return;
      }
      return a[1] - b[1];
    }
    return a[0].toUpperCase().localeCompare(b[0].toUpperCase());
  });

  return newFiles.map((el) => el.join(""));
}

let files = ["O a00321", "O49qcGPHuRLR5FEfoO00321"];

console.log(solution(files));

//  if (headFlag && file[i] >= 0 && file[i] <= 9 ) 이 조건문에
// 공백도 걸림 이런게 문제일 때는 공백을 넣어서 결과값을 디버깅해볼것.
// 문자열 localeCompare 정렬
